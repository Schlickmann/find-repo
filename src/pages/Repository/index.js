import React, { useState, useEffect } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

export default function Repository({ match }) {
  const [repo, setRepo] = useState({});
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadInfo() {
      const repoName = decodeURIComponent(match.params.repository);

      const [repoInfo, repoIssues] = await Promise.all([
        api.get(`/repos/${repoName}`),
        api.get(`/repos/${repoName}/issues`, {
          params: {
            state: 'open',
            per_page: 5,
          },
        }),
      ]);

      setRepo(repoInfo.data);
      setIssues(repoIssues.data);
      setIsLoading(false);
    }

    loadInfo();
  }, []);

  return (
    <>
      <h1>Repo: {repo.name}</h1>
    </>
  );
}
