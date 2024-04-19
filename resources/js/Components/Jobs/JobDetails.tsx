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
import { useParams, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { XMLValidator, XMLParser } from 'fast-xml-parser';
import { IExternalJobs, IInternalJob } from '../Types';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export const JobDetails = (
 props: any 
) => {
    const [searchParams] = useSearchParams()
    const params = useParams()
    const [externalJobs, setExternalJobs] = useState<IExternalJobs[]>([])
    const [internalJob, setInternalJob] = useState<IExternalJobs>()
    const jobType = searchParams.get('type')
    const jobId : number = Number(params.id)
    const [foundJob, setFoundJob] = useState<IExternalJobs>()



    const getExternalJobs = () => {
        fetch('https://mrge-group-gmbh.jobs.personio.de/xml')
        .then(async(response) => {
            const data = await response.text()
            const parser = new XMLParser()
            const parsed : any = Object.entries(parser.parse(data))
            let jobs : IExternalJobs[] = []

            for (const [, value] of parsed) {
                if (typeof value === 'object' && value !== null) {
                    jobs.push({
                        ...value.position,
                        jobType: 'external'
                    })
                }
            }

            setExternalJobs(jobs)
        }).catch((err) => {
            console.log(err)
        })
    }

    const getInternalJob = (
      id : number 

    ) => {
        GetJobDetails(jobId).then((response : any) => {
          const formattedDescription = {
            jobDescription: [
                {
                    name: '',
                    value: response.description
                }
            ]
        }
        const modifiedJob : IExternalJobs = {
            id : response.id,
            name: response.title,
            jobDescriptions: formattedDescription,
            employmentType: response.employment_type.join(','),
            department: '',
            keywords: '',
            occupation: '',
            occupationCategory : '',
            office : '',
            recruitingCategory : '',
            schedule : '',
            seniority : '',
            subcompany : '',
            yearsOfExperience : '',
            jobType: 'internal'

        }
            setInternalJob(modifiedJob)

        }).catch((e) => {
            console.log(e)
        })
    }

    React.useEffect(() => {
      getExternalJobs()
    }, [])

    React.useEffect(() => {
      if(jobType === 'external' && externalJobs.length > 0) {
        const foundExternalJob : IExternalJobs[] = externalJobs.filter((job) => job.id === jobId) 
        if(foundExternalJob.length > 0) {
          setFoundJob(foundExternalJob[0])
        }
        console.log(foundExternalJob)
      } else if(jobType === 'internal' && internalJob !== undefined) {
        setFoundJob(internalJob)
      }

    }, [
      internalJob, 
      externalJobs, 
      jobId, 
      jobType
    ])

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
                <Typography component="h1" variant="h3">
                    <div className='actual-title' style={{
                      position: 'absolute',
                      marginTop: '58px'
                    }}>
                      {foundJob?.name}
                    </div>
                  </Typography>
              </div>
              <Stack spacing={20} direction="row">
                  <Typography>
                    Location : <b>{foundJob?.office}</b>
                  </Typography>
                  <Typography>
                    Employment Type: <b>{(foundJob?.employmentType)?.toUpperCase()}</b>
                  </Typography>
                  <Typography>
                    Seniority: <b>{foundJob?.seniority.toUpperCase()}</b>
                  </Typography>
                  <Typography>
                    Years of Experience: <b>{foundJob?.yearsOfExperience.toUpperCase() + ' Years'}</b> 
                  </Typography>
              </Stack>
            </Item>
          </Grid>
          <Grid item sm={12}>
            {/* <Typography paragraph>
              {description}
            </Typography> */}
            <Item>
            <div className='approval-job-desc'>
            { 
              foundJob && 
              foundJob?.jobDescriptions && 
              Array.isArray(foundJob.jobDescriptions.jobDescription) && 
              foundJob.jobDescriptions.jobDescription.map((item, index) =>(
                    <Typography key={index} paragraph>
                        <div dangerouslySetInnerHTML={{__html: item.name}}/>
                        <div dangerouslySetInnerHTML={{__html: item.value}}/>
                    </Typography>
            ))}
            </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}