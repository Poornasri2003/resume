import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import PersonalInfo from '../components/PersonalInfo';
import SkillsEducation from '../components/SkillsEducation';
import { Tabs,Form, Button ,message} from 'antd';
import ExperienceProject from '../components/ExperienceProject';
import axios from'axios';
const { TabPane } = Tabs;
function Profile(){
    const user=JSON.parse(localStorage.getItem("shey-resume"))
    const onFinish=async(values)=>{
        try {
          const result= await axios.post('api/user/update',{...values, _id:user._id});
          localStorage.setItem('shey-resume',JSON.stringify(result.data));
           message.success("Profile update successful !!!")
        } catch (error) {
            console.log(error);
           message.error('Registration failed')
        }
       }
    return (
        <DefaultLayout>
<div className='update-profile'>
    <h2>Update Profile</h2>
    <hr></hr>
</div>
<Form layout='vertical' onFinish={onFinish} initialValues={user}>
<Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Personal Info" key="1">
   <PersonalInfo></PersonalInfo>
    </TabPane>
    <TabPane tab="Skills and Education" key="2">
    <SkillsEducation></SkillsEducation>
    </TabPane>
    <TabPane tab="Projects/ Experience" key="3">
   <ExperienceProject></ExperienceProject>
    </TabPane>
  </Tabs>
  <Button htmlType='submit' style={{color:'white'}}>Update Profile</Button>
  </Form>
        </DefaultLayout>
    )
}
function callback(key) {
    console.log(key);
  }
export default Profile;