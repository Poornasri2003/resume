import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
const { TextArea } = Input;
function ExperienceProject() {
    return (

        <div>
            <h5>Experience</h5>
            <hr/>
            <Form.List name="experience">
                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-3'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'Company']}
                                            rules={[{ required: true, message: 'Missing details' }]}
                                        >
                                            <Input placeholder="Company/institution" />
                                        </Form.Item>

                                    </div>
                                    <div className='col-md-2'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'Duration']}
                                            rules={[{ required: true, message: 'Missing duration' }]}
                                        >
                                            <Input placeholder="Duration" />
                                        </Form.Item>

                                    </div>
                                    <div className='col-md-3'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'Place']}
                                            rules={[{ required: true, message: 'Place' }]}
                                        >
                                            <Input placeholder="Place" />
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
                                Add Experience
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <h5>Projects</h5>
            <hr/>
            <Form.List name="projects">
                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-4'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'Title']}
                                            rules={[{ required: true, message: 'Missing title' }]}
                                        >
                                            <Input placeholder="Title" />
                                        </Form.Item>

                                    </div>
                                    <div className='col-md-6'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'Description']}
                                            rules={[{ required: true, message: 'Description' }]}
                                        >
                                            <TextArea placeholder="Description" />
                                        </Form.Item>

                                    </div>
                                    <div className='col-md-1'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'Year']}
                                            rules={[{ required: true, message: 'Year' }]}
                                        >
                                            <Input placeholder="Year" />
                                        </Form.Item>

                                    </div>

                                    <div className='col-md-1'>
                                        <MinusCircleOutlined style={{ fontSize: 24, color: 'tomato' }} onClick={() => remove(name)} />
                                    </div>
                                </>
                            ))}
                        </div>
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add Projects
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </div>


    )
}
export default ExperienceProject