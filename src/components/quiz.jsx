// FanDNA quiz UI components - BTN + ChoiceQ/BinaryQ/SliderQ/DimBars, verbatim from App.jsx (Phase 1).
import { useState } from "react";
import { DIM_LABELS } from "../data/pl";

// ─── QUESTION COMPONENTS ──────────────────────────────────────────────────────
const BTN = {
  base:{
    background:"#1c1c28",border:"1px solid #404058",borderRadius:6,
    cursor:"pointer",fontFamily:"inherit",transition:"all .15s ease",
    textAlign:"left",lineHeight:1.5,color:"#d0ccc6",
  },
};

function ChoiceQ({q,onSelect}){
  const [hov,setHov]=useState(null);
  return(
    <div style={{display:"flex",flexDirection:"column",gap:7}}>
      {q.options.map((o,i)=>(
        <button key={o.value}
          onClick={()=>onSelect(o.value)}
          onMouseEnter={()=>setHov(o.value)}
          onMouseLeave={()=>setHov(null)}
          style={{
            ...BTN.base,padding:"13px 16px",
            color:hov===o.value?"#ffffff":"#d0ccc6",
            background:hov===o.value?"#26263a":"#1c1c28",
            borderColor:hov===o.value?"#6a6a90":"#404058",
            display:"flex",gap:12,alignItems:"flex-start",
            fontSize:"clamp(13px,3vw,15px)",
          }}
        >
          <span style={{color:"#aaa",fontFamily:"monospace",fontSize:12,minWidth:18,paddingTop:2}}>{i+1}</span>
          {o.label}
        </button>
      ))}
    </div>
  );
}

function BinaryQ({q,onSelect}){
  const [hov,setHov]=useState(null);
  return(
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
      {[{label:q.left,val:"left"},{label:q.right,val:"right"}].map((side,i)=>(
        <button key={side.val}
          onClick={()=>onSelect(side.val)}
          onMouseEnter={()=>setHov(side.val)}
          onMouseLeave={()=>setHov(null)}
          style={{
            ...BTN.base,padding:"22px 16px",
            textAlign:"center",minHeight:100,
            display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,
            color:hov===side.val?"#ffffff":"#d0ccc6",
            background:hov===side.val?"#26263a":"#1c1c28",
            borderColor:hov===side.val?"#6a6a90":"#404058",
            fontSize:"clamp(13px,3vw,15px)",
          }}
        >
          <span style={{color:"#888",fontFamily:"monospace",fontSize:9}}>{i+1}</span>
          {side.label}
        </button>
      ))}
    </div>
  );
}

function SliderQ({q,onSelect}){
  const [hov,setHov]=useState(null);
  return(
    <div>
      <div style={{display:"flex",justifyContent:"space-between",marginBottom:18}}>
        <span style={{fontSize:12,color:"#bbb",maxWidth:"42%",lineHeight:1.45}}>{q.left}</span>
        <span style={{fontSize:12,color:"#bbb",maxWidth:"42%",textAlign:"right",lineHeight:1.45}}>{q.right}</span>
      </div>
      <div style={{display:"flex",gap:8,justifyContent:"center"}}>
        {[1,2,3,4,5].map(n=>(
          <button key={n}
            onClick={()=>onSelect(n)}
            onMouseEnter={()=>setHov(n)}
            onMouseLeave={()=>setHov(null)}
            style={{
              ...BTN.base,
              width:48,height:48,borderRadius:"50%",
              display:"flex",alignItems:"center",justifyContent:"center",
              textAlign:"center",
              color:hov===n?"#ffffff":"#d0ccc6",
              background:hov===n?"#26263a":"#1c1c28",
              borderColor:hov===n?"#6a6a90":"#404058",
              fontSize:14,fontFamily:"monospace",flexShrink:0,
            }}
          >{n}</button>
        ))}
      </div>
    </div>
  );
}

// ─── RESULT COMPONENTS ────────────────────────────────────────────────────────
function DimBars({dims,color}){
  const d=dims||{};
  return(
    <div>
      {Object.entries(DIM_LABELS).map(([k,label])=>(
        <div key={k} style={{marginBottom:8}}>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
            <span style={{fontSize:11,color:"#bbb",fontFamily:"monospace"}}>{label}</span>
            <span style={{fontSize:11,color:"#bbb",fontFamily:"monospace"}}>{d[k]}/10</span>
          </div>
          <div style={{height:2,background:"#141420",borderRadius:2,overflow:"hidden"}}>
            <div style={{
              height:"100%",width:`${(d[k]||0)*10}%`,
              background:`linear-gradient(90deg,${color}66,${color})`,
              borderRadius:2,transition:"width 1s cubic-bezier(.4,0,.2,1)",
            }}/>
          </div>
        </div>
      ))}
    </div>
  );
}

export { BTN, ChoiceQ, BinaryQ, SliderQ, DimBars };
