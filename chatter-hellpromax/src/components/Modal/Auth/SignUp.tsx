import { authModalState } from "@/atoms/authModalAtom";
import { Button, Flex, Input, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/clientApp';
import { FIREBASE_ERRORS } from "@/firebase/errors";

const SignUp: React.FC = () => {
	const setAuthModalState = useSetRecoilState(authModalState);
	const [signUpForm, setSignUpForm] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [error, setError] = useState("");

	const [
		createUserWithEmailAndPassword,
		user,
		loading,
		userError,
	  ] = useCreateUserWithEmailAndPassword(auth);

	// Firebase Logic
	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (error) setError('');

		// Password mismatch check
		if (signUpForm.password !== signUpForm.confirmPassword) {
			setError('Passwords do not match!');
			return; 
		}

		// If passwords match, create a new user
		createUserWithEmailAndPassword(signUpForm.email, signUpForm.password); 
	}

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		// Update form state
		setSignUpForm((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	}

	// Dynamic colors for light and dark modes
	const inputBg = useColorModeValue("gray.50", "gray.800");
	const inputBorderColor = useColorModeValue("yellow.400", "yellow.500");
	const inputPlaceholderColor = useColorModeValue("yellow.200", "yellow.300");
	const errorTextColor = useColorModeValue("red.500", "red.300");
	const buttonBg = useColorModeValue("orange.100", "orange.200");
	const buttonHoverBg = useColorModeValue("blue.400", "blue.500");
	const signInColor = useColorModeValue("yellow.400", "yellow.500");

	return (
		<form onSubmit={onSubmit}>
			<Input
				required
				name="email"
				placeholder="email"
				type="email"
				mb={2}
				onChange={onChange}
				fontSize="10pt"
				_placeholder={{ color: inputPlaceholderColor }}
				_hover={{
					bg: inputBg,
					border: "1px solid",
					borderColor: inputBorderColor,
				}}
				_focus={{
					outline: "none",
					bg: inputBg,
					border: "1px solid",
					borderColor: inputBorderColor,
				}}
				bg={inputBg}
			/>
			<Input
				required
				name="password"
				placeholder="password"
				type="password"
				mb={2}
				onChange={onChange}
				fontSize="10pt"
				_placeholder={{ color: inputPlaceholderColor }}
				_hover={{
					bg: inputBg,
					border: "1px solid",
					borderColor: inputBorderColor,
				}}
				_focus={{
					outline: "none",
					bg: inputBg,
					border: "1px solid",
					borderColor: inputBorderColor,
				}}
				bg={inputBg}
			/>
			<Input
				required
				name="confirmPassword"
				placeholder="Confirm Password"
				type="password"
				mb={2}
				onChange={onChange}
				fontSize="10pt"
				_placeholder={{ color: inputPlaceholderColor }}
				_hover={{
					bg: inputBg,
					border: "1px solid",
					borderColor: inputBorderColor,
				}}
				_focus={{
					outline: "none",
					bg: inputBg,
					border: "1px solid",
					borderColor: inputBorderColor, 
				}}
				bg={inputBg}
			/>
			{(error || userError) && (
				<Text textAlign='center' color={errorTextColor} fontSize='10pt'>
					{error || FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}
				</Text>
			)}
			<Button 
				width="100%" 
				height="39px" 
				mt={2} 
				mb={2} 
				type="submit" 
				isLoading={loading}
				bg={buttonBg}
				_hover={{ bg: buttonHoverBg }}
				color="white"
			>
				Sign Up
			</Button>
			<Flex fontSize="9pt" justifyContent="center">
				<Text mr={1}>Already a CHATTER?</Text>
				<Text
					color={signInColor}
					cursor="pointer"
					fontWeight="700"
					onClick={() =>
						setAuthModalState((prev) => ({
							...prev,
							view: "login",
						}))
					}
				>
					SIGN IN
				</Text>
			</Flex>
		</form>
	);
}
export default SignUp;
