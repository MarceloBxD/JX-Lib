import React from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Container } from "./styles.js";
import { useApp } from "../../context/AppContext.jsx";
import { Link } from "react-router-dom";

export function Login() {
    const {
        emailRef,
        passwordRef,
        handleSubmitLogIn,
        loading,
        error,
    } = useApp();

    return (
        <Container>
            <Card.Body>
                <Card.Title>Seja bem-vindo</Card.Title>
                <Card.Subtitle>Este app não é válido para todos.</Card.Subtitle>
                {error &&
                    <Alert variant='danger'>{error}</Alert>
                }
                <Form onSubmit={handleSubmitLogIn}>
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

                    <Button disabled={loading} variant="primary" type="submit">
                        Logar
                    </Button>
                </Form>
                <div className="w-100 text-center mt-2 login-push">
                    <Link to="/signup">
                    Não tem uma conta?
                    </Link>
                </div>
            </Card.Body>
        </Container>
    )
}