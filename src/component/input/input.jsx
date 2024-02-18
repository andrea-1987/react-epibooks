import { Input } from "@material-tailwind/react";

export function Input({name,label,value,}) {
  
  return (
      <Input className=" w-50"
        name={name} 
        label={label}
        value={value}
       />
  );
}
