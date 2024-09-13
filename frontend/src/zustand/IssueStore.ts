/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

interface Issue {
  issue_id?: number;
  name: string;
  status: string;
  description?: string;
  assignee_id?: number;
  sprint_id?: number;
  assignee?: any;
  sprint?: any;
  comments?: any[];
}
interface IssueState {
  issues: Issue;
  isModalIssue:boolean
  setIsModalIssue:(status:boolean)=>void
  setIssues: (issues:Issue) => void
}

export const useIssueStore = create<IssueState>((set) => ({
  issues: {issue_id:undefined, name:"", status:"", description:"", assignee_id:undefined, sprint_id:undefined,assignee:"", sprint:"", comments:[] },
  isModalIssue:false,
  setIsModalIssue:(status)=>set({isModalIssue:status}),
  setIssues: (issues) => set({ issues }),
}));
