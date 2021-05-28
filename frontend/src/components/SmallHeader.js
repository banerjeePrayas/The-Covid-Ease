import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';  //Alternative of React-Router for Bootstrap


const SmallHeader = () => {
    return (
        <>
            <nav className='small-header'>
                <h4>Report Bug?</h4>
                <LinkContainer to='/country'>
                        <a class="active" href="#">Report Bug</a>
                    </LinkContainer>
            {/* <ul>
                <li>
                    <LinkContainer to='/country'>
                        <a class="active" href="#">Report Bug</a>
                    </LinkContainer>
                </li>
            </ul> */}
            </nav>
        </>
    )
}

export default SmallHeader
