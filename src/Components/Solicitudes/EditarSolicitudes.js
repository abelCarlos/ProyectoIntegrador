import { Box, Button, Card, CardContent, CardHeader, Grid, List, ListItem, TextField } from '@mui/material';
import * as React from 'react';

export const EditarSolicitudes = () => {

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
                        <Button variant="outlined" size="medium">Salir</Button>
            </Grid><br/>
        </Card>
  );
}
export default EditarSolicitudes;