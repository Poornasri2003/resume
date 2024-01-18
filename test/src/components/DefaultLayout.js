import React from 'react';
import './../resources/defaultLayout.css';
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("shey-resume"))
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a  rel="noopener noreferrer" href="/home">
          Home
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a  rel="noopener noreferrer" href="/profile">
          profile
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a  rel="noopener noreferrer" href="/login" onClick={()=>{localStorage.removeItem('shey-resume')}} >
        Logout
        </a>
      ),
    },
  ];

  return (
    <div className='Layout'>
      <div className='header'>
        <h1>Resume Builder</h1>
        <Dropdown menu={{ items }} placement="bottomLeft">
          <Button style={{color:'gray', fontSize:18,fontWeight:15}}>{user.username}</Button>
        </Dropdown>
      </div>
      <div className='content' style={{overflow:'scroll'}}>
        {props.children}
      </div>
    </div>
  );
}

export default DefaultLayout;
