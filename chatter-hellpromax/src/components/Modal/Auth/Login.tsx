import { Input, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {
    const [loginForm, setloginForm] = useState({
        email: '',
        password: '',
    });
    
   const onSubmit = () => {};

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
                name='email' 
                placeholder='email' 
                type='email' 
                mb={2} 
                onChange={onChange}
            />
            <Input 
                name='password' 
                placeholder='password' 
                type='password' 
                mb={2} 
                onChange={onChange} 
            />
            <Button width='100%' height='39px' mt={2} mb={2} type='submit'>
                Log in
            </Button>
        </form>
    )
}
export default Login;