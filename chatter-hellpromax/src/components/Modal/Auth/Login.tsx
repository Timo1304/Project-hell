import { authModalState } from '@/atoms/authModalAtom';
import { auth } from '@/firebase/clientApp';
import { FIREBASE_ERRORS } from '@/firebase/errors';
import { Input, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil';

type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => { 
    const setAuthModalState = useSetRecoilState(authModalState);
    const [loginForm, setloginForm] = useState({
        email: '',
        password: '',
    });

    const [
		createUserWithEmailAndPassword,
		user,
		loading,
		error,
	  ] = useCreateUserWithEmailAndPassword(auth);

  
    //Firebase Logic
   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInwithEmailAndPassword(loginForm.email, loginForm.password);
   };

   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // update form state
    setloginForm(prev => ({
        ...prev,
        [event.target.name]: event?.target.value,
    }))
   };

    return (
        <form onSubmit={onSubmit}>
            <Input 
                required
                name='email' 
                placeholder='email' 
                type='email' 
                mb={2} 
                onChange={onChange}
                fontSize='10pt'
                _placeholder={{ color: 'yellow.200' }}
                _hover={{
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'yellow.400'
                }}
                _focus={{
                    outline: 'none',
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'yellow.400'
                }}
            />
            <Input 
                required
                name='password' 
                placeholder='password' 
                type='password' 
                mb={2} 
                onChange={onChange} 
                fontSize='10pt'
                _placeholder={{ color: 'yellow.200' }}
                _hover={{
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'yellow.400'
                }}
                _focus={{
                    outline: 'none',
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'yellow.400'
                }}
            />
            <Text>
                {FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
            </Text>
            <Button width='100%' height='39px' mt={2} mb={2} type='submit'>
                Log in
            </Button>
            <Flex fontSize='9pt'
            justifyContent='center'>
                <Text mr={1}>New Here?</Text>
                <Text color='yellow.400' cursor='pointer' fontWeight='700' onClick={() => setAuthModalState(prev => ({
                    ...prev,
                    view: 'signup',
                }))}>
                    Sign Up
                </Text>
            </Flex>
        </form>
    )
}
export default Login;

function signInwithEmailAndPassword(email: string, password: string) {
    throw new Error('Function not implemented.');
}
