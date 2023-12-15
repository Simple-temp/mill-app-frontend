import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Badge, Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowData = () => {

    const [Info, setInfo] = useState([])

    useEffect(() => {

        getInfoData()

    }, [])

    const getInfoData = async () => {

        try {

            const { data } = await axios.get("http://localhost:4000/api/info/getdata")
            setInfo(data)
            console.log(data)

        } catch (err) {

            console.log(err)

        }

    }

    const deleteData = async (id) => {

        try {

            const { data } = await axios.delete(`http://localhost:4000/api/info/deletedatabyid/${id}`)
            console.log(data)

        } catch (err) {

            console.log(err)

        }
        window.location.reload();
    }

    return (
        <>
            <Container>
                <Row>
                    <Link to="/addnew" className='text-decoration-none'>
                        <Button variant="primary" className='d-block ms-auto'>Add</Button>
                    </Link>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Day</th>
                                <th>Night</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        {
                            Info.map((item) => (

                                <tbody key={item._id}>
                                    <tr>
                                        <td data-label="Date">{ new Date(item.date).toLocaleDateString()}</td>
                                        <td data-label="Day">
                                            <Badge bg={item.day === 'Yes' ? "success" : "danger"} className='text-white'>
                                                {item.day}
                                            </Badge>
                                        </td>
                                        <td data-label="Night">
                                            <Badge bg={item.night === 'Yes' ? "success" : "danger"} className='text-white'>
                                                {item.night}
                                            </Badge>
                                        </td>
                                        <td data-label="Edit">
                                            <Link to={`/editdata/${item._id}`} className='text-decoration-none'>
                                                <Button variant="info">Edit</Button>
                                            </Link>
                                        </td>
                                        <td>
                                            <Button variant="danger" className='mt-3' onClick={() => deleteData(item._id)}>Delete</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            ))
                        }

                    </table>
                </Row>
            </Container>
        </>
    );
};

export default ShowData;


