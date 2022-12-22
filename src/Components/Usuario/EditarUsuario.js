import { Box, Button, Card, CardContent, CardHeader, Grid, List, ListItem, TextField } from '@mui/material';
import * as React from 'react';

export const EditarUsuario = () => {

  return (
        <Card sx={{ border:"groove", mt:1}}>
            <Grid>
                        <CardHeader title={'Ver datos del usuario '/*+data.numero*/} />
                        <CardContent >
                            <Box
                            sx={{width: 500,maxWidth: '100%',}}>
                            <List>
                                <ListItem>
                                <TextField fullWidth label="Nombre" id="fullWidth"></TextField>
                                </ListItem>
                                <ListItem>
                                <TextField fullWidth label="Apellido" id="fullWidth"></TextField>
                                </ListItem>
                                <ListItem>
                                <TextField fullWidth label="Email" id="fullWidth"></TextField>
                                </ListItem>
                            </List>
                            </Box>
                        </CardContent>
                        <Button variant="contained" color="success">Guardar</Button>
            </Grid><br/>
        </Card>
  );
}
export default EditarUsuario;