import React from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const HomeHelpSection = () => {
    return (
        <>
            <div className='grid-container-doctor'>
                <div class="grid-image">
                    <img class='doctors-image' src='/images/doctors-image.jpg'></img>
                </div>
                
                <div class="grid-link">
                    <i class="fas fa-hospital-user fa-2x"></i>
                    <h3><span>Doctor's</span> Help</h3>
                    <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more</p>
                    <figure class="text-center">
                        <blockquote class="blockquote">
                            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </figcaption>
                    </figure>

                    <div className='to-state-button'>
                        
                        {/* <button type="button" class="btn btn-dark">Dark</button> */}
                        <LinkContainer to='/doctors-consultancy'>
                        <Button className='btn-sm' variant='success'>
                                    Consult Doctor's
                        </Button>
                        </LinkContainer>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeHelpSection
