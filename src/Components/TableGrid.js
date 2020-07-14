import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const TableGrid = ({item, removeItem, completeItem}) => {



    return (
        <ListGroup variant="flush" className='mt-5'>
            {item.map((item, index) => (
                <ListGroup.Item  key={index} style={{backgroundColor: '#2A2A2E' , color: 'white' , textDecoration: item.isCompleted ? 'line-through' : ''}} >{item.text}
                <button className='removeButton' onClick={() => removeItem(index)} >X</button>
                <button className='completeButton' onClick={() => completeItem(index)} >Complete</button>
                </ListGroup.Item>                
            ))}
        </ListGroup>
    )
}

export default TableGrid
