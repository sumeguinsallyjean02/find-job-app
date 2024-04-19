import React, { useState } from "react"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { LoginUser } from "../../Services/LoginUser";
import {useDispatch} from 'react-redux'
import { setUser, setUserToken } from "../../Redux/actions/users";
import { useNavigate } from "react-router-dom";
import { GetMe } from "../../Services/GetMe";


interface ILoginParams {
  email: string, 
  password: string
}

export const Login = (
    props : any
) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = (
      {email, password} : ILoginParams
    ) => {
      LoginUser(
        email, password
      ).then((response) => {
        const token = response.data.token
        dispatch(setUserToken(token))
        GetMe(token).then((response : any) => {
          const {email, type} = response.data
          const user = {
            email,
            type
          }
          dispatch(setUser(user))
        }).catch((e) => console.log(e))
        navigate('/home')
      }).catch((e) => console.log(e)) 
    }


    const defaultTheme = createTheme()
    return (
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" onSubmit={() => {}} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => {
                    onLogin({
                      email, 
                      password
                    })
                  }}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      )
}