import React, { useEffect, useState } from "react";
import { XMLValidator, XMLParser } from 'fast-xml-parser';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button } from "@mui/material";


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
    yearsOfExperience : string

}

export const JobLists = () => {
    const [externalJobs, setExternalJobs] = useState<IExternalJobs[]>([])

    const getExternalJobs = () => {
        fetch('https://mrge-group-gmbh.jobs.personio.de/xml')
        .then(async(response) => {
            const data = await response.text()
            const parser = new XMLParser()
            const parsed : any = Object.entries(parser.parse(data))
            let jobs : IExternalJobs[] = []

            for (const [, value] of parsed) {
                if (typeof value === 'object' && value !== null) {
                    jobs.push(value.position)
                }
            }
            console.log(jobs)

            setExternalJobs(jobs)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getExternalJobs()
    }, [])

    return (
        <div>
          {externalJobs.map((item, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />} // You can conditionally render ArrowDownwardIcon or ArrowDropDownIcon based on your logic
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
                >
                  View Job Details
                </Button>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
    )
}