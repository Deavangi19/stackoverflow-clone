import React from 'react'


export default function Avatar({value,children,src,className,backgroundColor,cursor, px,py, color,borderRadius, fontSize, textAlign}) {
  const style={
    backgroundColor,
    padding:`${!src?py:"0"} ${!src?px:"0"}`,
    color:color || 'black',
    borderRadius,
    fontSize,
    textAlign:textAlign||'center',
    cursor: cursor || null,
    fontWeight:'700'
  }
  
  return (
    <div className={className} style={style}>
      {src?<img src={src} alt={""}/>:null}
      {!src?(value||children.substring(0,1).toUpperCase()):null}
    </div>
  )
}
