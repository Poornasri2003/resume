import React from 'react';
//import DefaultLayout from '../components/DefaultLayout';
import '../../resources/template2.css';
function Template2() {
    const user = JSON.parse(localStorage.getItem('shey-resume'));
    return (
        <div className='template2-parent'>
            <div className='top d-flex justify-content-between'>
                <h1>{user.firstName.toUpperCase()} {user.lastName.toUpperCase()}</h1>
                <div>

                    <p>{user.email}</p>
                    <p>{user.address}</p>
                    <p>{user.mobilenumber}</p>
                </div>
            </div>

            <div className='divider mt-5'></div>

            <div className='objective mt-4'>
                <h3>Objective</h3>
                <hr></hr>
                <p>{user.objective}</p>
            </div>

            <div className='divider mt-5'></div>
            <div className='education mt-4'>
                <h3>Education</h3>
                <hr />
                {user.education.map((education) => {
                    return (
                        <div className=' e d-flex'>
                            <p>
                                <b>{education.Year}{' '}:{' '}</b>


                                <b> {education.Qualification} </b>{' '}with{' '}<b>{education.Percentage} %</b> in {" "}{education.Institution}
                            </p>
                        </div>
                    );
                })}
            </div>
            <div className='divider mt-5'></div>
            <div className='experience mt-4'>
                <h3>Experience</h3>
                <hr />
                {user.experience.map((experience) => {
                    return (
                        <div className=' e d-flex'>
                            <p>
                                <b>{experience.Year}{' '}:{' '}</b>


                                <b> {experience.Company} </b>{' '}{experience.Place}{' '}for  <b> {experience.Duration} </b>
                            </p>
                        </div>
                    );
                })}
            </div>

            <div className='divider mt-5'></div>
            <div className='projects mt-4'>
                <h3>Projects</h3>
                <hr />
                {user.projects.map((projects) => {
                    return (
                        <div className=' e d-flex'>
                            <p>
                                <h5>{projects.Title}{' '}:{' '}{projects.Year}</h5><hr></hr>


                                 {projects.Description} </p>
                        </div>
                    );
                })}
            </div>
            <div className='divider mt-5'></div>
            <div className='skills mt-4'>
                <h3>Skills</h3>
                <hr />
                {user.skills.map((skills) => {
                    return (
                        <div className=' e d-flex'>
                           <ul >
                            <li>{skills.Technology}</li>
                           </ul>
                        </div>
                    );
                })}
            </div>

        </div>
    )
}
export default Template2