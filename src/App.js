
 
import './App.css';
import Profile from "./Componenets/Profile";
import { Component } from 'react';

 class App extends Component{
   constructor(props){
     super(props);
     this.state = {isVisible:false};
   }
   toggleVisibility=()=>{
     this.setState({isVisible:!this.state.isVisible})
   }
 render(){
   return(
     <div className="App"> 
     <button onClick={this.toggleVisibility}>
       {this.state.isVisible ? "hide Profile" : "show Profile"}
       </button>
       {this.state.isVisible && < Profile/>}
       </div>
   )
 }
 }
export default App;
