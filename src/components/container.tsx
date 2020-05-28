import React, { useContext } from 'react';
import {TemaContext} from './tema';
export const useTema = () => React.useContext(TemaContext);
function Container (props: any){
        const tema = useTema();
    return(
        <div className="contenedor" style={{background: tema.background, color: tema.color}}>
            {props.children}
            
        </div>
    );
}
export default Container;