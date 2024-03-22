import {
    Paper,
    Title,
    Text,
    TextInput,
    Button,
    Container,
    Anchor,
    Alert,
    PasswordInput, 
  } from '@mantine/core';
import classes from '@/styles/ForgotPassword.module.css';
import router from 'next/router';
import { useRef, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
  
export function UpdateAccount() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmationRef = useRef<HTMLInputElement>(null);
    const { currentUser, updateEmail, updatePassword } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const navigateToHomepage= () => {
		router.push("/homepage");
	};

    function handelSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault()

        if (passwordRef.current?.value !== passwordConfirmationRef.current?.value){
            return setError('Passwords do not match')
        }

        const promises = []
        setLoading(true)
        setError("")
        if (emailRef.current?.value != currentUser.email){
            promises.push(updateEmail(emailRef.current?.value))
        }
        if (passwordRef.current?.value){
            promises.push(updatePassword(passwordRef.current?.value))
        }

        Promise.all(promises).then(() => {
            {navigateToHomepage}
        }).catch(() => {
            setError("Failed to update account")
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
    <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
        Update Account Details
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5} pb={20}>
            Nothing to update?{' '}
            <Anchor size="sm" component="button" onClick={navigateToHomepage}>
                Return to homepage
            </Anchor>
        </Text>
        {error && <Alert variant="danger">{error}</Alert>}
        <Paper withBorder p="md" shadow="md" radius="sm" pos="relative">
            <form onSubmit={handelSubmit}>
                <TextInput label="Email" ref={emailRef} placeholder="you@uofgprepare.com" defaultValue={currentUser.email} required />
                <PasswordInput label="Password" ref={passwordRef} placeholder="Leave blank to keep the same" mt="md" />
                <PasswordInput label="Password-Confirm" ref={passwordConfirmationRef} placeholder="Leave blank to keep the same" mt="md" />
                <Button fullWidth mt="xl" disabled={loading} type="submit">
                    Update
                </Button>
            </form>
        </Paper>
    </Container>
    )
}

export default UpdateAccount