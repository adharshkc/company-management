export type LoginFormValues ={
    email: string,
    password: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type onSubmit = (param: any)=>void|Promise<void>|object