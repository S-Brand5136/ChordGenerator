import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const TableGrid = ({data, removeItem, completeItem}) => {
    
    return (
        <ListGroup variant="flush" className='mt-5 mb-5'>
            {data.sort((a, b) => b[b.type] - a[a.type])
            .map((item, index) => (
                <ListGroup.Item  key={index} style={{backgroundColor: '#2A2A2E' , color: 'white' , textDecoration: item.isCompleted ? 'line-through' : ''}} >{item.text}
                <button className='removeButton' onClick={() => removeItem(index)} >X</button>
                <button className='completeButton' onClick={() => completeItem(index)} >In Cart</button>
                </ListGroup.Item>                
            ))}
        </ListGroup>
    )
}

export default TableGrid
