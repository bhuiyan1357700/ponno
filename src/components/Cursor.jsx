import { useEffect, useRef } from 'react'

export function Cursor() {

  const c=useRef(),r=useRef();
  const p=useRef({mx:0,my:0,rx:0,ry:0});
  useEffect(()=>{
    const mv=e=>{p.current.mx=e.clientX;p.current.my=e.clientY;if(c.current){c.current.style.left=(e.clientX-4)+'px';c.current.style.top=(e.clientY-4)+'px';}};
    window.addEventListener('mousemove',mv);
    let af;const an=()=>{const q=p.current;q.rx+=(q.mx-q.rx)*0.1;q.ry+=(q.my-q.ry)*0.1;if(r.current){r.current.style.left=(q.rx-16)+'px';r.current.style.top=(q.ry-16)+'px';}af=requestAnimationFrame(an);};an();
    return()=>{window.removeEventListener('mousemove',mv);cancelAnimationFrame(af);};
  },[]);
  return<><div id="cur" ref={c}/><div id="cur-r" ref={r}/></>;

}