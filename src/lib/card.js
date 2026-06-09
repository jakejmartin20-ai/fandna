// FanDNA share-card rendering — canvas helpers + generateShareCard, verbatim from App.jsx (Phase 1).
import { teams, teamDims, archetypes, CARD_BADGES, GENERIC_EMOJI, DIM_COLORS, DIM_CODES, DIM_ORDER } from "../data/pl";

function hexToRgb(h){h=h.replace("#","");return [parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)];}
function relLum(rgb){const f=v=>{v/=255;return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4);};return 0.2126*f(rgb[0])+0.7152*f(rgb[1])+0.0722*f(rgb[2]);}
function onColorText(hex){return relLum(hexToRgb(hex))>0.5?"#0c0c12":"#f4f1ec";}
function roundRectPath(ctx,x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}
function trackedWidth(ctx,s,tr){let w=0;for(const ch of s)w+=ctx.measureText(ch).width+tr;return s.length?w-tr:0;}
function drawTracked(ctx,s,cxc,y,font,fill,tr){ctx.save();ctx.font=font;ctx.fillStyle=fill;ctx.textAlign="left";const w=trackedWidth(ctx,s,tr);let xx=cxc-w/2;for(const ch of s){ctx.fillText(ch,xx,y);xx+=ctx.measureText(ch).width+tr;}ctx.restore();}
function wrapCanvasText(ctx,s,maxw){const words=s.split(" ");const lines=[];let cur="";for(const w of words){const t=cur?cur+" "+w:w;if(ctx.measureText(t).width<=maxw||!cur)cur=t;else{lines.push(cur);cur=w;}}if(cur)lines.push(cur);return lines;}

async function generateShareCard(key){
  const W=1080,H=1350,cv=document.createElement("canvas");cv.width=W;cv.height=H;
  const x=cv.getContext("2d"),team=teams[key],col=team.color,dims=teamDims[key]||{},cx=W/2;
  try{await Promise.all([
    document.fonts.load("600 100px 'Cormorant Garamond'"),
    document.fonts.load("italic 42px 'Cormorant Garamond'"),
    document.fonts.load("400 30px 'DM Mono'"),
  ]);}catch(e){}
  x.fillStyle="#16161e";x.fillRect(0,0,W,H);
  const g=x.createLinearGradient(0,0,0,560);g.addColorStop(0,col+"2e");g.addColorStop(1,col+"00");
  x.fillStyle=g;x.fillRect(0,0,W,560);
  x.textAlign="center";x.textBaseline="alphabetic";
  drawTracked(x,"YOUR CLUB",cx,118,"400 30px 'DM Mono',monospace","#9696b4",18);
  const R=82,ry=258;
  x.beginPath();x.arc(cx,ry,R+5,0,Math.PI*2);x.fillStyle="#f7f4ef";x.fill();
  x.beginPath();x.arc(cx,ry,R,0,Math.PI*2);x.fillStyle=col;x.fill();
  const badge=CARD_BADGES[key];
  x.textBaseline="middle";
  if(badge&&!GENERIC_EMOJI.has(badge)){
    x.font="110px 'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji',sans-serif";x.fillText(badge,cx,ry+4);
  }else{
    x.font="400 66px 'DM Mono',monospace";x.fillStyle=onColorText(col);x.fillText(key,cx,ry+2);
  }
  x.textBaseline="alphabetic";
  let nsz=104;x.fillStyle="#e8e4de";
  do{x.font="600 "+nsz+"px 'Cormorant Garamond',serif";if(x.measureText(team.name).width<=900)break;nsz-=2;}while(nsz>44);
  const nameY=ry+R+70;x.textAlign="center";x.fillText(team.name,cx,nameY);
  const arc=(archetypes[key]||"").toUpperCase();
  x.font="400 24px 'DM Mono',monospace";
  const padX=22,padY=12,tw=trackedWidth(x,arc,3),ph=24+padY*2,pillY=nameY+34;
  roundRectPath(x,cx-tw/2-padX,pillY,tw+padX*2,ph,8);x.fillStyle=col;x.fill();
  drawTracked(x,arc,cx,pillY+padY+24,"400 24px 'DM Mono',monospace",onColorText(col),3);
  x.font="italic 42px 'Cormorant Garamond',serif";x.fillStyle="#c9c4bd";x.textAlign="center";
  const tl=wrapCanvasText(x,team.tagline,860).slice(0,2),ty=pillY+ph+52;
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
  const seqY=laneTop+laneH+62;x.textAlign="center";
  drawTracked(x,"FanDNA: PL-"+key,cx,seqY,"400 42px 'DM Mono',monospace","#d6d2ca",2);
  x.font="italic 40px 'Cormorant Garamond',serif";x.fillStyle="#9898b8";x.fillText("Which club are you, really?",cx,seqY+62);
  drawTracked(x,"fandna.vercel.app",cx,seqY+112,"400 24px 'DM Mono',monospace","#7878a0",3);
  return await new Promise(res=>cv.toBlob(res,"image/png"));
}


export { generateShareCard };
