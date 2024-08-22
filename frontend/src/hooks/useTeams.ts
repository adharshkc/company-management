import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { allTeams } from "../services/HrApi"



export const useTeams = ()=>{
    const [teams, setTeams] = useState([])

    const getTeams = async()=>{
        try {
            const response = await allTeams()
            setTeams(response?.data?.teams)
        } catch (error) {
            toast.error("something went wrong")
        }
    }
    useEffect(()=>{
        getTeams()
    }, [])
    return {teams, getTeams, setTeams}
}