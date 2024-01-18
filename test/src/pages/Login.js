import React, { useEffect } from 'react';
import '../resources/authentication.css';
import {Link, useNavigate} from 'react-router-dom';
import axios from'axios';
import { Button, Form, Input,message } from 'antd';
function Login(){
    const navigate =useNavigate();
    const onFinish=async(values)=>{
        try {
           const user=await axios.post('api/user/login',values);
           message.success("Login successful");
           localStorage.setItem('shey-resume',JSON.stringify(user.data));
           navigate('/home');
        } catch (error) {
           message.error('Login failed');
        }
       }
       useEffect(()=>{
        if(localStorage.getItem('shey-resume')){
            navigate("/home");
        }
       })
    return (
    <div className='auth-parent'>
        <Form layout='vertical' onFinish={onFinish}>
            <h1>Login</h1>
           <hr/>
            <Form.Item name='username' label='Username'>
                <Input placeholder='username'/>
            </Form.Item>
            <Form.Item name='password' label='Password'>
                <Input placeholder='password' type='password'/>
            </Form.Item>
           
           <div className='d-flex '>
            <Link to='/register'> Click here to register</Link>
           <Button type='primary' htmlType='submit'>
               Login
            </Button>
           </div>
        </Form>
    </div>
    )
}
export default Login