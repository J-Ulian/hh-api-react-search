import React from 'react';
import { Form, Col } from 'react-bootstrap';

export default function SearchForm({ params, onParamChange }) {
  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        <Form.Group as={Col}>
          <Form.Label>Профессия, должность или компания </Form.Label>
          <Form.Control
            type="text"
            onChange={onParamChange}
            value={params.text}
            name="text"
          />
        </Form.Group>
        {/* <Form.Group as={Col} xs="auto" className="ml-2">
          <Form.Check
            onChange={onParamChange}
            value={params.only_with_salary}
            name="only_with_salary"
            id="only-with-salary"
            label="Only With Salary"
            type="checkbox"
            className="mb-2"
          />
        </Form.Group> */}
      </Form.Row>
    </Form>
  );
}
