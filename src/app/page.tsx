"use client";

import { useEffect, useState } from "react";
import { AddTask } from "./components/AddTask";
import { ToDoList } from "./components/ToDoList";
import {
  doc,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import db from "./firebase/firebase";
import { ITask } from "./types/tasks";

export default function Home() {

  const [data, setData] = useState<ITask[]>([]);
  const tasksFirebase = collection(db, "Tarefas");


  useEffect(() => {
    const unsubscribe = onSnapshot(tasksFirebase, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as ITask));
      setData(data);
    });
    return () => unsubscribe();
  }, []);

  const addTodo = async (newTask: ITask) => {
    await addDoc(collection(db, "Tarefas"), newTask);
  };

  const update = async (taskToEdit: ITask) => {
    if (taskToEdit.id) {
      const docRef = doc(db, "Tarefas", taskToEdit.id);
      await updateDoc(docRef, taskToEdit);
    }
    return taskToEdit;
  };

  const remove = async (taskId: string) => {
    const docRef = doc(db, "Tarefas", taskId);
    await deleteDoc(docRef);
  };

  return (
    <>
      <main className="max-w-4xl mx-auto mt-4">
        <div className="flex flex-col text-center mt-6">
          <h1 className="text-2xl text-center font-bold">To-do List App</h1>
          <AddTask addTask={addTodo} />
        </div>
        <ToDoList tasks={data} updateTask={update} deleteTask={remove} />
      </main>
    </>
  );
}
