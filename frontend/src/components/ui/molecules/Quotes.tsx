import { Box } from "@mui/material"
import QuotesApi from "../../../apis/QuotesApi"
import { useEffect, useState } from "react"
import { Typography } from "../atoms/typography/Typography"
import style from "../../styles/adminDashboardTemplate.module.scss"
import quoteIcon from "../../../assets/icons/quote-left-solid 1.svg"

const Quotes = () => {
  const [data, setData] = useState('Troubles are oftendfsdf sfsdaf  sdgsdfs  sdffs  the vbtools by which God fashions us for better things.')
  const [author, setAuthor] = useState('Henry GoodManly')
  const getQuote = async()=>{

    
  }
  useEffect (()=>{
    getQuote()
  },[])

  return (
    <>
    <Box sx={{width:'420px', height:'120px', boxSizing:'border-box', border:' #bdbdbd 1px solid', borderRadius:'5px', padding:1}}>
      <Box className={style.quoteBody}>

        {/* <img src={quoteIcon} alt="" /> */}
        <Typography variant="body1" className={style.quoteData}><img src={quoteIcon} alt="" />{data}</Typography>
      </Box>
      <Box>
        <Typography  variant="body1" sx={{float: 'right', paddingRight: 8, marginBottom: 3}}  >- {author}</Typography>

      </Box>
    </Box>
    </>
  )
}

export default Quotes