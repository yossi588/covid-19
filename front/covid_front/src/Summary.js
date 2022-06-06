import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import Button from "@mui/material/Button";

let counter = 0;

const Summary = () => {
    const navigator = useNavigate();
    const [rows, setTable] = useState([]);
    const [errorMessage, setError] = useState('');


    useEffect(async() => {
        try{
            const res = await axios.get('http://localhost:8000/summary')
            setTable(res.data);
        }catch{
            setError("ERROR.")
        }
    },[])

    return(
        <div>
            <div className="mx-5">
                <Button  style={{left:'100px',position:'absolute'}} onClick={() => navigator('/')}>Register</Button>
                <h2 style={{ color: 'blue' }} className="d-flex mt-5 justify-content-center  ">Summary Page</h2>
            </div>
            <div>
                <p className="text-center mx-auto w-75 mt-4 text-danger">{errorMessage}</p>
            </div>
            <TableContainer component={Paper} className="d-flex justify-content-center mt-5">
                <Table sx={{ minWidth: 500,maxWidth: 1400 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>First name</TableCell>
                            <TableCell>Last name</TableCell>
                            <TableCell>Birth Date</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Zip code</TableCell>
                            <TableCell>Land-Line</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Infected</TableCell>
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={counter++}>
                                <TableCell>{row.FirstName}</TableCell>
                                <TableCell>{row.LastName}</TableCell>
                                <TableCell>{row.BirthDate}</TableCell>
                                <TableCell>{row.Address}</TableCell>
                                <TableCell>{row.City}</TableCell>
                                <TableCell>{row.CitizenZipCode}</TableCell>
                                <TableCell>{row.PhoneNumber}</TableCell>
                                <TableCell>{row.LandLine}</TableCell>
                                <TableCell>{row.Infected? 'True' : 'False'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Summary;