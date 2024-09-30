import { useState } from 'react';
import { useLogin } from './useLogin';

import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import SpinnerMini from '../../ui/SpinnerMini';

function LoginForm() {
  const [email, setEmail] = useState('somename@example.com');
  const [password, setPassword] = useState('pass12345');

  const { login, isLoadingAuth } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      },
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address" orientation="vertical">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoadingAuth}
        />
      </FormRow>
      <FormRow label="Password" orientation="vertical">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoadingAuth}
        />
      </FormRow>
      <FormRow orientation="vertical">
        <Button disabled={isLoadingAuth} size="large">
          {!isLoadingAuth ? 'Login' : <SpinnerMini />}
        </Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
