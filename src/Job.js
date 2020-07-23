import React, { useState } from 'react';
import { Card, Badge, Button, Collapse } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

export default function Job({ job, logos }) {
  const [open, setOpen] = useState(false);

  try {
    if (logos.original) {
      var temp = logos.original;
    }
  } catch (e) {
    console.log(e);
  }

  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.name} -{' '}
              <span className="text-muted font-weight-light">
                {job.employer.name}
              </span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge className="mr-2" variant="secondary">
              {job.schedule.name}
            </Badge>
            <Badge variant="secondary"> {job.area.name} </Badge>
            <div style={{ wordBreak: 'break-all' }}>
              <ReactMarkdown source={job.apply_alternate_url} />
            </div>
          </div>
          <img
            className="d-none d-md-block"
            height="50"
            alt={job.employer.name}
            src={temp}
          />
        </div>
        <Card.Text>
          <Button
            onClick={() => setOpen((prevOpen) => !prevOpen)}
            variant="primary"
          >
            {open ? 'Скрыть' : 'Подробнее'}
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4">
            <ReactMarkdown source={job.snippet.requirement} />
            <ReactMarkdown source={job.snippet.responsibility} />
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}
