import React from "react";
import Form from "react-bootstrap/Form";

export default function Search(props) {
    return(
        <Form>
            <Form.Group>
                <Form.Label>Search Employee</Form.Label>
                <Form.Control type="text" placholder="" />
            </Form.Group>
        </Form>
    );
}