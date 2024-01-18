import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useParams } from 'react-router-dom';
import Template2 from './Template2';
import Template1 from './Template1';

import Template4 from './Template4';
import DefaultLayout from '../../components/DefaultLayout';
import { Button } from 'antd';


function Templates(){
    const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
    const params=useParams();
    const gettemplate = () => {
        switch(params.id){
            case "1":{
                return <Template1 />;
            }
            case "2":{
                return <Template2 />;
            }
           
            case "3":{
                return <Template4 />;
            }
        }
    };
    return (
    <DefaultLayout>
        <div className='d-flex justify-content-end my-5'>
         <Button style={{color:'white'}}>Back</Button>
         <Button className='mx-5' onClick={handlePrint}  style={{color:'white'}}>Print</Button>
        </div>
        <div ref={componentRef}>
    {gettemplate()}
    </div>
    </DefaultLayout>
       
    )
}
export default Templates