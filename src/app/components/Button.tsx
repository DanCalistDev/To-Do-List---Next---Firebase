import { AiOutlinePlus } from "react-icons/ai";

type ButtonProps = {
  isEditing?: boolean;
}

export const Button = ({isEditing}:ButtonProps) => {
  return (
    <div className=" flex justify-center">
    <button type="submit" className=" flex flex-row justify-center items-center gap-5 mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none text-gray-50 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    {!isEditing ? 'Add new task' : 'Edit task'}  <AiOutlinePlus />
    </button>
    </div>
  );
};
