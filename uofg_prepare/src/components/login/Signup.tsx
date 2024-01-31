import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
    Alert,
  } from '@mantine/core';
  import classes from '@/styles/AuthenticationTitle.module.css';
  import React, { useRef, useState } from "react";
  import { useAuth } from "@/contexts/AuthContext"
import router from 'next/router';
  
export function Signup() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmationRef = useRef<HTMLInputElement>(null);
    const { signup } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const navigateToLogin = () => {
		router.push("/");
	};

    async function handelSubmit(e) {
        e.preventDefault()

        if (passwordRef.current?.value !== passwordConfirmationRef.current?.value){
            return setError('Passwords do not match')
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current?.value, passwordRef.current?.value)
        }
        catch {
            setError('Failed to create account')
        }

        setLoading(false)
    }

    return (
    <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
        Welcome to UofG Prepare!
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
            Create an account and let's prepare!
        </Text>
        <Text c="dimmed" size="sm" ta="center" mt={5} pb={20}>
            Already have an account?{' '}
            <Anchor size="sm" component="button" onClick={navigateToLogin}>
                Login
            </Anchor>
        </Text>
        {error && <Alert variant="danger">{error}</Alert>}
        <Paper withBorder p="md" shadow="md" radius="sm" pos="relative">
            <form onSubmit={handelSubmit}>
                <TextInput label="Email" ref={emailRef} placeholder="you@uofgprepare.com" required />
                <PasswordInput label="Password" ref={passwordRef} placeholder="Your password" required mt="md" />
                <PasswordInput label="Password-Confirm" ref={passwordConfirmationRef} placeholder="Your password" required mt="md" />
                <Button fullWidth mt="xl" disabled={loading} type="submit">
                    Sign up
                </Button>
            </form>
        </Paper>
    </Container>
    );
  }