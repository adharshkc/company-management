import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addNewColumn } from "../services/EmployeeApi"
import { Column } from "types/types"
import { deleteColumn as columnDelete } from "../services/EmployeeApi";




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

const deleteColumn = async (column_id:number)=>{
    try {
        await columnDelete(column_id)
    } catch (error) {
        console.log(error)
    }
}

export const useDeleteColumns = ()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:deleteColumn,
        onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey:["startedSprint"]
            })
        }
    })
}