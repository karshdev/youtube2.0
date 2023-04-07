import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchFromAPI';
import ChannelCard from './ChannelCard';
import Videos from './Videos';

export default function ChannelDetail() {
  const[channelDetail,setchannelDetail]=useState(null)
  const[videos,setvideos]=useState([])
  const {id}=useParams();
 console.log(channelDetail,videos)
  useEffect(()=>{
fetchFromApi(`channels?part="snippet&id=${id}`)
.then((data)=>setchannelDetail(data?.items[0]))
fetchFromApi(`search?cahnnelId=${id}&partsnippet&order=date`)
.then((data)=>setvideos(data?.items))
  },[id])
  return (
<Box
minHeight='95vh'
>
<Box>
<div style={{ 
background: 'rgb(26,0,36)',
background: 'radial-gradient(circle, rgba(26,0,36,1) 0%, rgba(0,212,255,1) 36%, rgba(84,9,121,0.8470319634703196) 78%)',
  zIndex:10,
  height:'300px'
}}
/>
<ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
</Box>
<Box
display='flex'
p="2"
>
<Box
sx={{
  mr:{
    sm:'100px',
    md:'180px'
  }
}} />
<Videos  videos={videos}/>
</Box>

</Box>
  )
}
