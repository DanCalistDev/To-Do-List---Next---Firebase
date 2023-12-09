import { InputHTMLAttributes } from "react";
import { Button } from "./Button"


type ModalProps = {
  modalOpen: boolean;
  handleCloseModal: () => void;
  taskValue: string;
  handleChange: (e: InputHTMLAttributes<HTMLInputElement>) => void;
  handleSubmitNewTodo: any
  isEditing?:boolean;
}

export const Modal = ({ handleCloseModal, modalOpen, taskValue, handleChange, handleSubmitNewTodo, isEditing }: ModalProps) => {
  return(
    modalOpen && (
      <div
      id="crud-modal"
      aria-hidden="true"
      className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full `}
      style={{ backdropFilter: "blur(2px)" }} 
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {!isEditing ? 'Create New Task' : 'Edit Task'}
            </h3>
            <button
              type="button"
              onClick={handleCloseModal}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <form onSubmit={handleSubmitNewTodo} className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Task
                </label>
                <input
                  type="text"
                  value={taskValue}
                  onChange={handleChange}
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                />
              </div>
            </div>
            <Button isEditing={isEditing} />
          </form>
        </div>
      </div>
    </div>
    )
  )
}
