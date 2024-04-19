import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Header } from '../Common/Header';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { GetJobDetails } from '../../Services/GetJobDetails';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ApproveJob } from '../../Services/ApproveJob';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export const JobApproval = () => {
  const params = useParams()
  const navigate = useNavigate();
  const jobId : number = Number(params.id)

  const [jobTitle, setTitle] = React.useState('')
  const [jobDescription, setJobDescription] = React.useState('')
  const [jobStatus, setJobStatus] = React.useState('')
  const token = useSelector((state : any) => state.users.token ) || localStorage.getItem('token')

  const approveJob = (
    status : string
  ) => {

    ApproveJob(
      jobId, 
      status,
      token
    )
      .then((response : any) => {
        console.log('Successful!')
        navigate('/home')
      }).catch((e) =>  console.log(e))
  }

  React.useEffect(() => {
    GetJobDetails(jobId, token)
      .then((response : any)  => {
        const { title, description, status } = response.data
        setTitle(title)
        setJobDescription(description)
        setJobStatus(status)
      }).catch((e) => {
        console.log(e)
      })
  }, [token])

  return (
    <div>
      <Header></Header>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item sm={12}>
            <Item>
              <div className='approval-job-tiltle' style={{
                height: '150px'
              }}>
                <Typography component="h1" variant="h2">
                  <div className='actual-title' style={{
                    position: 'absolute',
                    marginTop: '10px'
                  }}>
                  {jobTitle}
                  </div>
                </Typography>
              </div>
            </Item>
          </Grid>
          <Grid item sm={8}>
            {/* <Typography paragraph>
              {description}
            </Typography> */}
            <Item>
            <Typography component="h1" variant="h5">
              Job Description
            </Typography>
            <div className='approval-job-desc'>
              <Typography paragraph>
                {jobDescription}
              </Typography>
            </div>
            </Item>
          </Grid>
          <Grid item sm={4}>
            <Item>
            <Stack spacing={2} direction="column">
              <Button 
                disabled={jobStatus === 'approved' || jobStatus === 'spam'}
                variant="contained" 
                color='success'
                onClick={() => {
                  approveJob('approved')
                }}
                >Approved</Button>
              <Button 
                variant="contained" 
                color='error'
                disabled={jobStatus === 'approved' || jobStatus === 'spam'}
                onClick={() => {
                  approveJob('spam')
                }}
                >Mark as Spam</Button>
            </Stack>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}