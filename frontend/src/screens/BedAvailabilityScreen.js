import React, { useState, useEffect } from 'react';

const BedAvailabilityScreen = () => {

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
                
                {/* <tr>
                <th scope="row">Default</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
                </tr>
                <tr class="table-primary">
                <th scope="row">Primary</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
                </tr>
                <tr class="table-secondary">
                <th scope="row">Secondary</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
                </tr>
                <tr class="table-success">
                <th scope="row">Success</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
                </tr>
                <tr class="table-danger">
                <th scope="row">Danger</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
                </tr>
                <tr class="table-warning">
                <th scope="row">Warning</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
                </tr>
                <tr class="table-info">
                <th scope="row">Info</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
                </tr>
                <tr class="table-light">
                <th scope="row">Light</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
                </tr>
                <tr class="table-dark">
                <th scope="row">Dark</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
                </tr> */}
            </tbody>
            </table> 
        </>
    )
}

export default BedAvailabilityScreen
