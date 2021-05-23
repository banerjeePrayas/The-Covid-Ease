import React, { useState, useEffect } from 'react'
import HashLoader from 'react-spinners/HashLoader'
import { css } from "@emotion/react";


const override = css`
  display: block;
  border-color: red;
  text-allign: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loader = () => {

    const [isLoading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        }, 3000)
    }, []);

    return (
        <HashLoader color={"#123abc"} loading={isLoading} css={override}  size={150} />
        // <Spinner className='loader-container' animation='border' role='status' style={{ width: '100px', height: '100px', margin: 'auto', display: 'block' }}>
            
        //     <span className='sr-only'>Loading...</span>

        // </Spinner>
    )
}

export default Loader
