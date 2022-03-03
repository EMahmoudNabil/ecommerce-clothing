import React , { Component } from 'react';
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'


import {signInWithGoogle} from '../../firebase/firebase.utils'


class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state={
            email:'',
            password :''
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();

        this.setState({email:'',password:''})
    }
    handheChange =(e)=>{
        const {value , name} = e.target;
        this.setState({ [name]:value  })

    }
    render() { 
        return ( 
            <div className='sign-in'>
                <h2> I already have an account</h2>
                <span> sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                         name='email'
                          type="email" 
                          value={this.state.email}
                          handlechange={this.handheChange} 
                          label ="Email"
                          required/>
                     
                     <FormInput
                         name='password'
                          type ="password"
                          value={this.state.password}
                          handlechange={this.handheChange} 
                          label ="password"
                          required/>

                          <div className='buttons'>
                              <CustomButton type="submit" > SIGN IN </CustomButton>
                             <CustomButton onClick = {signInWithGoogle} isGoogleSignIn > SIGN IN With Google </CustomButton>
                          </div>
                  
                   
                </form>

            </div>
        );
    }
}
 
export default SignIn;