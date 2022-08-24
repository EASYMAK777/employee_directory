import React from "react";
import Form from "react-bootstrap/Form";

export default function Search(props) {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Employee Search</Form.Label>
        <Form.Control type="text" placeholder="Search for an Employee" />
        <button>Search</button>
      </Form.Group>
    </Form>
  );
}
