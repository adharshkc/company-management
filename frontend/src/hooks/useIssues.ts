/* eslint-disable @typescript-eslint/no-explicit-any */
import { useIssueStore } from "../zustand/IssueStore";
import useErrorStore from "../zustand/ErrorStore";
import { useCallback, useEffect, useState } from "react";

export const useIssue = () => {
  const { issues, fetchIssues, addIssue, updateIssue, removeIssue } =
    useIssueStore((state) => ({
      issues: state.issues,
      fetchIssues: state.fetchIssues,
      addIssue: state.addIssue,
      updateIssue: state.updateIssue,
      removeIssue: state.removeIssue,
    }));
  const [loading, setLoading] = useState(false);
  const { setError } = useErrorStore();
  useEffect(() => {
    setLoading(true);
    fetchIssues()
      .then(() => setLoading(false))
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [fetchIssues, setError]);
  const handleAddIssue = useCallback(
    async (issue: any, sprintId: any) => {
      try {
        setLoading(true);
        await addIssue(issue, sprintId);
      } catch (error: any) {
        setError(error?.message);
      } finally {
        setLoading(false);
      }
    },
    [addIssue, setError]
  );

  const handleUpdateIssue = useCallback(
    async (id: number, updatedIssue: any) => {
      try {
        setLoading(true);
        await updateIssue(id, updatedIssue);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [updateIssue, setError]
  );

  const handleRemoveIssue = useCallback(
    async (id: number) => {
      try {
        setLoading(true);
        await removeIssue(id);
      } catch (err: any) {
        setError(err?.message);
      } finally {
        setLoading(false);
      }
    },
    [removeIssue, setError]
  );

  return {
    issues,
    loading,
    handleAddIssue,
    handleUpdateIssue,
    handleRemoveIssue,
  };
};
