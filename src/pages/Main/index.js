import React, { useState, useEffect } from 'react';
import { FaGithubAlt, FaSync } from 'react-icons/fa';
import RepositoriesField from '../../components/RepositoriesField';
import { Container, Form, FieldSection, Label, SubmitButton } from './styles';

export default function Main() {
  const [username, setUsername] = useState('');
  const [repositories, setRepositories] = useState([]);

  function handleSync() {}

  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositories
      </h1>

      <Form onSubmit={handleSync}>
        <div>
          <FieldSection>
            <input
              type="text"
              name="user"
              id="user"
              required
              autoComplete="off"
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
            <Label htmlFor="user">
              <span>Github Username</span>
            </Label>
          </FieldSection>

          <SubmitButton disabled>
            <FaSync color="#fff" size={14} />
          </SubmitButton>
        </div>

        {repositories.length > 0 && <RepositoriesField />}
      </Form>
    </Container>
  );
}
