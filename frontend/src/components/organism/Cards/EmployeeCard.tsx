
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function EmployeeCard() {
  return (
    <Card sx={{ width: "100%", maxWidth: 200, flexGrow: 1, marginX: 2, backgroundColor:"#F7F7F7"  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://html.bdevs.net/manez.prev/assets/images/avatar/avatar16.png"
          alt="green iguana"
          sx={{ borderRadius: '50%', width: 80, height: 80, margin: 'auto', marginTop:2}}
        />
        <CardContent sx={{padding:0, marginBottom:4}}>
          <Typography gutterBottom variant="h5" align='center'>
            Lizard
          </Typography>
          <Typography gutterBottom sx={{fontWeight:"300"}}  variant="body1" align='center' >
            Team Lead
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}