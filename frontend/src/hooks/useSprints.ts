import { useCallback } from "react"
import { useSprintStore } from "../zustand/SprintStore"
import { getSprints } from "../services/EmployeeApi"
import useErrorStore from "../zustand/ErrorStore"


export const useSprints = function(){
    const {sprints, loading, setFetchSprint, setLoading}= useSprintStore()
    const {setError, error} = useErrorStore()

    const fetchSprints = useCallback(async()=>{
        setLoading(true)
        try {
            const response = await getSprints()
            setFetchSprint(response?.data?.sprints)
            if(response){
                setLoading(false)
                setError(null)
            }

        } catch (error) {
            console.log(error)
            setLoading(false)
            setError("Something went wrong...")
        }
    },[setFetchSprint, setLoading, setError] )


    return {sprints, loading, error, fetchSprints}
}

