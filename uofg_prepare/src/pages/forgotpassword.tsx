import {
    Paper,
    Title,
    Text,
    TextInput,
    Button,
    Container,
    Group,
    Anchor,
    Center,
    Box,
    rem,
    Alert,
  } from '@mantine/core';
  import { FaArrowLeft } from "react-icons/fa";
  import classes from '@/styles/ForgotPassword.module.css';
import router from 'next/router';
import { useRef, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
  
  export function ForgotPassword() {

    const emailRef = useRef<HTMLInputElement>(null);
    const { resetPassword } = useAuth();
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const navigateToLogin = () => {
		router.push("/");
	};

    async function handelSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current?.value)
            setMessage("Check your email inbox for further instructions.")
        }
        catch {
            setError('Failed to reset password')
        }

        setLoading(false)
    }

    return (
      <Container size={460} my={30}>
        <Title className={classes.title} ta="center">
          Forgot your password?
        </Title>
        <Text c="dimmed" fz="sm" ta="center">
          Enter your email to get a reset link
        </Text>
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
        <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <form onSubmit={handelSubmit}>
          <TextInput label="Email" ref={emailRef} placeholder="you@uofgprepare.com" required />
          <Group justify="space-between" mt="lg" className={classes.controls}>
            <Anchor c="dimmed" size="sm" className={classes.control} onClick={navigateToLogin}>
              <Center inline>
                <FaArrowLeft style={{ width: rem(12), height: rem(12) }} stroke={'1.5'} />
                <Box ml={5}>Back to the login page</Box>
              </Center>
            </Anchor>
            <Button className={classes.control} disabled={loading} type='submit'>Reset password</Button>
          </Group>
          </form>
        </Paper>
      </Container>
    );
  }

export default ForgotPassword