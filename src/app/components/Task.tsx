import React, { FormEventHandler,useState } from "react";
import { ITask } from "../types/tasks";
import {FiEdit, FiTrash2} from "react-icons/fi"
import { Modal } from "./Modal";
import { ModalDelete } from "./ModalDelet";

type TaskProps = {
  task: ITask
  updateTask: (task: ITask) => void;
  deleteTask: (taskId: string) => void;
}

export const Task = ({ task, updateTask, deleteTask }: TaskProps) => {

  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false)
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text)

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const updatedTask = {
      id: task.id,
      text: taskToEdit
    };
    await updateTask(updatedTask);
    setTaskToEdit("");
    setOpenModalEdit(false);
    setIsEditing(false);
  };
  
  
  const handleDeleteTask = async (id: string) => {
    await deleteTask(id);
    setOpenModalDelete(false)
}


  const handleChange = (e) => {
    setTaskToEdit(e.target.value)
  }

 const handleOpen = () => {
  setTaskToEdit(task.text); 
  setOpenModalEdit(true);
  setIsEditing(true); 
 };

 const handleCloseModal = () => {
  setOpenModalEdit(false);
};

const HandleModalDelete = () => {
  setOpenModalDelete(true)
}

  return (
      <tr key={task.id} className="bg-white dark:bg-gray-600">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {task.text}
        </th>
        <td className="flex justify-evenly px-6 py-4 cursor-pointer">
          <FiEdit onClick={handleOpen} className="text-green-500" size={15}/>
          <Modal modalOpen={openModalEdit}
                 handleCloseModal={handleCloseModal}
                 taskValue={taskToEdit}
                 isEditing={isEditing}
                 handleChange={handleChange}
                 handleSubmitNewTodo={handleSubmitEditTodo} />
          <FiTrash2 onClick={HandleModalDelete} className="text-red-500" size={15} />
          <ModalDelete openModalDelete={openModalDelete} handleDeleteTask={handleDeleteTask} task={task} setOpenModalDelete={setOpenModalDelete} />
        </td>
      </tr>
  );
};
