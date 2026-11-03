"use client";
export function GoTop(){return <button className="go-top" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} aria-label="Go to top"><span>⌃</span> Go top</button>}
