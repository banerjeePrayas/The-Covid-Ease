import React, { useState, useEffect } from 'react';
import HashLoader from 'react-spinners/HashLoader'
import { css } from "@emotion/react";
import Meta from '../components/Meta';
import PageHeaders from '../components/PageHeaders';
import { Button } from 'react-bootstrap';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

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
    table: {
      minWidth: 700,
      textAlign: 'center'
    },
    row: {
        backgroundColor: "yellow"
    },
    rowCell: {
        backgroundColor: "#886CC7",
        textAlign: "center"
    }
  });

const BedAvailabilityScreen = () => {

    const [isLoading, setLoading] = useState(false);
    const classes = useStyles();

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
                    <PageHeaders message='HOSPITAL BEDS - ??????????????????????????? ??????????????????' />
                    <p className='resources-card-paragraph'>Live Bed Status Update from Integrated Covid Management System(Govt of West Bengal )????</p>
                    <div className='real-time-bed-btn'>
                        <Button className='btn'>
                        <a href='https://excise.wb.gov.in/CHMS/Public/Page/CHMS_Public_Hospital_Bed_Availability.aspx' target='_'>
                            Real Time Bed Availability Checking  /  ??????????????????????????? ?????????????????? ???????????????????????????
                        </a>
                        </Button>
                    </div>
                    {/* <table class="table table-hover table-bed">
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
                    </table>  */}
                    <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                        <TableRow className={classes.row}>
                            <StyledTableCell className={classes.rowCell}>NAME</StyledTableCell>
                            <StyledTableCell className={classes.rowCell} align="right">ADDRESS</StyledTableCell>
                            <StyledTableCell className={classes.rowCell} align="right">BEDS AVAILABLE</StyledTableCell>
                            <StyledTableCell className={classes.rowCell} align="right">CONTACT NO</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {beds.map((bed) => (
                            <StyledTableRow key={bed._id}>
                            <StyledTableCell align="center" component="th" scope="row">
                                {bed.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">{bed.address}</StyledTableCell>
                            <StyledTableCell align="center">{bed.bedAvailable}</StyledTableCell>
                            <StyledTableCell align="center"><a href={`tel:${bed.contactNo}`}><i class="fas fa-phone-alt"></i> Contact</a></StyledTableCell>
                            {/* <StyledTableCell align="right">{bed.protein}</StyledTableCell> */}
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </>
            
            )}
           
        </>
    )
}

export default BedAvailabilityScreen
