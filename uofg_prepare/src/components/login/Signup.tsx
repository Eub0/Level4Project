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
  } from '@mantine/core';
  import classes from '@/styles/AuthenticationTitle.module.css';
  import React, { useRef } from "react";
  import { useAuth } from "@/contexts/AuthContext"
  
export function AuthenticationTitle() {
    const emailRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const passwordConfirmationRef = useRef<HTMLInputElement>();
    const { signup } = useAuth();

    function handelSubmit(e) {
        e.preventDefault()
        signup(emailRef.current.value, passwordRef.current.value)
    }

    return (
    <Paper withBorder p="md" shadow="md" radius="sm" pos="relative">
        <Container size={420} my={40}>
            <Title ta="center" className={classes.title}>
            Welcome back to UofG Prepare!
            </Title>
            <Text c="dimmed" size="sm" ta="center" mt={5}>
            Do not have an account yet?{' '}
            <Anchor size="sm" component="button">
                Create account
            </Anchor>
            </Text>
    
            <TextInput label="Email" ref={emailRef} placeholder="you@uofgprepare.com" required />
            <PasswordInput label="Password" ref={passwordRef} placeholder="Your password" required mt="md" />
            <PasswordInput label="Password-Confirm" ref={passwordConfirmationRef} placeholder="Your password" required mt="md" />
            <Group justify="space-between" mt="lg">
                <Checkbox label="Remember me" />
                <Anchor component="button" size="sm">
                Forgot password?
                </Anchor>
            </Group>
            <Button fullWidth mt="xl">
                Sign in
            </Button>
        </Container>
    </Paper>
    );
  }