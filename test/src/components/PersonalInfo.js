import React from 'react';

import { Form, Input } from 'antd';
//import TextArea from 'antd/es/input/TextArea';
const {TextArea}=Input;
function PersonalInfo() {
    return (

        <div className='row'>
            <div className='col-md-4'>

                <Form.Item name='firstName' label='FirstName' rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
            </div>
            <div className='col-md-4'>
                <Form.Item name='lastName' label='LastName' rules={[{ required: true }]}>
                    <Input />


                </Form.Item>
            </div>
            <div className='col-md-4'>
                <Form.Item name='email' label='Email' rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
            </div>
            <div className='col-md-4'>
                <Form.Item name='mobilenumber' label='Mobile' rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
            </div>
            <div className='col-md-4'>
                <Form.Item name='github' label='Git hub'>
                    <Input />
                </Form.Item>
            </div>
            <div className='col-md-12'>
                <Form.Item name='objective' label='Carrier Objective' rules={[{ required: true }]}>
                    <TextArea />
                </Form.Item>
            </div>
            <div className='col-md-12'>
                <Form.Item name='address' label='Address' rules={[{ required: true }]}>
                    <TextArea />
                </Form.Item>
            </div>
        </div>


    );
}
export default PersonalInfo