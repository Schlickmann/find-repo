import React, { useState } from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import RepositoriesField from '../../components/RepositoriesField';
import api from '../../services/api';

import {
  Container,
  Form,
  FieldSection,
  Label,
  SubmitButton,
  SyncIcon,
} from './styles';

export default function Main() {
  const [username, setUsername] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [selectedRepos, setSelectedRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSync(event) {
    event.preventDefault();

    setIsLoading(true);

    const { data } = await api.get(`/users/${username}/repos`);

    setRepositories(data.map(repo => repo.name));
    setIsLoading(false);
  }

  function handleInputChange(event) {
    setUsername(event.target.value);

    if (!event.target.value.trim()) {
      setRepositories([]);
    }
  }

  async function handleSelection(repo) {
    const response = await api.get(`/repos/${username}/${repo}`);

    const data = {
      name: response.data.full_name,
    };

    setSelectedRepos([...selectedRepos, data]);
  }

  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositories
      </h1>

      <Form onSubmit={handleSync}>
        <div className="flex-child">
          <FieldSection>
            <input
              type="text"
              name="user"
              id="user"
              required
              autoComplete="off"
              value={username}
              onChange={handleInputChange}
            />
            <Label htmlFor="user">
              <span>Github Username</span>
            </Label>
          </FieldSection>

          <SubmitButton loading={isLoading ? 1 : 0}>
            <SyncIcon loading={isLoading ? 1 : 0} />
          </SubmitButton>
        </div>

        {repositories.length > 0 && (
          <RepositoriesField
            repos={repositories}
            onSelection={handleSelection}
          />
        )}
      </Form>
    </Container>
  );
}
