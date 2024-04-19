import React, { useState } from "react"
import { Header } from "../Common/Header"
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { EmploymentType } from "./EmploymentType";
import { Location } from "./Location";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import JobDescription from "./Description";
import { CreateJobs } from "../../Services/CreateJob";
import { useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

export const AddJob = () => {
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [employmentType, setEmploymentType] = useState([])
    const token = useSelector((state : any) => state.users.token  )

    const onEmploymentSelect = (
        values : any
    ) => {
        setEmploymentType(values)
    }

    const onJobDescChange = (
        value: string
    ) => {
        setDescription(value)
    }

    const onJobSubmit = () => {
        CreateJobs(
            {
                title,
                location,
                employmentType,
                description
            }, token
        ).then((response) => {
            console.log('Successfully Created Job!')
        }).catch((e) => console.error(e) )
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                <Grid item sm={12}>
                    <div className="add-job" style={{
                        height:'200px',
                        marginTop: '10px'
                    }}>
                        <Item>
                            <Typography component={'h1'} variant="h5" >
                                ADD JOB
                            </Typography>
                            <TextField
                                margin="normal"
                                fullWidth
                                id="Title"
                                label="Title"
                                name="title"
                                autoComplete="title"
                                autoFocus
                                onChange={(event) => {
                                    setTitle(event.target.value)
                                }}
                                />
                            <TextField
                                margin="normal"
                                fullWidth
                                id="Location"
                                label="Location"
                                name="location"
                                autoComplete="location"
                                autoFocus
                                onChange={(event) => {
                                    setLocation(event.target.value)
                                }}
                                />
                            <EmploymentType onSelect={onEmploymentSelect}></EmploymentType>
                            <JobDescription onChange={onJobDescChange} value={description}></JobDescription>
                            <div className="buttons" style={{
                                marginTop: '15px'
                            }}>
                                <Stack spacing={2} direction="column">
                                    <Button variant="contained" color='success' onClick={onJobSubmit}>Submit</Button>
                                    <Button variant="contained" color='info'>Clear</Button>
                                </Stack>
                            </div>
                        </Item>
                    </div>
                </Grid>
                </Grid>
            </Box>
        </div>
    )
}