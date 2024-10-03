import Heading from '../ui/Heading';
import Row from '../ui/Row';
import UpdateUserDataForm from '../features/authentication/UpdateUserDataForm';
import UpdatePasswordForm from '../features/authentication/UpdatePasswordForm';

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Heading as="h2">Change your information</Heading>

      <Row type="updateUser">
        <UpdateUserDataForm />
      </Row>

      <Heading as="h2">Change your password</Heading>

      <Row type="updateUser">
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
