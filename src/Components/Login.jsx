import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Col, Container, Row } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


const Login = () => {

    const classes = useStyles();

    return (
        <>

            <Container>
                <Row>
                    <Col lg={4} md={6} sm={12} className='mt-5 mx-auto align-items-center justify-content-center text-center border'>
                        <form className={`${classes.root} pe-3`} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Username" className='w-100' name="name" type="text"/>
                            <TextField id="standard-basic" label="Password" className='w-100' name="password" type="password"/>
                        </form>
                        <Button variant="contained" color="primary" className='my-4'>
                            Login
                        </Button>
                        <hr />
                        <p>Don't have any account? <Link to="/register">Register</Link> </p>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default Login;
