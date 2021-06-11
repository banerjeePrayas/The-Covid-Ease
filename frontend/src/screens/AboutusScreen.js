import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import Meta from '../components/Meta';
import PageHeaders from '../components/PageHeaders';

const AboutusScreen = () => {
    return (
        <>
            <Meta title='About Us | The-Covid-Ease' description='About The-Covid-Ease' keywords='Who are The-Covid-Ease' />

            <PageHeaders message='About Us - আমাদের সম্পর্কে' />

            <Accordion defaultActiveKey="0">
            <Card style={{"margin": '4rem'}}>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                Who We Are? <i class="fas fa-chevron-down"></i>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>👋 Hello / Salam / Namaste 🙏 We are a Organization present here for the sake of Our Own Country's People.
                This app is developed by a Upcoming Graduate of Sister Nivedita University -  Prayas Banerjee,
                 a B-Tech Computer Science Student from Kolkata.
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card style={{"margin": '4rem'}}>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                Our Intention? <i class="fas fa-chevron-down"></i>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body>
                 Our One & Only Intention is to provide a Platform for Our State People to have Genuine Resources Directory.
                 Why this app?  To minimize the gap between the supplier and common people with
                  the power of internet. To provide all the information like Oxygen supplier, 
                  hospital bed availability, covid testing etc. in a user-friendly interface so 
                  that people can grab the information in a single click.

                  Source of Data: Different Websites like - https://www.wbhealth.gov.in/ and other public sources.
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
        </>
    )
}

export default AboutusScreen
