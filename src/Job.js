import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

export default function Job({ job, logos }) {
  try {
    if (logos.original) {
      var temp = logos[240];
    }
  } catch (e) {
    console.log(e);
  }

  return (
    <Card>
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
      </Card.Body>
    </Card>
  );
}
