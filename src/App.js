import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      show: true,
      min: 0
    };
  }
  IncrementItem = () => {
      this.setState(prevState => {
        if(prevState.quantity < Infinity) {
          return {
            quantity: prevState.quantity + 1
          }
        }
      });
  }
  DecreaseItem = () => {
    this.setState(prevState => {
      if(prevState.quantity > 0) {
        return {
          quantity: prevState.quantity - 1
        }
      } else {
        return null;
      }
    });
  }
  ResetBtn = () => {
    this.setState(state =>{
      return {
        quantity : state.quantity = 0
      }
    }
    ); 
  }
  ToggleClick = () => {
    this.setState({
      show: !this.state.show
    });
  }
  handleChange = (event) => {
    this.setState({quantity: event.target.value});
  }

  render() {

    return ( 
    <div style={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
      <div style={{border:'1px solid black', background:'rgba(255,255,255,0.4)', width:'250px',borderRadius:'40px'}}>
        <button style={{padding:'20px', fontSize:'30px', background:'none', border:'none'}} onClick={this.IncrementItem}> + </button>
        <input style = {{textAlign:"center", fontSize:'30px', width:'30px' ,padding:"20px", backgroundColor:'white',border:'none',borderRadius:'45px' }} className="inputne" value={this.state.quantity} onChange={this.handleChange}/>
        <button style={{padding:'20px', fontSize:'30px', background:'none',border:'none'}} onClick = {this.DecreaseItem}> - </button>
      </div>
        <button style={{width:'100px', fontSize:'15px',justifyContent:'center', border:'1px solid black', borderRadius:'20px',marginTop:'10px', padding:'10px'}} onClick = {this.ResetBtn}>Reset</button>
    </div>
    );
  }
}

ReactDOM.render( < App /> , document.getElementById('root'));