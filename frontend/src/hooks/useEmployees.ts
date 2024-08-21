import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { allEmployees } from "../services/HrApi"


export const useEmployees = ()=>{
    const [employees, setEmployees] = useState([])

    const getEmployees = async function(){
        try {
            const response = await allEmployees()
            setEmployees(response.data.employees)
        } catch (error) {
            toast.error(("something went wrong"));
            
        }
    }
    useEffect(()=>{
        getEmployees()
    }, [])
    return {employees, getEmployees, setEmployees}
}

