export type LoginFormValues ={
    email: string,
    password: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type onSubmit = (param: any)=>void|Promise<void>|object

export type todo = {
    todo_id: number
    todo: string
    status: string
    createdAt: Date
    updatedAt: Date
    userId: number
}

export type Project ={
    name: string
    priority: string
    team: string
    dueDate: Date|string|number
}