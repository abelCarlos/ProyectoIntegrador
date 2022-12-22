import {  Paper,Button, Card, CardContent, Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useQuery } from 'react-query';
import { ApiUser } from '../../Api/ApiLogin';


export const ListaUsuarios = () => {

  const token = localStorage.getItem('token')
  console.log(token)
  const {data,isLoading} = useQuery(["users"],()=> ApiUser(token).get())
  if(isLoading){
      console.log("cargando");
        return <p>
          cargando
        </p>
    }
    console.log(data);

  return (
        

    <Card  component={Paper}>
      <Grid>
      <CardContent>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Accion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {data.map((dato) => (
            <TableRow
            key={dato.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {dato.id}
              </TableCell>
              <TableCell align="center">{dato.name}</TableCell>
              <TableCell align="center">{dato.email}</TableCell>
              <TableCell align="center">
                <Button color="primary" > Editar</Button>
              <Button color="secondary" >Eliminar</Button>
              </TableCell>             
            </TableRow>
            ))}
        </TableBody>        
      </Table>                          
      </CardContent >
      </Grid>    
  </Card>

  );
}
export default ListaUsuarios;