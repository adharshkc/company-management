import { Box } from "@mui/material"
import QuotesApi from "../../../apis/QuotesApi"
import { useEffect, useState } from "react"
import { Typography } from "../atoms/typography/Typography"

const Quotes = () => {
  const [data, setData] = useState('Troubles are often the tools by which God fashions us for better things.')
  const [author, setAuthor] = useState('Henry')
  const getQuote = async()=>{

    
  }
  useEffect (()=>{
    getQuote()
  },[])

  return (
    <>
    <Box sx={{width:'420px', border:' #bdbdbd 1px solid', height:100, padding:1}}>
        <Typography variant="h6">{data}</Typography>
        <Typography  variant="h6" sx={{float: 'right', paddingRight: 4}} >- {author}</Typography>
    </Box>
    </>
  )
}

export default Quotes