import React from 'react';
import '../resources/authentication.css';
import {Link} from 'react-router-dom';
import { Button,Form, Input, message } from 'antd';
import axios from'axios';
function Register(){
    const onFinish=async(values)=>{
     try {
        await axios.post('api/user/register',values)
        message.success("Registration successful")
     } catch (error) {
        message.error('Registration failed')
     }
    }
    return (
    <div className='auth-parent'>
        <Form layout='vertical' onFinish={onFinish}>
            <h1>Register</h1>
           <hr/>
            <Form.Item name='username' label='Username'>
                <Input placeholder='username'/>
            </Form.Item>
            <Form.Item name='password' label='Password'>
                <Input placeholder='password' type='password'/>
            </Form.Item>
            <Form.Item name='cpassword' label='Confirm Password'>
                <Input placeholder='password' type='password'/>
            </Form.Item>
            <div className='d-flex '>
            <Link to='/login'> Click here to Login</Link>
           <Button type='primary' htmlType='submit'>
               Register
            </Button>
           </div>
        </Form>
    </div>
    )
}
export default Register