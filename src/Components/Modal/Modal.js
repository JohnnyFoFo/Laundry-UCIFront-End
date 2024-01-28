import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Modal.css'


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function Modal(props) {
    const [use, setUse] = React.useState('');

    const handleChange = (event) => {
        setUse(event.target.value);
      };


      const postData = async () => {
        try {
            let url = ''
            if(use == 'Broken'){
                url = 'https://api.mittaldev.com/washuci/reportBroken'
            }
            else if(use == 'In Use'){
                url = 'https://api.mittaldev.com/washuci/claimMachine'
            }
            else{
                url = 'https://api.mittaldev.com/washuci/reportFixed'
            }
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'pass': 'prod-zgvR1i54',
              'machine':{'id': '01'}
            }
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log(data)
          console.log(response)
          return data
        } catch (error) {
          console.error('Error:', error);
        }
        
      }
  return (
    <Card sx={{ minWidth: 275, width: '100%', height:'20rem' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.machine}
        </Typography>
        <Select
          labelId="select"
          id="select"
          value={use}
          label="Choose Your Usage"
          onChange={handleChange}
        >
          <MenuItem value={'Broken'}>Report Broken</MenuItem>
          <MenuItem value={'In Use'}>Report In Use</MenuItem>
          <MenuItem value={'Fixed'}>Report Fixed</MenuItem>
        </Select>
        

      </CardContent>
      <CardActions>
        <Button onClick={()=> postData()} className='button'>Submit</Button>
      </CardActions>
    </Card>
  );
}




