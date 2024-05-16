import React from "react";
const Button = ({
   label = 'chat',
    type = 'button',
className = '',
disabled = false,
}) =>{
  return (
<button type={type} className={`bg-secondary hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-[10px] ${className}`
}disabled={disabled}>
  {label}
</button>    
    )
}

export default Button