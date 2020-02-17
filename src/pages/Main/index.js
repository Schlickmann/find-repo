import React from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';
import { Container, Form, FieldSection, Label, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositories
      </h1>

      <Form onSubmit={() => {}}>
        <FieldSection>
          <input
            type="text"
            name="user"
            id="user"
            required
            autoComplete="off"
          />
          <Label htmlFor="user">
            <span>Github Username</span>
          </Label>
        </FieldSection>

        <SubmitButton disabled>
          <FaPlus color="#fff" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}
