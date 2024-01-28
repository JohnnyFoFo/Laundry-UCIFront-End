import React from 'react'
import './TowerSelection.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import ButterflyImage from '../../Images/Butterfly.png'

function TowerSelection(props) {
  return (
    
    <div className= 'TowerSelection' onClick={()=>props.onclick(props.towerName)}>
        <Card sx={{ minWidth: 50 }} className='Card' style={{color:'whitesmoke', backgroundColor: props.backgroundColor, cursor: 'pointer'}}>
      <CardContent>

      <Typography variant="h5" component="div">
          {props.towerName}
        </Typography>
        {props.towerName == 'Playa' && 

        <div>
            <BeachAccessIcon/>
        </div>

        }
        {props.towerName == 'Caballo' && 

        <div>
            <BedroomBabyIcon/>
        </div>

        }
        {props.towerName == 'Mariposa' && 

            <div>
                <img src={ButterflyImage}></img>
            </div>

}
        
       
      </CardContent>

        </Card>
    
    </div>
  )
}

export default TowerSelection

