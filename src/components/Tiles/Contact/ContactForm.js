import React, { useState } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha"


import './Contact.css'

export const ContactForm = () => {

    const initialContactState = { name: "", message: "", email: "" };
    const [newMessage, setNewMessage] = useState(initialContactState);

    const { name, message, email } = newMessage;

    const handleInput = e => {
        setNewMessage({ ...newMessage, [e.target.name]: e.target.value });
    };

    const sendMessage = e => {
        Axios({
            method: 'POST',
            url: 'http://localhost:5000/send',
            data: { name, message, email },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.data.msg === 'suc') {
                console.log('email has been sent');
                setNewMessage(initialContactState)
            } else {
                console.log("failure")
            }
        })
    }

    return (
        <div>
            <Row>
                <Col sm="12" md={{ size: 10, offset: 1 }} className="text-center mt-4">
                    <h3>Send a Message</h3>
                </Col>
            </Row>

            <Form>
                <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input
                                    name="name"
                                    onChange={handleInput}
                                    value={name}
                                    placeholder="Your Name"></Input>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    onChange={handleInput}
                                    value={email}
                                    placeholder="email@email.com"></Input>
                            </FormGroup>
                        </Col>

                    </Row>
                    {/* </Col> */}

                    {/* <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                onChange={handleInput}
                                value={email}
                                placeholder="Enter your email here"></Input>
                        </FormGroup> */}

                    <FormGroup>
                        <Label for="message">Message</Label>
                        <Input
                            type="textarea"
                            value={message}
                            onChange={handleInput}
                            style={{ height: 100 }}
                            name="message"
                            placeholder="Drop me a line"></Input>
                    </FormGroup>
                    <Button
                        onClick={sendMessage}>Submit</Button>

                    <ReCAPTCHA sitekey="6Lcy2T4aAAAAAOI75jo6QdxfY8LJm5ibZ3S5Vqft" />
                </Col>
            </Row>
                    </Form>
        </div >
    )

};