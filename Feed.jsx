import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromApi } from '../utils/fetchFromAPI'
export default function Feed() {

const[selectedCategory,setselectedCategory]=useState('New')
const[videos,setvideos]=useState([])

useEffect(()=>{
fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
.then((data)=>setvideos(data.items))
},[selectedCategory])




  return (
    <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
      <Box
        sx={{  height:{
          xs:'10vh',
          sm:'90vh'
        }, borderRight: { xs: 0, sm: '1px solid #3d3d3d' }, px: { xs: 0, sm: 2 } }}
      >
        <Sidebar 
        selectedCategory={selectedCategory}
        setselectedCategory={setselectedCategory}
        />
        
      </Box>
      <Box
        p={2}
        height={{
          xs:'10vh',
          sm:'90vh'
        }}
        sx={{
          overflowY: 'auto',
        
          flex: 2
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
          {selectedCategory}
          &nbsp;
          <span style={{ color: '#FC1503' }}>VIDEOS</span>
        </Typography>
        <Videos  videos={videos}/>
      </Box>
    </Stack>
  )
}
