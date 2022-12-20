import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import SendIcon from '@mui/icons-material/Send';


export const Upload = () =>{

    const [fotos, setFotos] = useState(null);

    const subirFotos = e => {
        setFotos(e);
    }
    const insertarFotos = async() =>{
        const f = new FormData();

        for (let index = 0; index < fotos.lenght; index++){
            f.append('files', fotos[index]);
            }
            await axios.post('https://saasd.free.beeceptor.com/my/api/path', f)
               .then(response => {
                console.log(response.data)
               }).catch(error=>{console.log(error);
            })
    }
    console.log("fotos: " + insertarFotos);
return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
      <input  name="files" accept="image/*" multiple type="file" onChange={(e)=> subirFotos(e.target.files)}/> 
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label"> 
      <input hidden name="files" accept="image/*" multiple type="file" onChange={(e)=> subirFotos(e.target.files)}/>
        <PhotoCamera />
      </IconButton>
      <br />
      <Button variant="contained" endIcon={<SendIcon />} onClick={()=>insertarFotos()}>
        Predecir
      </Button>
    </Stack>
);
}
export default Upload;