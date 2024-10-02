import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useSignup() {
  const { mutate: signup, isLoading: isSigningUp } = useMutation({
    mutationFn: ({ fullName, email, password }) => signupApi({ fullName, email, password }),
    onSuccess: () => {
      toast.success('User successfully created');
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { signup, isSigningUp };
}
