import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';

const CityInfo = ({city, country}) => {
  return (
    <>
    <Typography display="inline" variant="h4"> {country} </Typography>  
    <Typography display="inline" variant="h5" > {city} </Typography>  
    </>
  )
}

CityInfo.propTypes = {
    city: PropTypes.string,
    country: PropTypes.string
}

CityInfo.defaultProps = {
  country: 'No country',
  city: 'No city'
}

export default CityInfo