// import React, {Component} from 'react'; 
// import usersData from '../users.json'
// import Weather from './weather';

// import {Link} from 'react-router-dom'
// import { withRouter } from "react-router";


// class Login extends Component{
    
//     constructor(props) {
//         super(props);
//         this.onChangeEmail = this.onChangeEmail.bind(this);
//         this.onChangePassword = this.onChangePassword.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
//         this.state = {
//             email: '',
//             password: '', 
//             errors: {},
//         }
//     }

//     userData = ''; 

//     onChangeEmail(event){
//         this.setState({email : event.target.value})
//     }

//     onChangePassword(event){
//         this.setState({password : event.target.value})
//     }

//     componentDidMount(){
//         this.userData = JSON.parse(localStorage.getItem('user'));
//         if (localStorage.getItem('user')) {
//             this.setState({
//                 email: this.userData.email,
//                 password: this.userData.password
//             })
//         } else {
//             this.setState({
//                 email: '',
//                 password: ''
//             })
//         }
//     }

//     componentDidUpdate(nextProps, nextState){
//         localStorage.setItem('user', JSON.stringify(nextState))

//     }

//     onSubmit(e) {
//         const { history } = this.props;
//         console.log("history" + history)
//         e.preventDefault()
//         if(!this.passwordValidation()){
//             alert("Password has contain at leas one uppercase, one digit number and one special character!")
//         }
//         else{
//             let userExist = usersData.some(item => {
//                 return item.email == this.state.email && item.password == this.state.password
//             }) 
            
//             if(!userExist){
//                 alert("User does not exist!");  
//             }else{
                
//                 history.push("/weather");
//             }

//         }

        
//         this.setState({
//             email: '',
//             password: ''
//         })
//     }

//     passwordValidation(){
//         var validationCondition = /(?=.*\d)(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/;
//         return validationCondition.test(this.state.password);
//     }


//     render(){
      
//         return (
//             <div className = "container">
//                 <form onSubmit={this.onSubmit}>
//                     <div className='form-group'>
//                         <label>E-mail</label>
//                         <input type = "text" className='form-control' value={this.state.email} onChange={this.onChangeEmail}/>
//                     </div>
//                     <div className='form-group'>
//                         <label>Password</label>
//                         <input type = "password" className='form-control' value={this.state.password} onChange={this.onChangePassword}/>
//                     </div>
//                     <Link to="/weather"><button onClick={(e) => { this.onSubmit(e) }} className="btn btn-primary btn-block">Submit</button></Link>
//                     </form>
//             </div>

//         )
//     }


// }

// export default Login; 