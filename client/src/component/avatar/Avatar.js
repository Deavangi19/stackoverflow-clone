import React from 'react'
function Avatar({value,children,className,backgroundColor,cursor, px,py, color,borderRadius, fontSize, textAlign}) {
  const style={
    backgroundColor,
    padding:`${py} ${px}`,
    color:color || 'black',
    borderRadius,
    fontSize,
    textAlign:textAlign||'center',
    cursor: cursor || null,
    fontWeight:'700'
  }
  
  return (
    <div className={className} style={style}>
      {value||children.substring(0,1).toUpperCase()}
    </div>
  )
}

export default Avatar