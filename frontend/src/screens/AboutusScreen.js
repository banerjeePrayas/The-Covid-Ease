import React from 'react'
import { Accordion, Card } from 'react-bootstrap'


const AboutusScreen = () => {
    return (
        <>
            <Accordion defaultActiveKey="0">
            <Card style={{"margin": '4rem'}}>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                Click me! <i class="fas fa-chevron-down"></i>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card style={{"margin": '4rem'}}>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                Click me! <i class="fas fa-chevron-down"></i>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
        </>
    )
}

export default AboutusScreen
