import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={4} md={6} sm={12} className='mt-5 mx-auto'>
                        <Card className='d-flex align-items-center justify-content-center text-center'>
                            <Card.Img variant="top" src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" className='img-fluid avater' />
                            <Card.Body>
                                <Card.Title>Profile</Card.Title>
                                <Card.Text>
                                    Name: Aziz
                                </Card.Text>
                                <Link to="/showdata" className='text-decoration-none'>
                                    <Button variant="primary">Go Info</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Profile;
