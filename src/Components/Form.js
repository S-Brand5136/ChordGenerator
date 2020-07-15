import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const TableItem = ({ addItem }) => {

    const [value, setValue] = useState();

    let num = 0;

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        console.log(num);
        addItem(value, false, num);
        setValue('');
    }

    return (
        <div className='formBox'>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Control placeholder='Item Name' type='text' value={value} onChange={e => setValue(e.target.value)}/>
                    </Col>
                    <Col>
                        <Button variant='info' className='btn-block' type='submit'>Submit</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control as='select' className='mt-4' onChange={e => num = parseInt(e.target.value)}>
                            <option value='0'>Choose Item Group</option>
                            <option value='1'>Vegetable</option>
                            <option value='2'>Bread</option>
                            <option value='3'>Meat</option>
                            <option value='4'>Frozen</option>
                            <option value='5'>Dairy</option>
                            <option value='6'>Middle Aisle</option>
                        </Form.Control>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default TableItem