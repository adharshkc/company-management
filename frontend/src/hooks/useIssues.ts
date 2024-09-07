import { useIssueStore } from "../zustand/IssueStore";
import { createIssue, getIssue } from "../services/EmployeeApi"
import useErrorStore from "../zustand/ErrorStore";


export const useIssue = ()=>{
    const {issues, loading, setFetchIssues, setLoading} = useIssueStore
    const { setError } = useErrorStore();
    const issueCreate = async(name:string, sprintId:number)=>{
        try {
            const response = await createIssue(name, sprintId)
            return response
        } catch (error) {
            setError("Something went wrong")
        }
    }

    const issueGet = async()=>{
        setLoading(true)
        try {
            const response = await getIssue()
            setFetchIssues(response.data.issues)
            if(response) {
                setLoading(false)
                setError(null)
            }
        } catch (error) {
            console.log(error)
            setError("Something went wrong")
        }
    }
    return {issueCreate, issueGet, issues, loading}
}
