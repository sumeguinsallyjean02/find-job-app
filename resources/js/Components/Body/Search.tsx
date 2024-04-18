import React from "react";
import TextField from '@mui/material/TextField';

export const Search = (
    props: any
) => {
    return (
        <div>
            <TextField 
                id = "outlined-basic" 
                label="Search" 
                variant="outlined" 
                fullWidth={true}
                InputProps={{
                    sx: {
                        borderRadius: 3
                    }
                }}
            />
        </div>
    )
}