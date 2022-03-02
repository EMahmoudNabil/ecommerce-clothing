import React , { Component } from 'react';
import './sign-in.styles.scss'



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
                    <input
                         name='email'
                          type="email" 
                          value={this.state.email}
                          onChange={this.handheChange} 
                          required/>
                    <label>Email</label>
                    <input 
                        name='password' 
                        type="password" 
                        value={this.state.passward} 
                        onChange={this.handheChange}
                        required/>
                    <label>Password</label>
                    <input type="submit" value="submit form" />
                </form>

            </div>
        );
    }
}
 
export default SignIn;