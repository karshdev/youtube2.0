import { Stack } from '@mui/system'
import React from 'react'
import { categories } from '../utils/constants'

export default function Sidebar({selectedCategory,setselectedCategory}) {
   
  return (
 <Stack
  direction='row'
  flexDirection={{
    xs:'row',
    sm:'column'
  }}
  sx={{
    overflowY:'auto',
    height:{xs:'auto',sm:'95%'},
    '&::-webkit-scrollbar':{
      display: 'none'
    }
  }}
  >
{categories.map((category)=>(
<button
className='category-btn'
onClick={()=>setselectedCategory(category.name)}
style={{
    background:category.name===selectedCategory && '#FC1503',
    color:'white'
}}
key={category.name}
>
    <span style={{color:category.name===selectedCategory ?'white':'red',marginRight:'15px'}} >{category.icon}</span>
    <span style={{opacity:category.name===selectedCategory ?'1':'0.6',marginRight:'15px'}}>{category.name}</span>
</button>

))}

  </Stack>
  )
}
