import { Button, Card, CardContent, CardHeader, Grid } from '@mui/material';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useQuery } from 'react-query';
import { ApiSolicitudes } from '../Api/ApiSolicitudes';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'razon_social', headerName: 'Razon_social', width: 130 },
    { field: 'ruc', headerName: 'Ruc', width: 130 },
    { field: 'presupuesto', headerName: 'Presupuesto', width: 130 },
    { field: 'estado', headerName: 'Estado', width: 130 },
    { field: 'acciones', headerName: 'Acciones', width: 130 },
  ];
export const Solicitudes = () => {
  const token = localStorage.getItem('token')
  console.log(token)
  const {data,isLoading} = useQuery(["login"],()=> ApiSolicitudes(token).get())
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
                <CardHeader title={'Ver datos del usuario '/*+data.numero*/} />
                <CardContent >
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
                </CardContent>
            </Grid>
            <Button variant="outlined" size="medium">Salir</Button>
        </Card>
  );
}
export default Solicitudes;