import React, { useState, useEffect } from 'react';
import { FaGithubAlt, FaSync } from 'react-icons/fa';
import RepositoriesField from '../../components/RepositoriesField';
import api from '../../services/api';

import { Container, Form, FieldSection, Label, SubmitButton } from './styles';

export default function Main() {
  const [username, setUsername] = useState('');
  const [repositories, setRepositories] = useState([]);

  async function handleSync(event) {
    event.preventDefault();

    const { data } = await api.get(`/users/${username}/repos`);

    setRepositories(data.map(repo => repo.name));
  }

  function handleInputChange(event) {
    setUsername(event.target.value);

    if (!event.target.value.trim()) {
      setRepositories([]);
    }
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

          <SubmitButton>
            <FaSync color="#fff" size={14} />
          </SubmitButton>
        </div>

        {repositories.length > 0 && <RepositoriesField repos={repositories} />}
      </Form>
    </Container>
  );
}
