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


export interface Project {
    project_id?: number;
    name: string;
    priority: string;
    startDate: string|Date;
    description?: string | null;
    team_id: number|string;
    createdAt?: string;
    updatedAt?: string;
    team?:{
      team_id?:number,
      name?:string|undefined
    }|undefined
    
  }
  
  export interface TableBodyProps {
    body: Project[];
    headers: string[];
  }

  export type HrDetails={
    name:string
    email:string
    phone: string|number
    startDate:Date|undefined
  } 

  export type Otp={
    email:string|null
    otp:string
  }