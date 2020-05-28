import React from "react";

export const tema = {
  light: {
    background: "#F5F5F5",
    border: "#F4F4F4",
    color: "#373737",
   
  },
  dark: {
    background: "#373737",
    border: "#363636",
    color: "#F5F5F5",

    
  },
 // borde light #DCDCDC
};
export const TemaContext = React.createContext(tema.light);
