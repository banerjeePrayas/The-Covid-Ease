import React, { useState, useEffect } from 'react';
import HashLoader from 'react-spinners/HashLoader'
import { css } from "@emotion/react";
import Meta from '../components/Meta';
import PageHeaders from '../components/PageHeaders';
import { Button } from 'react-bootstrap';

const override = css`
  display: block;
  border-color: red;
  text-allign: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BedAvailabilityScreen = () => {

    const [isLoading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        }, 2000)
    }, []);

    const [beds, setBeds] = useState([]);

    useEffect(() => {
        fetch('/api/WB-beds')   
        .then((res) => res.json())
        .then((beds) => {
            setBeds(beds);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);


    return (
        <>
            <Meta title='Beds | The-Covid-Ease' description='Beds Available' keywords='Bed needed for Covid' />
            
            { isLoading ? ( <HashLoader color={"#123abc"} loading={isLoading} css={override}  size={150} /> ) : (

                <>
                    <PageHeaders message='HOSPITAL BEDS - হাসপাতালে বিছানা' />
                    <p className='resources-card-paragraph'>Live Bed Status Update from Integrated Covid Management System(Govt of West Bengal )👇</p>
                    <div className='real-time-bed-btn'>
                        <Button className='btn'>
                        <a href='https://excise.wb.gov.in/CHMS/Public/Page/CHMS_Public_Hospital_Bed_Availability.aspx' target='_'>
                            Real Time Bed Availability Checking  /  হাসপাতালে বিছানা অনুসন্ধান
                        </a>
                        </Button>
                    </div>
                    <table class="table table-hover table-bed">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Beds Available</th>
                        <th scope="col">Contact No</th>
                        </tr>
                    </thead>
                    <tbody className='table-bed-body'>
                        { beds.map((bed) => (
                            <tr key={bed._id} class="info">
                            <th scope="row">{bed.name}</th>
                            <th scope="row">{bed.address}</th>
                            <td>{bed.bedAvailable}</td>
                            <td><a href={`tel:${bed.contactNo}`}><i class="fas fa-phone-alt"></i> Contact</a></td>
                            </tr>
                        )) }
                    </tbody>
                    </table> 
                </>
            
            )}
           
        </>
    )
}

export default BedAvailabilityScreen
