import AdminLoginTemplate from "@components/templates/admin/LoginTemplate"
import { adminLogin } from "../../services/AdminApi"
import { LoginFormValues } from "types/types"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useErrorStore from "../../zustand/ErrorStore"
import useAdminStore from "../../zustand/AdminStore"
import { AdminDetails } from "../../services/AdminApi"


const AdminLogin: React.FC = () => {
const navigate = useNavigate()
const { setError} = useErrorStore()
const {setAdmin} = useAdminStore()
const token = localStorage.getItem('adminToken')
const adminValid = async()=>{
   try {
    const response= await AdminDetails()
    console.log(response)
    if(response.status==200){
      navigate('/admin/')
    }
  } catch (error) {
    console.log(error)
  }
}
  useEffect(()=>{
    
    adminValid()
  },[token])


  const handleLogin = async({email, password}:LoginFormValues)=>{
    try {
      const login = await adminLogin({email, password})
      const token = login.data?.accessToken
      // const refreshToken = login.data?.refreshToken;
      const adminDetails = login?.data?.admin
      console.log(adminDetails)
      setAdmin(adminDetails)
      localStorage.setItem('adminToken', token)
      localStorage.setItem('commonToken', token)
      // localStorage.setItem('adminRefreshToken',refreshToken )
      navigate('/admin/')
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