import React, { useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const AddNew = () => {

    const navigate = useNavigate()
    const classes = useStyles();
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

    const handleSubmit = async () => {

        try {

            const { data } = await axios.post("http://localhost:4000/api/info/postdata", {
                ...formData
            })
            if (data) {
                console.log(data)
                navigate("/showdata")
            }

        } catch (err) {

            console.log(err)

        }

    }

    return (
        <>
            <Container>
                <Row className={classes.root}>
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
                            Add new
                        </Button>
                        <Link to="/showdata">
                            <Button variant="contained" color="secondary" className='me-3 w-auto'>
                                Show data
                            </Button>
                        </Link>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default AddNew;
