import React, { useState, useEffect } from 'react';
import { Loader } from 'react-feather';
import { LinkContainer } from 'react-router-bootstrap'
import Meta from '../components/Meta';
import PaginationBar from '../components/Pagination'

const OxygenScreen = () => {
    const [isLoading, setLoading] = useState(false);

    const [oxygens, setOxygens] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);

    useEffect(() => {
        setLoading(true)
        fetch('/api/oxygen-cylinder')   
        .then((res) => res.json())
        .then((oxygens) => {
            setOxygens(oxygens);
            setLoading(false)
        })
        .catch((err) => {
            console.log(err);
        });
        setLoading(false)
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = oxygens.slice(indexOfFirstPost, indexOfLastPost)

    // Chnage Page
    // const paginate = (pageNumber) => {
    //   setCurrentPage(pageNumber)
    // }
    const paginate = (event, value) => {
        setCurrentPage(value)
    }


    return (
        <>
            <Meta title='Oxygen | The-Covid-Ease' description='Oxygen Available' keywords='Oxygen Supplier needed for Covid' />
            
            { isLoading ? ( <Loader /> ) : (
                
                <>
                    { currentPosts.map((oxygen) => (

                    <div className='container-oxygen'>
                    <div className='card-resources'>
                        <div className='content'>
                        {/* <img src='/images/covid-svg.svg'></img> */}
                            <img alt='Oxygen Mask Image' src='/images/oxygen-mask.png'></img>
                            <h2>{oxygen.dealerName}</h2>
                            <p><i style={{"color": 'red'}} class="fas fa-map-marker-alt"></i>: {oxygen.location}</p>
                            {/* <LinkContainer to='/bed-availability'><a href='#'>Read More</a></LinkContainer> */}
                        </div>
                    </div>   

                    </div>
                    ))}
                    <PaginationBar postsPerPage={postsPerPage} totalPosts={oxygens.length} paginate={paginate} />
                </>
                
            )}
        </>
    )
}

export default OxygenScreen
