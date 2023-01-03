import React from 'react'

function Button({children,type,onClick,className}) {
  const style={
    cursor: 'pointer',
    transition:'0.3s'
  }
  return (
    <>
      <button style={style} type={type || "button" } onClick={onClick} className={className}>
               {children || "It a button"}
      </button> 
    </>
  )
}

export default Button