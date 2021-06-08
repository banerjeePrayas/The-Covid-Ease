import React from 'react'
import PageHeaders from '../components/PageHeaders';

const UnderConstruction = () => {
    return (
        <div className='construction-div'>
            <PageHeaders message='Page Under Development' />
            <img src='/images/construction.png' className='page-under-construction-img' alt='Page Under Construction'></img>
        </div>
    )
}

export default UnderConstruction
