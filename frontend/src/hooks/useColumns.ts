import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addNewColumn } from "../services/EmployeeApi"
import { Column } from "types/types"




const addColumn =async (column:Omit<Column, 'column_id'>)=>{
    try {
        
        await addNewColumn(column)
    } catch (error) {
        console.log(error)
    }
}

export const useAddColumns = ()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:addColumn,
        onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey:["startedSprint"]
            })
        }
    })
}