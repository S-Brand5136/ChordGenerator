import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const TableItem = ({ addItem }) => {

    const [value, setValue] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addItem(value);
        setValue('');
    }

    return (
        <Form className='mt-5' onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Control placeholder='Item Name' type='text' value={value} onChange={e => setValue(e.target.value)}/>
                </Col>
                <Col>
                    <Button variant='info' className='btn-block' type='submit'>Submit</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default TableItem
