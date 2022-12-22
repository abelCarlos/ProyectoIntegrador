import { Button, Card, CardContent, CardHeader, Grid } from '@mui/material';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useQuery } from 'react-query';
import { ApiUser } from '../Api/ApiLogin';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nombre', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'created_at', headerName: 'Fecha de creacion', width: 130 },
    { field: 'acciones', headerName: 'acciones', width: 130 },
  ];
export const ListaUsuarios = () => {

  const token = localStorage.getItem('token')
  console.log(token)
  const {data,isLoading} = useQuery(["login"],()=> ApiUser(token).get())
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
                <CardHeader title={'Ver lista del usuario '/*+data.numero*/} />
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
                <Button variant="outlined" size="medium">Salir</Button>
            </Grid>
        </Card>
  );
}
export default ListaUsuarios;