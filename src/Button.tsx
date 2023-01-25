import React, { HtmlHTMLAttributes, FC, ButtonHTMLAttributes } from 'react'
 type ButtonProps = {
  theme : "primary"|"secondary"} 
  & ButtonHTMLAttributes<HTMLButtonElement>;
  
 

 
 const Button: FC<ButtonProps> = ({theme, ...rest}) =>{
let themeClasses = "bg-indigo-700 text-white";
if (theme == "secondary"){
  themeClasses = "bg-white text-indigo-700";
}
return(
  <button {...rest} className = {"px-2 py-1 text-2xl border rounded-md"+ " "   + themeClasses}></button>
)
 }
  
 
 export default Button
 


