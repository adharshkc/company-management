
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { EmployeeDetail } from '../../../types/types';

type EmployeeCardProps={
  employee:EmployeeDetail
}

export default function EmployeeCard({employee}:EmployeeCardProps) {
  const name = employee.name
  const role = employee.role

  return (
    <Card sx={{ width: "100%", maxWidth: 200, flexGrow: 1, marginX: 2, backgroundColor:"#F7F7F7",boxSizing:"border-box"  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://html.bdevs.net/manez.prev/assets/images/avatar/avatar16.png"
          alt="green iguana"
          sx={{ borderRadius: '50%', width: 80, height: 80, margin: 'auto', marginTop:2}}
        />
        <CardContent sx={{padding:0, marginBottom:4,boxSizing:"border-box"}}>
          <Typography gutterBottom variant="h6" sx={{marginTop:1, fontWeight:400, }} align='center'>
            {name}
          </Typography>
          <Typography gutterBottom sx={{fontWeight:"300"}}  variant="body1" align='center' >
            {role}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}