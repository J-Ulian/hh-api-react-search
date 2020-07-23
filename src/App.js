import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import { Container } from 'react-bootstrap';
import Job from './Job';
import JobsPagination from './JobsPagination';
import SearchForm from './SearchForm';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(0);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(0);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

  return (
    <Container className="my-4">
      <h1 className="mb-4">HeadHunter Вакансии</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobsPagination hasNextPage={hasNextPage} page={page} setPage={setPage} />
      {loading && <h2 className="text-center mt-5">Загрузка...</h2>}
      {error && <h2>Ошибка. Попробуйте обновить страницу.</h2>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} logos={job.employer.logo_urls} />;
      })}
      <JobsPagination hasNextPage={hasNextPage} page={page} setPage={setPage} />
    </Container>
  );
}

export default App;
