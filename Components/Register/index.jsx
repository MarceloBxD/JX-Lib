import React from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Container } from "./styles.js";
import { useApp } from "../../context/AppContext.jsx";
import { Link } from "react-router-dom";

export function Register() {
    const {
        emailRef,
        passwordRef,
        confirmPasswordRef,
        error,
        loading,
        handleSubmitSignUp,
    } = useApp();

    return (
        <Container>
            <Card.Body>
                <Card.Title>Faça seu cadastro</Card.Title>
                <Card.Subtitle>Este app não é válido para todos.</Card.Subtitle>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmitSignUp}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} />
                        <Form.Text className="text-muted">
                            Nós nunca compartilharemos seu email com ninguém.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group id="password">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" ref={passwordRef} />
                    </Form.Group>

                    <Form.Group id="password-confirm">
                        <Form.Label>Confirmar Senha</Form.Label>
                        <Form.Control type="password" ref={confirmPasswordRef} />
                    </Form.Group>

                    <Button disabled={loading} variant="primary" type="submit">
                        Cadastrar
                    </Button>
                </Form>
                <div className="w-100 text-center mt-2 login-push">
                    <Link to="/login">Já tem uma conta?</Link>
                </div>
            </Card.Body>
        </Container>
    )
}