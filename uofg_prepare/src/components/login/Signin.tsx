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
import useGuestHook from '@/hooks/guestProvider';
  
export function Signin() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const { signin } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const {setIsGuest} = useGuestHook()

    const navigateToSignup = () => {
		router.push("/signup");
	};
    const navigateToHomepage = () => {
		router.push("/homepage");
        setIsGuest(true)
	};
    const navigateToForgotPassword = () => {
		router.push("/forgotpassword");
	};

    async function handelSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await signin(emailRef.current?.value, passwordRef.current?.value)
            router.push('/homepage')
        }
        catch {
            setError('Failed to sign in')
        }

        setLoading(false)
    }

    return (
        <Container size={420} my={40}>
            <Paper withBorder p="md" shadow="md" radius="sm" pos="relative">
                <Title ta="center" className={classes.title}>
                Welcome back to UofG Prepare!
                </Title>
                <Text c="dimmed" size="sm" ta="center" mt={5}>
                    Do not have an account yet?{' '}
                <Anchor size="sm" component="button" onClick={navigateToSignup}>
                    Create account
                </Anchor>
                </Text>
                <Text c="dimmed" size="sm" ta="center" mt={5} pb={20}>
                    Don't want the extra features?{' '}
                <Anchor size="sm" component="button" onClick={navigateToHomepage}>
                    Continue as a guest
                </Anchor>
                </Text>
                {error && <Alert variant="danger">{error}</Alert>}
                    <form onSubmit={handelSubmit}>
                        <TextInput label="Email" ref={emailRef} placeholder="you@uofgprepare.com" required />
                        <PasswordInput label="Password" ref={passwordRef} placeholder="Your password" required mt="md" />
                        <Group justify="space-between" mt="lg">
                            <Checkbox label="Remember me" />
                            <Anchor component="button" size="sm" onClick={navigateToForgotPassword}>
                            Forgot password?
                            </Anchor>
                        </Group>
                        <Button fullWidth mt="xl" disabled={loading} type="submit">
                            Sign in
                        </Button>
                    </form>
            </Paper>
        </Container>
    );
  }