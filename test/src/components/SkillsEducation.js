import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';

function SkillsEducation() {
  return (

    <div>
      <h5>Education</h5>
      <hr/>
      <Form.List name="education">
        {(fields, { add, remove }) => (
          <>
            <div className='row'>
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className='col-md-3'>
                    <Form.Item
                      {...restField}
                      name={[name, 'Qualification']}
                      rules={[{ required: true, message: 'Missing qualification' }]}
                    >
                      <Input placeholder="Qualification" />
                    </Form.Item>

                  </div>
                  <div className='col-md-2'>
                    <Form.Item
                      {...restField}
                      name={[name, 'Percentage']}
                      rules={[{ required: true, message: 'Missing percentage' }]}
                    >
                      <Input placeholder="Percentage" />
                    </Form.Item>

                  </div>
                  <div className='col-md-3'>
                    <Form.Item
                      {...restField}
                      name={[name, 'Institution']}
                      rules={[{ required: true, message: 'Missing institution' }]}
                    >
                      <Input placeholder="Institution" />
                    </Form.Item>

                  </div>
                  <div className='col-md-2'>
                    <Form.Item
                      {...restField}
                      name={[name, 'Year']}
                      rules={[{ required: true, message: 'Year' }]}
                    >
                      <Input placeholder="Year" />
                    </Form.Item>

                  </div>

                  <div className='col-md-2'>
                    <MinusCircleOutlined style={{ fontSize: 24, color: 'tomato' }} onClick={() => remove(name)} />
                  </div>
                </>
              ))}
            </div>
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Education
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <h5>Skills</h5>
      <hr/>
      <Form.List name="skills">
        {(fields, { add, remove }) => (
          <>
            <div className='row'>
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className='col-md-4'>
                    <Form.Item
                      {...restField}
                      name={[name, 'Technology']}
                      rules={[{ required: true, message: 'Missing technology' }]}
                    >
                      <Input placeholder="Technology" />
                    </Form.Item>

                  </div>
                  <div className='col-md-4'>
                    <Form.Item
                      {...restField}
                      name={[name, 'Rating']}
                      rules={[{ required: true, message: 'Missing rating' }]}
                    >
                      <Input placeholder="Rating" />
                    </Form.Item>

                  </div>


                  <div className='col-md-3'>
                    <MinusCircleOutlined style={{ fontSize: 24, color: 'tomato' }} onClick={() => remove(name)} />
                  </div>
                </>
              ))}
            </div>
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Skills
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>


  )
}
export default SkillsEducation