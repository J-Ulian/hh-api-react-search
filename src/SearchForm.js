import React from 'react';
import { Form, Col } from 'react-bootstrap';

export default function SearchForm({ params, onParamChange }) {
  return (
    <Form className="mb-4">
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Профессия, должность или компания </Form.Label>
          <Form.Control
            type="text"
            onChange={onParamChange}
            value={params.text}
            name="text"
          />
        </Form.Group>
      </Form.Row>
    </Form>
  );
}
