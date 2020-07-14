import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const TableGrid = ({item, removeItem}) => {



    return (
        <ListGroup variant="flush" className='mt-5'>
            {item.map((item, index) => (
                <ListGroup.Item  key={index} style={{backgroundColor: '#2A2A2E' , color: 'white'}} >{item.text}
                <button className='removeButton' onClick={() => removeItem(index)} >X</button>
                </ListGroup.Item>                
            ))}
        </ListGroup>
    )
}

export default TableGrid
