import axios from "axios";
import { QUOTE_API } from "../constants/constants";


const QuotesApi =async function(){
    const response = await axios.get(QUOTE_API)
    return response
}

export default QuotesApi