import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { Typography } from "../atoms/typography/Typography"
import style from "../../styles/adminDashboardTemplate.module.scss"
import quoteIcon from "../../../assets/icons/quote-left-solid 1.svg"
import { getQuote } from "../../../services/CommonApi"

const Quotes = () => {
  const [data, setData] = useState('')
  const quote = async()=>{
    const response = await getQuote()
    console.log(response.data.content)
    setData(response.data?.content)
    
  }
  useEffect (()=>{
    quote()
  },[])

  return (
    <>
    <Box sx={{width:'420px', height:'auto', boxSizing:'border-box', border:' #bdbdbd 1px solid', borderRadius:'5px', padding:1}}>
      <Box className={style.quoteBody}>

        {/* <img src={quoteIcon} alt="" /> */}
        <Typography variant="body1" className={style.quoteData}><img src={quoteIcon} alt="" />{data}</Typography>
      </Box>
      <Box>
        {/* <Typography  variant="body1" sx={{float: 'right', paddingRight: 8, marginBottom: 3}}  >- {author}</Typography> */}

      </Box>
    </Box>
    </>
  )
}

export default Quotes