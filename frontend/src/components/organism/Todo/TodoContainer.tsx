import { Box, Paper } from "@mui/material";
import { Typography } from "../../atoms/typography/Typography";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Input } from "../../atoms/input/Input";
import style from "../../styles/adminDashboardTemplate.module.scss";
import { Button } from "../../atoms/button/Button";
import { Delete, Done } from "@mui/icons-material";
import { createTodo, deleteTodo, getTodo, updateTodo } from "../../../services/CommonApi";
import { todo } from "types/types";
import toast,{Toaster} from "react-hot-toast";

const TodoContainer = () => {
  const [pendingTodos, setPendingTodos] = useState<todo[]>([]);
  const [completedTodo, setCompletedTodo] = useState<todo[]>([]);
  const [inputValue, setInputValue] = useState("");
  const makeTodo= async function(){
    try {
      if(inputValue.length===0)toast.error('Cannot add empty todo...')
      const response = await createTodo(inputValue)
      const pendingTodo = filterTodo(response.data?.todos);
      const doneTodo = updatedTodos(response.data?.todos);
      setPendingTodos(pendingTodo);
      setCompletedTodo(doneTodo);
      setInputValue('')
    } catch (error) {
      console.log(error)
    }
  }
  const getAllTodos = async () => {
    try {
      const response = await getTodo();
      const pendingTodo = filterTodo(response.data?.todos);
      const doneTodo = updatedTodos(response.data?.todos);
      setPendingTodos(pendingTodo);
      setCompletedTodo(doneTodo);
    } catch (error) {
      console.log(error);
    }
  };
  const filterTodo = function (data: todo[]) {
    return data.filter((todo: todo) => todo.status === "pending");
  };
  const updatedTodos = function (data: todo[]) {
    return data.filter((todo: todo) => todo.status === "done");
  };
  const onComplete = async (todoId: number) => {
    try {
      const response = await updateTodo(todoId);
      const doneTodo = updatedTodos(response.data?.todos);
      const pendingTodo = filterTodo(response.data?.todos);
      setCompletedTodo(doneTodo);
      setPendingTodos(pendingTodo);
    } catch (error) {
      console.log(error);
    }
  };
  const onDelete = async (todoId: number) =>{
    try {
      const response = await deleteTodo(todoId)
      const doneTodo = updatedTodos(response.data?.todos);
      const pendingTodo = filterTodo(response.data?.todos);
      setCompletedTodo(doneTodo);
      setPendingTodos(pendingTodo);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getAllTodos();
  }, []);
  return (
    <Box
      sx={{
        width: "420px",
        border: " #bdbdbd 1px solid",
        marginTop: "20px",
        borderRadius: "5px",
        height:"100px"
      }}
    >
      <Toaster position="top-right"/>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Typography sx={{ padding: 2 }} variant="body1">
          My Day
        </Typography>
        <Input
          inputValue={inputValue}
          fullWidth={false}
          setInputValue={setInputValue}
          placeHolder="Add todos here..."
          sx={{ width: "50%", marginTop: 1 }}
          size="small"
          type="text"
        />
        <Button
          className={style.addButton}
          sx={{
            marginTop: "13px",
            borderRadius: "2px solid black",
            color: "black",
            backgroundColor: "#EDE8F5",
          }}
          variant="outlined"
          onClick={makeTodo}
        >
          <AddIcon />
        </Button>
      </Box>
     { (pendingTodos.length !==0||completedTodo.length!==0 )&&
      <Box sx={{ height: "190px", overflowY: "auto", padding: 1 }}>
        {pendingTodos.map((todo, index) => {
          return (
            <Paper
              key={index}
              variant="outlined"
              elevation={5}
              sx={{
                height: 35,
                display: "flex",
                marginTop: 1,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={{ marginLeft: 2 }} variant="body1" align="center">
                {todo.todo}
              </Typography>
              <Box sx={{ paddingRight: 1 }}>
                <Done
                  fontSize="small"
                  sx={{ cursor: "pointer", marginRight: 3 }}
                  onClick={() => {
                    onComplete(todo.todo_id);
                  }}
                />
                <Delete fontSize="small" sx={{ cursor: "pointer" }} onClick={()=>onDelete(todo.todo_id)} />
              </Box>
            </Paper>
          );
        })}
        {completedTodo.map((todo) => {
          return (
            <Paper
              key={todo.todo_id}
              variant="outlined"
              elevation={5}
              sx={{
                height: 35,
                display: "flex",
                marginTop: 1,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={{ marginLeft: 2 }} variant="body1" align="center">
                <del>{todo.todo}</del>
              </Typography>
              <Box sx={{ paddingRight: 1 }}>
                <Delete fontSize="small" sx={{ cursor: "pointer" }} onClick={()=>onDelete(todo.todo_id)} />
              </Box>
            </Paper>
          );
        })}
      </Box>}
    </Box>
  );
};

export default TodoContainer;
