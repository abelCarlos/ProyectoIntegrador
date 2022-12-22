import { Box, Button, Card,  TextField, CssBaseline, Typography} from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { Container } from '@mui/system';

const baseUrl="http://3.226.255.251/api/solicitudes";

export const CrearSolicitud = () => {

    const [datos,setDatos] = useState({
        razon_social: '',
        ruc: '',
        descripcion: '',
        presupuesto: '',
        estado: '',
        user_id: '2',
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
        alert("Ingrese datos en los campos requeridos");
        }else{
         await axios.post(baseUrl,datos)
         .then((res)=>{
            const {data} = res;
            console.log(data);
            setTimeout(()=>{
                window.location.href="./main";
         },1500);
         });
    }
};

    return(
        <Card sx={{ border:"groove", mt:1}}>
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
          <Typography component="h1" variant="h5">
            Crear Solicitud
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              onChange={handleInputChange}
              margin="normal"
              required
              fullWidth
              id="razon_social"
              label="Razon social"
              name="razon_social"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={handleInputChange}
              margin="normal"
              required
              fullWidth
              name="ruc"
              label="ruc"
              id="ruc"
              autoComplete="ruc"
            />
            <TextField
              onChange={handleInputChange}
              margin="normal"
              required
              fullWidth
              id="descripcion"
              label="Descripcion"
              name="descripcion"
              autoComplete="descripcion"
              autoFocus
            />
                <TextField
                onChange={handleInputChange}
                margin="normal"
                required
                fullWidth
                id="presupuesto"
                label="Presupuesto"
                name="presupuesto"
                autoComplete="presupuesto"
                autoFocus
                />
                <TextField
                onChange={handleInputChange}
                margin="normal"
                required
                fullWidth
                id="estado"
                label="Estado"
                name="estado"
                autoComplete="Estado"
                autoFocus
                />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
        </Card>
    )
}
export default CrearSolicitud;