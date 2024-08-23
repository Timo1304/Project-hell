import { authModalState } from '@/atoms/authModalAtom';
import { Button, Flex, Input, Text } from '@chakra-ui/react';;
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';


const SignUp:React.FC = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const [signUpForm, setSignUpForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
  
    //Firebase Logic
   const onSubmit = () => {};

   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // update form state
    setSignUpForm(prev => ({
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
            <Input 
                required
                name='confirmPassword' 
                placeholder='confirm password' 
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
            <Button width='100%' height='39px' mt={2} mb={2} type='submit'>
                Log In
            </Button>
            <Flex fontSize='9pt'
            justifyContent='center'>
                <Text mr={1}>Already a CHATTER?</Text>
                <Text color='yellow.400' cursor='pointer' fontWeight='700' onClick={() => setAuthModalState(prev => ({
                    ...prev,
                    view: 'login',
                }))}>
                    LOG IN
                </Text>
            </Flex>
        </form>
    )
}
export default SignUp;