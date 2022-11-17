import React,{useState} from 'react';
import { Button } from '@mui/material';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import getChisteschucknorris from '../../utils/axiosServises';
const AxiosChucknorris = () => {

    const [chiste, setChiste] = useState([]);
    const [Like, setLikeYour] = useState(0);
    const [dislike, setDislikeYour] = useState(0);
    

    const obtainChiste = () =>{
        getChisteschucknorris()
        .then((response)=>{

            setChiste(response.data)
            /* console.log(response); */
        }).catch((error)=>{
            alert(`something went wrong: ${error}`)
        })
    }
    

    
    function dislikeYour(chistes) {
        if(chistes.id != null){
            setDislikeYour(dislike + 1)
        }else{
            alert('Genere un chiste')
        }
    }
    function yourLike(chistes) {
        if(chistes.id != null){
            setLikeYour(Like + 1)
        }else{
            alert('Genere un chiste')
        }
    }
   
    const center = {
        alignItems: 'center',
        justifyContent: 'center'
    }
    
   
    
   
    
    return (
        <div>
                <Card sx={{ maxWidth: 500 }} >
                <CardMedia
                    component="img"
                    height="250"
                    image="https://api.chucknorris.io/img/chucknorris_logo_coloured_small.png"
                    alt="Chucknorris"
                />
                <CardContent style={center}>
                    <Typography gutterBottom variant="h5" component="div">
                    Chucknorris
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {chiste.value}
                    

                    <br></br><br></br>
                    </Typography>
                </CardContent>
                <CardActions style={center}>
                    <Button size="small" onClick={()=>yourLike(chiste)} >{Like}<ThumbUpIcon></ThumbUpIcon></Button>
                    <Button size="small" onClick={()=>dislikeYour(chiste)}><ThumbDownAltIcon></ThumbDownAltIcon>{dislike}</Button>
                    <Button variant="contained" size="large" onClick={obtainChiste}>Generar chiste</Button>
                </CardActions>
                </Card>
                <br></br><br></br>
                
                
                    
                
        </div>
    );
}

export default AxiosChucknorris;
