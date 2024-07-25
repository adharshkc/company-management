import AdminLoginTemplate from "@components/ui/templates/AdminLoginTemplate"
import { adminLogin } from "../services/AuthService"
import { LoginFormValues } from "types/types"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useErrorStore from "../zustand/ErrorStore"


const AdminLogin = () => {
const navigate = useNavigate()
const {error, setError, clearError} = useErrorStore()
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
      console.log(login.data.token)
      localStorage.setItem('adminToken', token)
      navigate('/admin')
    } catch (error) {
      const err = error as { response?: { data?: { message?: string } } };
      const errorMessage = err?.response?.data?.message
      setError(errorMessage)
      console.log(err?.response?.data?.message)
    }
    
  }
  return (
    <AdminLoginTemplate onSubmit = {handleLogin}/>
  )
}

export default AdminLogin