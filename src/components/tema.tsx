import React from "react";

export const tema = {
  light: {
    background: "#F5F5F5",
    border: "#DCDCDC",
    color: "#252525",
   
  },
  dark: {
    background: "#252525",
    border: "#f5f5f5",
    color: "#f5f5f5",

    
  },
 
};
export const TemaContext = React.createContext(tema.light);
