import React , { Component } from 'react';
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'


import { auth,signInWithGoogle} from '../../firebase/firebase.utils'


class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state={
            email:'',
            password :''
        }
    }
    handleSubmit= async e =>{
        e.preventDefault();
        const {email , password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''})
        }catch(error){
            console.log(error)
        }

        
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
                             <CustomButton type="button" onClick = {signInWithGoogle} isGoogleSignIn > SIGN IN With Google </CustomButton>
                          </div>
                  
                   
                </form>

            </div>
        );
    }
}
 
export default SignIn;