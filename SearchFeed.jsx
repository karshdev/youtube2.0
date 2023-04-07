import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import Videos from './Videos'
import { fetchFromApi } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'
export default function SearchFeed() {
  const{searchTerm}=useParams();
  const [videos, setvideos] = useState([])

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setvideos(data.items))
  }, [searchTerm])




  return (
    <Box
      p={2}
      sx={{
        overflowY: 'auto',
        height: '90vh',
        flex: 2,
        marginLeft:{
          xs:'20px',
          sm:"40px",
          md:'60px'
        }
      }}
    >
      <Typography
        variant='h4'
        fontWeight='bold'
        mb={2}
        sx={{
          color: 'white'
        }}
      >
        Search results for:
        &nbsp;
        <span style={{ color: '#FC1503' }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}
