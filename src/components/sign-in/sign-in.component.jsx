import React , { Component } from 'react';
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'


class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state={
            email:'',
            passward :''
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();

        this.setState({email:'',passward:''})
    }
    handheChange =(e)=>{
        const {value , name } = e.target;
        this.setState({ [name]:value })

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
                          label ="email"
                          required/>
                     
                    <FormInput 
                        name='password' 
                        type="password" 
                        value={this.state.passward} 
                        handlechange={this.handheChange}
                        label ="password"
                        required/>
                  
                    <input type="submit" value="submit form" />
                </form>

            </div>
        );
    }
}
 
export default SignIn;