import React from 'react';
import Authentication from '../../services/authentication';
import SignUp from './signUp/SignUp';
import SignIn from './signIn/SignIn';
import {} from './signIn/action'
 class LoginIndex extends React.Component{
constructor(props){
  super(props)
  this.state={
    User_FirstName:'',
    User_LastName:'',
    User_Email:'',
    User_Password:'',
    User_PhoneNo:'',
    Loading:false,
    Message:'',
    ErrorType:''
  }
}
setValue=(e,field)=>{
let obj={};
obj[field]=e.target.value
this.setState(obj)
}
 
signUp= async (event)=>{
  event.preventDefault();
  this.setState({Loading:true,Message:'',ErrorType:''})
  const {User_FirstName,User_LastName,User_Email,User_Password,User_PhoneNo}=this.state
  const signUpInfo={
    u_FirstName:User_FirstName,
    u_LastName:User_LastName,
    u_Email:User_Email,
    u_PhoneNo:User_PhoneNo,
    u_Password:User_Password
  }
  const signUpRes= await Authentication.signUp(signUpInfo)

  // if(signUpRes.data.error===0){
  //   this.setState({Loading:false,Message:'Thank You have Successfully Registered',ErrorType:'success'})
  // }
  // else{
  //   this.setState({Loading:false,Message:'You have Already Registered',ErrorType:'error'})
  // }
  
}


signIn= async (event)=>{
  event.preventDefault();
  this.setState({Loading:true,Message:'',ErrorType:''})
  const {User_Email,User_Password}=this.state
  const signUpInfo={
    u_Email:User_Email,
    u_Password:User_Password
  }
  const signInRes= await Authentication.signIn(signUpInfo)
  if(signInRes.data.error===0){
    this.setState({Loading:false,Message:'Thanks For Login',ErrorType:'success'})
  }
  else{
    this.setState({Loading:false,Message:'Please Enter the correct credentials',ErrorType:'error'})
  }
  
}

  render(){
   const url=window.location.href
    return(
<div>
{url==='http://localhost:3000/signup'?
<SignUp
setValue={this.setValue}
signIn={this.signUp}
{...this.state}
/>:<SignIn
setValue={this.setValue}
signIn={this.signIn}
{...this.state}
/>}

</div>
    )
  }
}


export default LoginIndex