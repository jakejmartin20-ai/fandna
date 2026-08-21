// FanDNA share-card rendering, canvas helpers + generateShareCard. Sport-aware (Phase 4):
// the team data comes from the active sport, the strip label and closing line follow the sport,
// and the genome sequence shows every completed strand.
import { DIM_COLORS, DIM_CODES, DIM_ORDER } from "../data/pl";
import { SPORT_DATA } from "../lib/sportData";
import { SPORTS, FAMILIES } from "../lib/manifest";
import { REGISTER } from "./register";
import { standing } from "./genomeRead";
import { completedGroups } from "./crest";

function hexToRgb(h){h=h.replace("#","");return [parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)];}
function relLum(rgb){const f=v=>{v/=255;return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4);};return 0.2126*f(rgb[0])+0.7152*f(rgb[1])+0.0722*f(rgb[2]);}
function onColorText(hex){return relLum(hexToRgb(hex))>0.5?"#0c0c12":"#f4f1ec";}
function roundRectPath(ctx,x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}
function trackedWidth(ctx,s,tr){let w=0;for(const ch of s)w+=ctx.measureText(ch).width+tr;return s.length?w-tr:0;}
function drawTracked(ctx,s,cxc,y,font,fill,tr){ctx.save();ctx.font=font;ctx.fillStyle=fill;ctx.textAlign="left";const w=trackedWidth(ctx,s,tr);let xx=cxc-w/2;for(const ch of s){ctx.fillText(ch,xx,y);xx+=ctx.measureText(ch).width+tr;}ctx.restore();}
function wrapCanvasText(ctx,s,maxw){const words=s.split(" ");const lines=[];let cur="";for(const w of words){const t=cur?cur+" "+w:w;if(ctx.measureText(t).width<=maxw||!cur)cur=t;else{lines.push(cur);cur=w;}}if(cur)lines.push(cur);return lines;}

// Hex family on canvas (mirrors the HexBadge SVG geometry so cards match the app).
function hexPath(x,cx,cy,R){const a=R*0.866;const p=[[cx,cy-R],[cx+a,cy-R/2],[cx+a,cy+R/2],[cx,cy+R],[cx-a,cy+R/2],[cx-a,cy-R/2]];x.beginPath();x.moveTo(p[0][0],p[0][1]);for(let i=1;i<6;i++)x.lineTo(p[i][0],p[i][1]);x.closePath();}
// Solid club hex + tricode, with the consistent light edge that lifts it off the dark on any kit.
function drawTeamHex(x,cx,cy,R,color,mark){
  hexPath(x,cx,cy,R);x.fillStyle=color;x.fill();
  x.save();x.globalAlpha=0.55;x.lineWidth=Math.max(2,R*0.03);x.strokeStyle="#c9c9d6";x.stroke();x.restore();
  if(mark){x.fillStyle=onColorText(color);x.font="500 "+Math.round(R*0.4)+"px 'DM Mono',monospace";x.textAlign="center";x.textBaseline="middle";x.fillText(mark,cx,cy+2);x.textBaseline="alphabetic";}
}
// Group strand hex: holder + the twin helix strands, one rung per club in its own colour.
function drawStrandHex(x,cx,cy,R,cols){
  hexPath(x,cx,cy,R);x.fillStyle="#1a1a26";x.fill();x.lineWidth=Math.max(1.5,R*0.02);x.strokeStyle="#3a3a4e";x.stroke();
  const n=cols.length,yTop=cy-R*0.62,yBot=cy+R*0.62,A=R*0.34,step=0.82,scale=R/33,L=[],Rr=[];
  for(let i=0;i<n;i++){const yy=yTop+(yBot-yTop)*(n>1?i/(n-1):0.5),c=Math.cos(i*step);L.push([cx-A*c,yy]);Rr.push([cx+A*c,yy]);}
  x.lineCap="round";x.strokeStyle="#4a4a60";x.lineWidth=Math.max(1.2,1.4*scale);
  for(const arr of [L,Rr]){x.beginPath();x.moveTo(arr[0][0],arr[0][1]);for(let i=1;i<n;i++)x.lineTo(arr[i][0],arr[i][1]);x.stroke();}
  x.lineWidth=Math.max(2.5,4*scale);
  for(let i=0;i<n;i++){x.strokeStyle=cols[i];x.beginPath();x.moveTo(L[i][0],L[i][1]);x.lineTo(Rr[i][0],Rr[i][1]);x.stroke();}
  x.lineCap="butt";
}

async function generateShareCard(sport, key, genome, coreProfile){
  const D=SPORT_DATA[sport]||SPORT_DATA.PL;
  const teams=D.teams, teamDims=D.teamDims, archetypes=D.archetypes;
  const noun=(REGISTER[sport]||REGISTER.PL).noun;
  const topLabel="YOUR "+noun.toUpperCase();
  const closingLine="Which "+noun+" are you, really?";
  const W=1080,H=1350,cv=document.createElement("canvas");cv.width=W;cv.height=H;
  // The strip is the USER's core, drawn as where they stand against everyone else (see standing()
  // in genomeRead). Raw values would print a near-identical barcode on every card ever shared.
  // The teamDims fallback is a legacy path with no user core; it is already raw 0-10, leave it.
  const x=cv.getContext("2d"),team=teams[key],col=team.color,dims=(coreProfile?standing(coreProfile):(teamDims[key]||{})),cx=W/2;
  try{await Promise.all([
    document.fonts.load("600 100px 'Cormorant Garamond'"),
    document.fonts.load("italic 42px 'Cormorant Garamond'"),
    document.fonts.load("400 30px 'DM Mono'"),
  ]);}catch(e){}
  x.fillStyle="#16161e";x.fillRect(0,0,W,H);
  const g=x.createLinearGradient(0,0,0,560);g.addColorStop(0,col+"2e");g.addColorStop(1,col+"00");
  x.fillStyle=g;x.fillRect(0,0,W,560);
  x.textAlign="center";x.textBaseline="alphabetic";
  drawTracked(x,topLabel,cx,118,"400 30px 'DM Mono',monospace","#9696b4",18);
  const R=88,ry=262;
  drawTeamHex(x,cx,ry,R,col,(team.code3||key));
  x.textBaseline="alphabetic";
  let nsz=104;x.fillStyle="#e8e4de";
  do{x.font="600 "+nsz+"px 'Cormorant Garamond',serif";if(x.measureText(team.name).width<=900)break;nsz-=2;}while(nsz>44);
  const nameY=ry+R+70;x.textAlign="center";x.fillText(team.name,cx,nameY);
  const arc=(archetypes[key]||"").toUpperCase();
  x.font="400 24px 'DM Mono',monospace";
  const padX=22,padY=12,tw=trackedWidth(x,arc,3),ph=24+padY*2,pillY=nameY+34;
  roundRectPath(x,cx-tw/2-padX,pillY,tw+padX*2,ph,8);x.fillStyle=col;x.fill();
  drawTracked(x,arc,cx,pillY+padY+24,"400 24px 'DM Mono',monospace",onColorText(col),3);
  let tlsz=42,tlall;do{x.font="italic "+tlsz+"px 'Cormorant Garamond',serif";tlall=wrapCanvasText(x,team.tagline,860);if(tlall.length<=2)break;tlsz-=2;}while(tlsz>34);
  x.fillStyle="#c9c4bd";x.textAlign="center";
  const tl=tlall.slice(0,2),ty=pillY+ph+52;
  tl.forEach((ln,i)=>x.fillText(ln,cx,ty+i*52));
  const stripTop=ty+(tl.length*52)+20;
  drawTracked(x,"CORE SEQUENCE",cx,stripTop+30,"400 30px 'DM Mono',monospace","#9696b4",16);
  const laneTop=stripTop+120,laneH=210,laneW=86,gap=(820-7*laneW)/6,x0=cx-410;
  DIM_ORDER.forEach((dk,i)=>{
    const lx=x0+i*(laneW+gap),dcol=DIM_COLORS[dk],score=dims[dk]||0;
    drawTracked(x,DIM_CODES[dk],lx+laneW/2,laneTop-26,"400 24px 'DM Mono',monospace",dcol,2);
    roundRectPath(x,lx,laneTop,laneW,laneH,10);x.fillStyle="#1e1e2a";x.fill();x.strokeStyle="#34344a";x.lineWidth=1;x.stroke();
    const bandH=14,by=laneTop+8+(1-score/10)*(laneH-16-bandH);
    x.save();x.shadowColor=dcol;x.shadowBlur=16;roundRectPath(x,lx+10,by,laneW-20,bandH,6);x.fillStyle=dcol;x.fill();x.restore();
    roundRectPath(x,lx+10,by,laneW-20,4,3);x.fillStyle="rgba(255,255,255,0.35)";x.fill();
  });
  // Earned bucket crests (collectors only): a compact row of strand hexes under the core sequence.
  const crests=completedGroups({...(genome||{}), [sport]:{club:key}});
  let seqY;
  if(crests.length){
    const clabY=laneTop+laneH+50;
    drawTracked(x,"CRESTS EARNED",cx,clabY,"400 24px 'DM Mono',monospace","#c9b27a",14);
    const hexR=30,step=hexR*2+30,rowW=(crests.length-1)*step,hy=clabY+34+hexR,hx0=cx-rowW/2;
    crests.forEach((g,i)=>{
      const hcx=hx0+i*step;
      drawStrandHex(x,hcx,hy,hexR,g.colors);
      drawTracked(x,g.label.toUpperCase(),hcx,hy+hexR+24,"400 16px 'DM Mono',monospace","#8a8560",2);
    });
    seqY=hy+hexR+24+40;
  }else{
    seqY=laneTop+laneH+62;
  }
  x.textAlign="center";
  const orderedSports=FAMILIES.flatMap(f=>SPORTS.filter(s=>s.group===f.id));
  const seq="FanDNA: "+orderedSports.filter(s=>s.code===sport||(genome&&genome[s.code]&&genome[s.code].club)).map(s=>{const ck=(s.code===sport)?key:genome[s.code].club;const _sd=SPORT_DATA[s.code];const c=(_sd&&_sd.teams&&_sd.teams[ck]&&_sd.teams[ck].code3)||ck;return `${s.code}-${c}`;}).join(" · ");
  let seqSz=42,seqFont="400 42px 'DM Mono',monospace";
  do{seqFont="400 "+seqSz+"px 'DM Mono',monospace";x.font=seqFont;if(trackedWidth(x,seq,2)<=960)break;seqSz-=2;}while(seqSz>22);
  drawTracked(x,seq,cx,seqY,seqFont,"#d6d2ca",2);
  x.font="italic 40px 'Cormorant Garamond',serif";x.fillStyle="#9898b8";x.fillText(closingLine,cx,seqY+62);
  drawTracked(x,"playfandna.com",cx,seqY+112,"400 24px 'DM Mono',monospace","#7878a0",3);
  return await new Promise(res=>cv.toBlob(res,"image/png"));
}


export { generateShareCard };
