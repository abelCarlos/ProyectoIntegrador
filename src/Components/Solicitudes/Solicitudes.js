import {  Button, Card, CardContent, Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import * as React from 'react';
import { useQuery } from 'react-query';
import { ApiSolicitudes } from '../../Api/ApiSolicitudes';

import Paper from '@mui/material/Paper';

export const Solicitudes = () => {
  const token = localStorage.getItem('token')
  console.log(token)
  const {data,isLoading} = useQuery(["solicitudes"],()=> ApiSolicitudes(token).get())
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
            <TableCell align="right">Razon social</TableCell>
            <TableCell align="right">Ruc</TableCell>
            <TableCell align="right">Descripcion</TableCell>
            <TableCell align="right">Presupuesto</TableCell>
            <TableCell align="right">Estado</TableCell>
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
              <TableCell align="right">{dato.razon_social}</TableCell>
              <TableCell align="right">{dato.ruc}</TableCell>
              <TableCell align="right">{dato.descripcion}</TableCell>
              <TableCell align="right">{dato.presupuesto}</TableCell>
              <TableCell align="right">{dato.estado}</TableCell>
              <TableCell align="right">
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
export default Solicitudes;