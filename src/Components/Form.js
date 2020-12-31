import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const TableItem = ({ addItem }) => {
  const [value, setValue] = useState();
  const [num, setNum] = useState();
  // let num = 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value)
      return (
        <Alert variant="danger">
          You must Enter an 'Item Name' before posting
        </Alert>
      );
    if (num === 0) {
      return (
        <Alert variant="danger">
          You must Select an 'Item Group' before posting
        </Alert>
      );
    }
    console.log(num);
    addItem(value, false, num);
    setValue("");
    setNum(0);
  };

  return (
    <form className="formBox">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Control
              placeholder="Item Name"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Col>
          <Col>
            <Button variant="info" className="btn-block" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control
              as="select"
              className="mt-4"
              value={num}
              onChange={(e) => setNum(parseInt(e.target.value))}
            >
              <option value="0">Choose Item Group</option>
              <option value="1">Vegetable</option>
              <option value="2">Fruit</option>
              <option value="3">Bread</option>
              <option value="4">Meat</option>
              <option value="5">Frozen</option>
              <option value="6">Dairy</option>
              <option value="7">Middle Aisle</option>
            </Form.Control>
          </Col>
        </Row>
      </Form>
    </form>
  );
};

export default TableItem;
