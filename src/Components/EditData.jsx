import React, { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const EditData = () => {

    const { id } = useParams();
    const [Info, setInfo] = useState({});
    const classes = useStyles();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        date: '',
        day: '' || "Yes",
        night: '' || "Yes",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    useEffect(() => {

        handleGetData()

    }, [])

    const handleGetData = async () => {

        try {

            const { data } = await axios.get(`http://localhost:4000/api/info/getbyid/${id}`)
            setInfo(data)
            if (data) {
                console.log(data)
            }

        } catch (err) {

            console.log(err)

        }

    }


    const handleSubmit = async () => {

        try {

            const { data } = await axios.put(`http://localhost:4000/api/info/updatedata/${id}`, {
                ...formData
            })
            if (data) {
                console.log(data)
            }

        } catch (err) {

            console.log(err)

        }
        navigate("/showdata")

    }


    return (
        <>
            <Container>
                <Row className={classes.root}>
                    <h1>{new Date(Info.date).toDateString()}</h1>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>DATE</th>
                                <th>DAY</th>
                                <th>NIGHT</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td data-label="Date">
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                    />
                                </td>
                                <td data-label="Day">
                                    <select id="Day"
                                        name="day"
                                        value={formData.day}
                                        onChange={handleInputChange}
                                    >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                                <td data-label="Night">
                                    <select id="Night"
                                        name="night"
                                        value={formData.night}
                                        onChange={handleInputChange}
                                    >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    <Row>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                Date: <Card.Title>{formData.date}</Card.Title>
                                <Card.Text>
                                    Day: {formData.day ? formData.day : "Yes"}
                                </Card.Text>
                                <Card.Text>
                                    Night: {formData.night ? formData.night : "Yes"}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                    <div className='d-flex'>
                        <Button variant="contained" color="primary" className='me-3 w-auto' onClick={() => handleSubmit()}>
                            Update
                        </Button>
                        <Link to="/showdata">
                            <Button variant="contained" color="secondary" className='w-auto'>
                                Back
                            </Button>
                        </Link>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default EditData;
