import {  Card, CardContent, CardHeader, Grid, List, ListItem, ListItemText } from '@mui/material';
import * as React from 'react';
import { useQuery } from 'react-query';
import { ApiLogin } from '../../Api/ApiLogin';



export const DatosUsuario = () => {

  const token = localStorage.getItem('token')
  console.log(token)
  const {data,isLoading} = useQuery(["login"],()=> ApiLogin(token).post())
  if(isLoading){
      console.log("cargando");
        return <p>
          cargando
        </p>
    }
    console.log(data);

  return (
        <Card sx={{ border:"groove", mt:1}}>
            <Grid>
                        <CardHeader title={'Ver datos del usuario de : '+data.name} />
                        <CardContent >
                            <List>
                                <ListItem>
                                <ListItemText primary="Nombre" secondary={data.name} />
                                </ListItem>
                                <ListItem>
                                <ListItemText primary="Email" secondary={data.email} />
                                </ListItem>
                                <ListItem>
                                <ListItemText primary="Fecha de creacion" secondary={data.created_at} />
                                </ListItem>
                            </List>
                        </CardContent>
              </Grid>
        </Card>
  );
}
export default DatosUsuario;