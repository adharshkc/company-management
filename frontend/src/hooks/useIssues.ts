/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useIssueStore } from "../zustand/IssueStore";
// import useErrorStore from "../zustand/ErrorStore";
// import { useCallback, useState } from "react";

// export const useIssue = () => {
//   const { issues, setIssues, addIssue, updateIssue, removeIssue } =
//     useIssueStore((state) => ({
//       issues: state.issues,
//       setIssues: state.setIssues,
//       addIssue: state.addIssue,
//       updateIssue: state.updateIssue,
//       removeIssue: state.removeIssue,
//     }));
//   const [loading, setLoading] = useState(false);
//   const { setError } = useErrorStore();
//   useEffect(() => {
//     setLoading(true);
//     fetchIssues()
//       .then(() => setLoading(false))
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, [fetchIssues, setError]);

//   const handleFetchIssues = useCallback(async(sprintId:number)=>{
//         setLoading(true)
//          fetchIssues(sprintId).then(()=>setLoading(false)).catch((err)=>{
//             setError(err.message)
//             setLoading(false)
//          })
    
//   }, [fetchIssues,setLoading, setError])
  // const handleAddIssue = useCallback(
  //   async (issue: any, sprintId: any) => {
  //     try {
  //       setLoading(true);
  //       await addIssue(issue, sprintId);
  //     } catch (error: any) {
  //       setError(error?.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   },
  //   [addIssue, setError]
  // );

  // const handleUpdateIssue = useCallback(
  //   async (id: number, updatedIssue: any) => {
  //     try {
  //       setLoading(true);
  //       await updateIssue(id, updatedIssue);
  //     } catch (err: any) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   },
  //   [updateIssue, setError]
  // );

  // const handleRemoveIssue = useCallback(
  //   async (id: number) => {
  //     try {
  //       setLoading(true);
  //       await removeIssue(id);
  //     } catch (err: any) {
  //       setError(err?.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   },
  //   [removeIssue, setError]
  // );

  // return {
  //   issues,
  //   loading,
    // handleFetchIssues,
//     setIssues,
//     handleAddIssue,
//     handleUpdateIssue,
//     handleRemoveIssue,
//   };
