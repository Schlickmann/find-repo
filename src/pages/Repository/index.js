import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

import { Loading, LoadingIcon } from './styles';

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

  if (isLoading) {
    return (
      <Loading>
        <LoadingIcon loading={isLoading ? 1 : 0} />
        <span>Loading...</span>
      </Loading>
    );
  }

  return (
    <>
      <h1>Repo: {repo.name}</h1>
    </>
  );
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.string,
    }),
  }).isRequired,
};
