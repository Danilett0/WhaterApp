import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import Skeleton from '@material-ui/lab/Skeleton'
import { IconContext } from "react-icons";
import IconState , {validValues} from '../IconState';
import '../Weather/weather.css';

const Weather = ({temperature, state}) => {
  return (
    <div className='Main-Weather'>
      <IconContext.Provider value={ {size:"4em"}  }>
         {
          state ? <IconState state={ state } /> : (<Skeleton variant="circle" height={50} width={50} />)
         }
      </IconContext.Provider>
      {
        temperature ? <Typography variant="h3" display="inline">{temperature}</Typography> : (<Skeleton variant="rect" height={15} width={20} />)
      }
    </div>
  )
}

Weather.propTypes = {
    temperature: PropTypes.number,
    state: PropTypes.oneOf(validValues),
}

export default Weather