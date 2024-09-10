/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import {
  getIssue as fetchIssuesAPI,
  createIssue as createIssueAPI,
  updateIssue as updatedIssueAPI,
  deleteIssue as deleteIssueAPI,
} from "../services/EmployeeApi";

interface Issue {
  issue_id?: number;
  name: string;
  status: string;
  description?: string;
  assignee_id: number;
  sprint_id: number;
  assignee?: any;
  sprint?: any;
  comments?: any[];
}
interface IssueState {
  issues: Issue[];
  fetchIssues: () => Promise<void>;
  addIssue: (issue: Issue, sprintId: number) => Promise<void>;
  updateIssue: (issueId: number, updatedIssue: Issue) => Promise<void>;
  removeIssue: (issueId: number) => Promise<void>;
}

export const useIssueStore = create<IssueState>((set, get) => ({
  issues: [],
  fetchIssues: async () => {
    try {
      const response = await fetchIssuesAPI();
      set({ issues: response.data });
    } catch (error) {
      console.error("Failed to fetch issues", error);
    }
  },
  addIssue: async (issue, sprintId) => {
    set((state) => ({ issues: [...state.issues, issue] }));

    try {
      const response = await createIssueAPI(issue.name, sprintId);
      set((state) => ({
        issues: state.issues.map((i) =>
          i === issue ? response.data.issue : i
        ),
      }));
    } catch (error) {
      console.error("Failed to create issue", error);
      set((state) => ({
        issues: state.issues.filter((i) => i !== issue),
      }));
    }
  },
  updateIssue: async (issueId, updatedIssue) => {
    set((state) => ({
      issues: state.issues.map((issue) =>
        issue.issue_id === issueId ? { ...issue, ...updatedIssue } : issue
      ),
    }));
    try {
      const response = await updatedIssueAPI(issueId, updatedIssue);
      set((state) => ({
        issues: state.issues.map((issue) =>
          issue.issue_id === issueId ? response.data : issue
        ),
      }));
    } catch (error) {
      await get().fetchIssues();
    }
  },
  removeIssue: async (issueId) => {
    const previousIssues = get().issues;
    set((state) => ({
      issues: state.issues.filter((issue) => issue.issue_id !== issueId),
    }));
    try {
      await deleteIssueAPI(issueId);
    } catch (error) {
      console.error("Failed to delete issue", error);
      set({ issues: previousIssues });
    }
  },
}));
