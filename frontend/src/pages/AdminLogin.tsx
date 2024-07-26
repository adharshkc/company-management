import AdminLoginTemplate from "@components/ui/templates/AdminLoginTemplate"
import { adminLogin } from "../services/AdminAuth"
import { LoginFormValues } from "types/types"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useErrorStore from "../zustand/ErrorStore"
import useAdminStore from "../zustand/AdminStore"


const AdminLogin: React.FC = () => {
const navigate = useNavigate()
const { setError} = useErrorStore()
const {setAdmin} = useAdminStore()
  useEffect(()=>{
    const token = localStorage.getItem('adminToken');
    if(token){
      navigate('/admin')
    }
  },[])


  const handleLogin = async({email, password}:LoginFormValues)=>{
    try {
      const login = await adminLogin({email, password})
      const token = login.data?.token
      const adminDetails = login?.data?.admin
      console.log(adminDetails)
      setAdmin(adminDetails)
      localStorage.setItem('adminToken', token)
      navigate('/admin')
    } catch (error) {
      const err = error as { response?: { data?: { message?: string } } };
      const errorMessage = err?.response?.data?.message
      if(errorMessage){
        setError(errorMessage)

      }else{
        setError("something went wrong")
      }
    }
    
  }
  return (
    <AdminLoginTemplate onSubmit = {handleLogin}/>
  )
}

export default AdminLogin