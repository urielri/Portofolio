import React, {useEffect, useContext}from "react";
import { isContext } from "vm";
import {TemaContext} from './tema';
export const useTema = () => React.useContext(TemaContext);
function Bloque(props: any) {
    
  const tema = useTema();
console.log(tema);
  return (
    <div className="container-bloque" style={{borderColor: tema.border}} >
      <div className="bloque">{props.children}</div>
      
    </div>
  );

}
export default Bloque;
