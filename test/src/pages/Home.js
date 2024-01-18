import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import templateimg from '../resources/templates/template_1.png';
import template2img from '../resources/templates/template2.png';
import template4img from '../resources/templates/template4.png';
import '../resources/templates.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const templates = [
    {
      title: 'Simpleresume',
      image: templateimg,
    },
    {
      title: 'Colored resume',
      image: template2img,
    },
    {
        title: 'Highlighted resume',
        image: template4img,
      },
  ];

  return (
    <DefaultLayout>
      <div className='row home'>
        {templates.map((template, index) => (
          <div className={`col-md-4 template-${index + 1}`} key={index}>
            <div className='template'>
              <img
                src={template.image}
                alt=""
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
              <div className='text'>
                <p>{template.title}</p>
                <button onClick={() => navigate(`/templates/${index + 1}`)}>
                  TRY
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DefaultLayout>
  );
}

export default Home;