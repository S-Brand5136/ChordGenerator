import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Container from 'react-bootstrap/Container';
import TableGrid from './Components/TableGrid';
import Form from './Components/Form';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [data, setData] = useState([]);

  const [items, setItems] = useState([
    {
      text: 'Apples',
      isCompleted: false,
      type: 1,
    },
    {
      text: 'Bananas',
      isCompleted: false,
      type: 1,
    },
    {
      text: 'Bread',
      isCompleted: false,
      type: 2,      
    },
  ]);

  const addItem = (text, isCompleted, type) => {
    const newItem = [...items, { text, isCompleted, type }];
    setItems(newItem);
  }

  const completeItem = index => {
    const newItems = [...items];
    if(!newItems[index].isCompleted){
      newItems[index].isCompleted = true;
    } else {
      newItems[index].isCompleted = false;
    }
    setItems(newItems);
  }

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  useEffect(() => {
      const sorted = [...items].sort((a, b) => b[b.type] - a[b.type]);
      setData(sorted);
  })
  



  return (
    <div className="App">
      <Header/>
        <Container>
            <TableGrid data={data} removeItem={removeItem} completeItem={completeItem}/>
            <Form addItem={addItem}/>
        </Container>
    </div>
  );
}

export default App;
