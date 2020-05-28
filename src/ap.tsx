import React from 'react';
interface Myprops {
    temas: Object,
}

class Ap extends React.Component<Myprops>{
  constructor(props: Myprops){
    super(props);
    this.state ={
      color: 'red',
      auto: 'mustang',
    }
  }
  render(){
    return(
      <div></div>
    );
  }
}
export default Ap;