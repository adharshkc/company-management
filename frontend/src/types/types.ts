export type LoginFormValues = {
  email: string;
  password: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type onSubmit = (param: any) => void | Promise<void> | object;

export type todo = {
  todo_id: number;
  todo: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
};

export interface Project {
  project_id?: number;
  name: string;
  priority: string;
  startDate: string | Date;
  description?: string | null;
  team_id: number | string;
  createdAt?: string;
  updatedAt?: string;
  team?:
    | {
        team_id?: number;
        name?: string | undefined;
      }
    | undefined;
}

export interface TableBodyProps {
  body: Project[];
  headers: string[];
}

export type HrDetails = {
  name: string;
  email: string;
  phone: string | number;
  startDate: Date | undefined;
};

export type EmployeeDetail = {
  name:string
  email:string
  phone:string|number
  team?:string
  startDate?: Date | undefined
  role:string
  joiningDate?:Date|undefined
  user_id?:number|null
  employee_id?:number|null
}

export type Otp = {
  email: string | null;
  otp: string;
};

export type NavbarLayout = {
  id: number;
  name: string;
  path: string;
};

export type AdminType = {
  adminId: number;
  dob: string;
  email: string;
  gender: string;
  name: string;
  password: string;
  phone: string;
  userId: number;
};

export type SideLayout = {
  id: number;
  name: string;
  path: string;
  darkIcon: string;
  lightIcon: string;
};


export type HrType = {
  name:string
  email:string
  phone:string
  hr_id:number
  user_id:number
}

export type TeamType = {
  name:string
  team_id?:number
}

export type Sprint = {
  name: string;
  startDate?: Date|string;
  endDate?: Date|string;
  status?: 'start'|'completed'|'pending';
  sprint_id: number;
  project_id?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  issues?:any[]
}