import { Fragment, useEffect, useState } from "react";
// import Classes from "./App.module.css";
import axios from "axios";
// import axios from "axios";

import Styles from "../pages/TodoPage.module.css";

const TodoPage = () => {
  //state
  const [total, setTotal] = useState(null);

  const [createForm, setCreateForm] = useState({
    productname: "",
    sellername: "",
  });

  const [updateForm, setUpdateForm] = useState({
    _id: null,
    productname: "",
    sellername: "",
  });

  //use effect
  useEffect(() => {
    fetchTodos();
  }, []);

  //get request

  const fetchTodos = async () => {
    const res = await axios.get("/todos");

    setTotal(res.data.todos);
  };

  //update request handeler

  const updateCreateFormField = (e) => {
    const { name, value } = e.target;

    setCreateForm({
      ...createForm,
      [name]: value,
    });
  };

  //post the request

  const createTodo = async (e) => {
    e.preventDefault();

    const res = await axios.post("/todos", createForm);

    setTotal([...total, res.data.todo]);

    setCreateForm({
      productname: "",
      sellername: "",
    });
  };

  //delete the request

  const deleteTodo = async (_id) => {
    await axios.delete(`/todos/${_id}`);

    const newTodos = [...total].filter((todo) => {
      return todo._id !== _id;
    });

    setTotal(newTodos);
  };

  const handleUpdateFieldChange = (e) => {
    const { value, name } = e.target;

    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };

  const toggleUpdate = (todo) => {
    setUpdateForm({
      productname: todo.productname,
      sellername: todo.sellername,
      _id: todo._id,
    });
  };

  const updateTodo = async (e) => {
    e.preventDefault();

    const { productname, sellername } = updateForm;

    //send the update request
    const res = await axios.put(`/todos/${updateForm._id}`, {
      productname,
      sellername,
    });

    //update state
    const newTodos = [...total];
    const noteIndex = total.findIndex((todo) => {
      return todo._id === updateForm._id;
    });

    newTodos[noteIndex] = res.data.todo;

    setTotal(newTodos);

    //clear update form state
    setUpdateForm({
      _id: null,
      productname: "",
      sellername: "",
    });
  };

  return (
    <Fragment>
      <div className={Styles.container}>
        {updateForm._id && (
          <div className={Styles.updatetodo}>
            <h2>Update Todo</h2>
            <form onSubmit={updateTodo}>
              <input
                onChange={handleUpdateFieldChange}
                value={updateForm.productname}
                name="productname"
              />
              <input
                onChange={handleUpdateFieldChange}
                value={updateForm.sellername}
                name="sellername"
              />
              <button type="submit">Update Todo</button>
            </form>
          </div>
        )}

        {!updateForm._id && (
          <div className={Styles.createtodo}>
            <h2>Create Todo</h2>
            <form onSubmit={createTodo}>
              <input
                onChange={updateCreateFormField}
                value={createForm.productname}
                name="productname"
                placeholder="Enter your Name"
              />
              <input
                onChange={updateCreateFormField}
                value={createForm.sellername}
                name="sellername"
                placeholder="Enter your Task"
              />
              <button type="submit">Create Todo</button>
            </form>
          </div>
        )}
      </div>
      <div className={Styles.todos}>
        <h2>TODO 'S</h2>
        {total &&
          total.map((todo) => {
            return (
              <div className={Styles.tasks} key={todo._id}>
                <h3>
                  {todo.productname}
                  &nbsp;&nbsp;
                  <span id={Styles.seller}>{todo.sellername}</span>
                  &nbsp;&nbsp;
                </h3>
                <button id={Styles.delete} onClick={() => deleteTodo(todo._id)}>
                  Delete Todo
                </button>
                <button id={Styles.update} onClick={() => toggleUpdate(todo)}>
                  Update Todo
                </button>
              </div>
            );
          })}
      </div>
    </Fragment>
  );
};

export default TodoPage;
