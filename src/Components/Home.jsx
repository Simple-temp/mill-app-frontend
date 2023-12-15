import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={4} md={6} sm={12} className='mt-5 mx-auto'>
                        <Card className='d-flex align-items-center justify-content-center text-center'>
                            <Card.Body>
                                <Card.Title className='my-4'>Getting start...</Card.Title>
                                <Link to="/profile" className='text-decoration-none'>
                                    <Button variant="primary">Next</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;
