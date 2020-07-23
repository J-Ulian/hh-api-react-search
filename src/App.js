import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import { Container } from 'react-bootstrap';
import Job from './Job';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(0);
  const { jobs, loading, error } = useFetchJobs(params, page);
  return (
    <Container className="my-4">
      {loading && <h1 className="text-center">Загрузка...</h1>}
      {error && <h1>Ошибка. Попробуйте обновить страницу.</h1>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} logos={job.employer.logo_urls} />;
      })}
    </Container>
  );
}

export default App;
