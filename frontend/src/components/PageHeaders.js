import React from 'react'

const PageHeaders = (props) => {
    return (
        <div className='page-headers-div'>
            <h1>{props.message}</h1>
            <div className='heading-underline'></div>
        </div>
    )
}

export default PageHeaders
