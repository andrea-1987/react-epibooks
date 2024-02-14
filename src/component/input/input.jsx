// import React, { useState } from "react";
// import { Input } from "@material-tailwind/react";

// export function InputDefault({onFilter}) {
//   const [inputValues, setInputValues] = useState({
//     username: "",

//   });

//   const onChangeInput = (e) => {
//     const { name, value } = e.target;
//     setInputValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));

//   };

//   return (
//     <div className="w-25 ">
//       <Input
//         name="username"  
//         label="Search"
//         value={inputValues.username || ""}
//         onChange={onChangeInput}
//       />

//     </div>
//   );
// }
