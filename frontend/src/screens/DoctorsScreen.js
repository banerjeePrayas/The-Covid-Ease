// import React, { useEffect } from 'react'
import React, { useState, useEffect } from 'react';
// import { LinkContainer } from 'react-router-bootstrap'
import { Image } from 'cloudinary-react'
// import { Image } from 'react-bootstrap'
import HashLoader from 'react-spinners/HashLoader'
import { css } from "@emotion/react";
import Meta from '../components/Meta';
import PageHeaders from '../components/PageHeaders';
import SearchBox from '../components/SearchBox';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PaginationBar from '../components/Pagination'


const override = css`
  display: block;
  border-color: red;
  text-allign: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    minWidth: 300,
    minHeight: 300,
    maxHeight: 400,
    marginBottom: "2rem",
    textAlign: "center",
    margin: "0 auto",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    position:"relative"
  },
  media: {
    height: 150,
    textAlign: "center",
    width: 150,
    padding: "1rem",
    borderRadius: "100%",
    margin: "0 auto"
    //  height: "50px"
  },
  button: {
    // position:"absolute",
    // bottom:0
  }
});

const DoctorsScreen = () => {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);


    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        }, 2000)
    }, []);


    // const dispatch = useDispatch();

    // const doctorList = useSelector((state) => state.doctorList)
    // const { loading, error, doctors } = doctorList;


    // useEffect(() => {

    // //   dispatch({ type: BLOG_CREATE_RESET });

    // //     if(!userInfo || !userInfo.isAdmin) {
    // //         history.push('/login')
    // //     } 
        
    //     // if(successCreate) {
    //     //     history.push(`/admin/blogs/${createdBlog._id}/edit`)
    //     // } else {
    //         dispatch(listDoctors())
    //     // }

    // }, [dispatch])

    // const createBlogHandler = () => {
    //   dispatch(createBlog())
    // }

    // const deleteHandler = (id) => {
    //   if(window.confirm('Are You Sure?')) {
    //     dispatch(deleteBlog(id));
    //   }
    // }

    const [doctors, setDoctors] = useState([]);
    const [error, setError] = useState();

  useEffect(() => {
    fetch('/api/doctors-consultancy')
      .then((res) => res.json())
      .then((doctors) => {
        setDoctors(doctors);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = doctors.slice(indexOfFirstPost, indexOfLastPost)

  // Chnage Page
  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber)
  // }
  const paginate = (event, value) => {
    setCurrentPage(value)
  }

  const setPerPage = (event) => {
    setPostsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

    return (
        <div>
          <Meta title='Doctors | The-Covid-Ease' description='Doctors for Online Consultation' keywords='doctors for Covid' />
          { isLoading ? ( <HashLoader color={"#123abc"} loading={isLoading} css={override}  size={150} /> ) : (
            
              <>
              <PageHeaders message='Doctors - ডাক্তার' />
              <SearchBox />
                <div className='doctor-layout'>
                {
                  currentPosts.map((doctor) => (
                    <Card className={classes.root}>
                    <CardActionArea>
                    <Image className={classes.media} cloudName="the-covid-ease" publicId={`https://res.cloudinary.com/the-covid-ease/image/upload/v1623868146/${doctor.image}`} alt="Profile Pic"></Image>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {doctor.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {doctor.address}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                    { doctor.mobileNo ?  <a className={classes.button} href={`tel:${doctor.mobileNo}`} style={{ backgroundColor: '#485785', color: '#f1f1f1', textDecoration: 'none', width: '100%', borderRadius: '10px'}}>
                      <Button className={classes.button} style={{color: '#f1f1f1'}} size="medium" color="secondary" fullWidth>
                        CALL
                      </Button>
                      </a> : null}
                      { doctor.email ?  <a className={classes.button} href={`mailto:${doctor.email}`} style={{ backgroundColor: '#485785', color: '#f1f1f1', textDecoration: 'none', width: '100%', borderRadius: '10px'}}>
                      <Button className={classes.button} style={{color: '#f1f1f1'}} size="medium" color="secondary" fullWidth>
                        EMAIL
                      </Button>
                      </a> : null}
                    </CardActions>
                  </Card>
                  ))
                }
                </div>
                <PaginationBar style={{textAlign: 'center'}} postsPerPage={postsPerPage} totalPosts={doctors.length} paginate={paginate} />

              </>
              
            )
            }
            
                
            
        </div>
    )
}

export default DoctorsScreen
