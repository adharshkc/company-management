/* eslint-disable @typescript-eslint/no-explicit-any */
import { Issue } from "types/types";
import { create } from "zustand";


// interface Issue extends BaseIssue{
//   columns:Column[]
// }

interface IssueState {
  issues: Issue;
  isModalIssue: boolean;
  isFetchIssue:boolean
  setIsModalIssue: (status: boolean) => void;
  setIssues: (issues: Issue) => void;
  setFetchIssue: (status: boolean) => void;
  
}

export const useIssueStore = create<IssueState>((set) => ({
  issues: {
    issue_id: undefined,
    name: "",
    status: "",
    description: "",
    assignee_id: undefined,
    sprint_id: undefined,
    assignee: {name:""},
    sprint: {name:""},
    comments: [],
    columns:[]
  },
  isModalIssue: false,
  isFetchIssue: false,
  setIsModalIssue: (status) => set({ isModalIssue: status }),
  setIssues: (issues) => set({ issues }),
  setFetchIssue: (status) => set({ isFetchIssue: status }),
}));
