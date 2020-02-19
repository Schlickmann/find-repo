import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import PropTypes from 'prop-types';
import api from '../../services/api';

import Container from '../../components/Container';
import { Loading, LoadingIcon, Owner, IssuesList } from './styles';

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
    <Container>
      <Owner>
        <Link to="/">
          <FaAngleLeft size={18} />
          <span>Back</span>
        </Link>
        <img src={repo.owner.avatar_url} alt={repo.owner.login} />
        <h1>{repo.name}</h1>
        <p>{repo.description}</p>
      </Owner>

      <IssuesList>
        {issues.map(issue => (
          <li key={String(issue.id)}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />
            <div>
              <strong>
                <a
                  href={issue.html_url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {issue.title}
                </a>
                <div className="labels">
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </div>
              </strong>
              <p>{issue.user.login}</p>
            </div>
          </li>
        ))}
      </IssuesList>
    </Container>
  );
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.string,
    }),
  }).isRequired,
};
