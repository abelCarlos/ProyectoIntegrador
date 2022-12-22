import { Box, Button, Card, CardContent, CardHeader, Grid, List, ListItem, TextField } from '@mui/material';
import * as React from 'react';
import { useQuery } from 'react-query';
import { ApiEditarSolicitudes } from '../../Api/ApiSolicitudes';

export const EditarSolicitudes = () => {

  const token = localStorage.getItem('token')
  console.log(token)
//   c
//   const {data,isLoading} = useQuery(["login",id],()=> ApiEditarSolicitudes(token).get(id))
//   if(isLoading){
//       console.log("cargando");
//         return <p>
//           cargando
//         </p>
//     }
//     console.log(data);
const data = [
    { id: 1, personaje: "Naruto", anime: "Naruto" },
    { id: 2, personaje: "Goku", anime: "Dragon Ball" },
    { id: 3, personaje: "Kenshin Himura", anime: "Rurouni Kenshin" },
    { id: 4, personaje: "Monkey D. Luffy", anime: "One Piece" },
    { id: 5, personaje: "Edward Elric", anime: "Fullmetal Alchemist: Brotherhood"},
    { id: 6, personaje: "Seto Kaiba", anime: "Yu-Gi-Oh!" },
  ];

  return (
        <Card sx={{ border:"groove", mt:1}}>
            <Grid>
                        <CardHeader title={'Ver datos del usuario '/*+data.numero*/} />
                        <CardContent >
                            <Box
                            sx={{width: 500,maxWidth: '100%',}}>
                            <List>
                                <ListItem>
                                <TextField fullWidth label="Razon social" id="fullWidth"></TextField>
                                </ListItem>
                                <ListItem>
                                <TextField fullWidth label="Tipo de sistema" id="fullWidth"></TextField>
                                </ListItem>
                                <ListItem>
                                <TextField fullWidth label="Ruc" id="fullWidth"></TextField>
                                </ListItem>
                                <ListItem>
                                <TextField fullWidth label="Descripcion" id="fullWidth"></TextField>
                                </ListItem>
                                <ListItem>
                                <TextField fullWidth label="Presupuesto" id="fullWidth"></TextField>
                                </ListItem>
                            </List>
                            </Box>
                        </CardContent>
                        <Button variant="contained" color="success">Guardar</Button>                        
            </Grid><br/>
        </Card>
  );
}
export default EditarSolicitudes;