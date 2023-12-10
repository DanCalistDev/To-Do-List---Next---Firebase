'use client'

import { AiOutlinePlus } from "react-icons/ai";
import { Modal } from "./Modal";
import { FormEventHandler, useState } from "react";
import { ITask } from "../types/tasks";


export const AddTask = ({addTask}: {addTask: (task: ITask) => void}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");

  const handleSubmitNewTodo : FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const newTodo : ITask= {
      text: newTaskValue
    };
    addTask(newTodo);
    setNewTaskValue("");
    setModalOpen(false);
  };
  

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskValue(e.target.value)
  }

  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={handleOpen}
          className="flex flex-row justify-center items-center gap-5 mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none text-gray-50 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add new task <AiOutlinePlus />
        </button>
      </div>
      <Modal
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
        taskValue={newTaskValue}
        handleChange={handleChange}
        handleSubmitNewTodo={handleSubmitNewTodo}
      />
    </>
  );
};
