import { CheckCircle } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchFromAPI'
import Videos from './Videos'

export default function VideoDetail() {
 
  const {id}=useParams();
const[videoDetail,setvideoDetail]=useState(null)
const[videos,setvideos]=useState(null)

  useEffect(()=>{
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>setvideoDetail(data.items[0]))
    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=>setvideos(data.items))
  },[id])
  if(!videoDetail?.snippet) return 'loading...'
const {snippet:{title,channelId,channelTitle},statistics:{viewCount,likeCount}}=videoDetail
  return (
    <Box
    minHeight='91vh'
    >
<Stack direction={{
  xs:'column',
  md:'row'
}}>
 
  <Box
  flex={1}
  >
<Box
sx={{
  width:'100%',
  position:'sticky',
  top:'86px',
  
}}
>

  <ReactPlayer 
  url={`https://www.youtube.com/watch?v=${id}`}
  className="react-player"
  controls
  />
  <Typography color="#fff" varaint="h5" fontWeight='bold' p={2}>
    {title}
  </Typography>
  <Stack
  direction="row"
  justifyContent='space-between'
  sx={{
    color:"#fff"
  }}
  py={1}
  px={2}
  >
    <Link to={`/channel/${channelId}`}>
      <Typography variant={{sm:'subtitle1',md:'h6'}} color='#fff'>
        {channelTitle}
        <CheckCircle sx={{
          fontSize:'12px',
          color:'gray',
          ml:'5px'
        }} />
      </Typography>
    </Link>
<Stack direction='row' gap='10px' alignItems='center'>
  <Typography variant='body1' sx={{opacity:'0.7'}}>
{parseInt(viewCount).toLocaleString()} Views
  </Typography>
  <Typography variant='body1' sx={{opacity:'0.7'}}>
  {parseInt(likeCount).toLocaleString()} Likes

    </Typography>
</Stack>

  </Stack>

</Box>
  </Box>
  <Box
px={2}
py={{
  sm:1,xs:5
}}
justifyContent='center'
alignItems='center'

>
<Videos videos={videos}  direction="column"/>

</Box>
</Stack>

    </Box>
  )
}
