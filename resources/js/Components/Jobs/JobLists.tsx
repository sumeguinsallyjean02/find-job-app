import React, { useEffect, useState } from "react";
import { XMLValidator, XMLParser } from 'fast-xml-parser';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button } from "@mui/material";
import { GetAllJobs} from "../../Services/GetAllJobs";
import JobDescription from "./Description";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';


interface IJobDescription {
    name: string
    value: string
}


interface IExternalJobs {
    department:string
    employmentType: string
    id : number
    jobDescriptions: {
        jobDescription: IJobDescription[]
    }
    keywords: string
    name: string
    occupation: string
    occupationCategory : string
    office : string
    recruitingCategory : string
    schedule : string
    seniority : string
    subcompany : string
    yearsOfExperience : string,
    jobType: string

}

interface IInternalJob {
    created_at: string
    description: string
    employment_type: string[]
    id: number
    location: string
    title: string
    updated_at: string
}



export const JobLists = () => {
    const [externalJobs, setExternalJobs] = useState<IExternalJobs[]>([])
    const [internalJobs, setInternalJobs] = useState<IExternalJobs[]>([])
    const [selectedJobId, setSelectedJobId] = useState(0)
    const [searchValue, setSearchValue] = useState<>('')

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

    const getInternalJobs = () => {
        GetAllJobs().then((response : any) => {
            const approvedJobs : any = response.data
            const modifiedJobs = approvedJobs.map((
                approvedJob : IInternalJob
            ) => {
                const approvedJobDescription = approvedJob.description
                const formattedDescription = {
                    jobDescription: [
                        {
                            name: '',
                            value: approvedJobDescription
                        }
                    ]
                }
                return {
                    id : approvedJob.id,
                    name: approvedJob.title,
                    jobDescriptions: formattedDescription,
                    employmentType: approvedJob.employment_type.join(','),
                    office : approvedJob.location,
                    department: '',
                    keywords: '',
                    occupation: '',
                    occupationCategory : '',
                    recruitingCategory : '',
                    schedule : '',
                    seniority : '',
                    subcompany : '',
                    yearsOfExperience : '',
                    jobType: 'internal'

                }
            })
            setInternalJobs(modifiedJobs)
        }).catch((e) => {
            console.log(e)
        })
    }

    useEffect(() => {
        getExternalJobs()
    }, [])

    useEffect(() => {
        getInternalJobs()
    }, [])

    return (
        <div>
            <div className="jobSearch">
                <TextField 
                    id = "outlined-basic" 
                    label="Search by Job Name" 
                    variant="outlined" 
                    fullWidth={true}
                    InputProps={{
                        sx: {
                            borderRadius: 3
                        }
                    }}
                    onChange={(e) => {
                        const searchValue = e.target.value
                        setSearchValue(searchValue)
                    } }
                />
            </div>
          {[
            ...externalJobs,
            ...internalJobs
          ].filter((job : IExternalJobs) => {
            if(searchValue === '' || !searchValue) {
                return true
            }
            const regex = new RegExp(searchValue, 'gi')
            return job.name.match(regex)    
        }).map((item, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
              >
                <Typography component={'h1'} variant="h5">{item.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                { (item.jobDescriptions.jobDescription).map((item, index) =>(
                    <Typography key={index} paragraph>
                        <div dangerouslySetInnerHTML={{__html: item.name}}/>
                        <div dangerouslySetInnerHTML={{__html: item.value}}/>
                    </Typography>
                ))}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="success"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => {
                    window.open(`/#/job/detail/${item.id}?type=${item.jobType}`, "_blank")
                  }}
                >
                  View Job Details
                </Button>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
    )
}