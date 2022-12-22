import axios from 'axios';
import {useState} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Container } from '@mui/system';
import { Avatar, Button, Checkbox, CssBaseline, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const baseUrl="http://3.236.233.51/api/auth/login";
const theme = createTheme();

export function Login(){

    const [datos,setDatos] = useState({
        email: '',
        password: ''
    });
    const handleInputChange = (e) =>{
        let {name,value } = e.target;
        let newDatos = {...datos, [name]: value};
        setDatos(newDatos);
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(!e.target.checkValidity()){
        console.log("no enviar");
        }else{
         await axios.post(baseUrl,datos)
         .then((res)=>{
            const {data} = res;
            console.log(data);
            setTimeout(()=>{
                localStorage.setItem("token",data?.access_token)
                window.location.href="./main";
         },1500);
         });
    }
};
    return (
    <section className="h-100"> 
    <ThemeProvider theme={theme}>
      <Container onSubmit={handleSubmit} component="main" maxWidth="xs">
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
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              onChange={handleInputChange}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={handleInputChange}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>

  </section>
        );
    }

export default Login;