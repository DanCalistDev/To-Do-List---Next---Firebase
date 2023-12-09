import { ITask } from "../types/tasks";
import { Task } from "./Task";

type ToDoListProps = {
  tasks: ITask[];
  updateTask: (task: ITask) => void;
  deleteTask: (taskId: string) => void;
};

export const ToDoList = ({ tasks, updateTask, deleteTask }: ToDoListProps) => {
  return (
    <>
      <article className="flex justify-center">
        <table className="w-2/3 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 mt-6">
          <thead className="text-xs uppercase bg-gray-100 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-s-lg">
                Task
              </th>
              <th
                scope="col"
                className="flex justify-evenly px-6 py-3 rounded-e-lg"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                updateTask={updateTask}
                deleteTask={deleteTask}
              />
            ))}
          </tbody>
        </table>
      </article>
    </>
  );
};
