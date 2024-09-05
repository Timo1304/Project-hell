import { Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useSignInWithGoogle, useSignInWithFacebook, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/clientApp';

const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

  return (
    <Flex direction="column" width="100%" mb={7}>
      <Button variant="oauth" mb={2} isLoading={googleLoading} onClick={() => signInWithGoogle()}>
        <Image src="/images/google-color-icon.png" height="20px" mr={4} />
        Continue with Google
      </Button>
      <Button variant="oauth" mb={2} isLoading={facebookLoading} onClick={() => signInWithFacebook()}>
        <Image src="/images/facebook-round-color-icon.png" height="20px" mr={4} />
        Continue with Facebook
      </Button>
      <Button variant="oauth" isLoading={githubLoading} onClick={() => signInWithGithub()}>
        <Image src="/images/social-github.png" height="20px" mr={4} />
        Continue with GitHub
      </Button>
      {(googleError || facebookError || githubError) && (
        <Text color="red.500">
          {googleError?.message || facebookError?.message || githubError?.message}
        </Text>
      )}
    </Flex>
  );
};

export default OAuthButtons;
