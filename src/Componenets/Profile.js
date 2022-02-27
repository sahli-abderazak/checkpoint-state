import React, { Component } from 'react';
import Photo from "./Photo.jpg"
 class Profile extends Component {
  constructor(props) {
      super(props);
        this.state = {
            timer:0,
            interval: null
        }
  }
 componentDidMount() {
     this.setState({
         interval: setInterval(() => {
             this.setState({timer:this.state.timer + 1})
         },1000)
         })
     }
     componentWillUnmount(){
         clearInterval(this.state.interval)
     }
     Person={
         fulName:"sahli Abderazak",
         bio:"i am a devloper",
         imgSrc:Photo ,
         profession:"freelance"
     }
 render(){
     return(
    <div className="Profile">
         <h3> Timer:{this.state.timer}</h3>
        <h3>Full Name:{this.Person.fulName }</h3>
        <h3> Bio:{this.Person.bio}</h3>
        <img src={this.Person.imgSrc} alt="ph"/>
        <h3> Profession:{this.Person.profession}</h3>
  



    </div> 
     )
}
 }
export default Profile