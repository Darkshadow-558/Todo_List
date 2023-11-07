"use client";
import React, { useState } from "react";

const page = () => {
  const [value, setValue] = useState("");
  const [mainTask, setmainTask] = useState([]);
  // const [isChecked, setIsChecked] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { value }]);
    setValue("");
  };

  const handleCheckboxChange = (index) => {
    const updatedTasks = [...mainTask];
    updatedTasks[index].isChecked = !updatedTasks[index].isChecked;
    setmainTask(updatedTasks);
  };

  let renderTask = <h2 className="text-slate-700 text-lg">Add task...</h2>;
  let renderCheckedTask = null;

  function DeleteHandler(index) {
    const deleteTasks = [...mainTask];
    deleteTasks.splice(index,1);
    setmainTask(deleteTasks)
  }

  if (mainTask.length > 0) {
    renderTask = mainTask
      .filter((t) => !t.isChecked)
      .map((t, index) => {
        return (
          <>
            <div
              key={index}
              className=" w-full flex gap-4 items-center justify-between"
            >
              <div className="flex gap-4 items-center">
                <input
                  type="checkbox"
                  checked={t.isChecked}
                  onChange={() => handleCheckboxChange(index)}
                  className="w-6 h-6 text-blue-600 bg-gray-100 outline-none"
                />
                <h2 className="text-slate-700 text-lg">{t.value}</h2>
              </div>
              <button
                className="w-fit h-fit bg-red-400 py-2 px-4 rounded-lg"
                onClick={()=>{DeleteHandler(index)}}
              >
                Delete
              </button>
            </div>
          </>
        );
      });

    renderCheckedTask = mainTask
      .filter((t) => t.isChecked)
      .map((t, index) => {
        return (
          <div
            key={index}
            className=" w-full flex gap-4 items-center justify-between"
          >
            <div className="flex gap-4 items-center">
              <input
                type="checkbox"
                checked={t.isChecked}
                onChange={() => handleCheckboxChange(index)}
                className="w-6 h-6 text-blue-600 bg-gray-100 outline-none"
              />
              <h2 className="text-slate-700 text-lg">{t.value}</h2>
            </div>

            <button
              className="w-fit h-fit bg-red-400 py-2 px-4 rounded-lg"
              onClick={()=>{DeleteHandler(index)}}
            >
              Delete
            </button>
          </div>
        );
      });
  }


  return (
    <div className="bg-slate-200 flex flex-col items-center  pt-36 w-screen h-screen">
      <div className="">
        <form
          className="w-fit h-20 flex justify-center items-center gap-5"
          onSubmit={SubmitHandler}
        >
          <h1 className="font-bold text-2xl text-slate-700">ADD TASK</h1>
          <input
            type="text"
            className=" bg-slate-100 h-10 text-slate-800 rounded-lg border-none outline-none p-4"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button
            type="submit"
            className="w-fit h-fit bg-slate-800 px-8 py-2 text-slate-200 rounded-lg"
          >
            ADD
          </button>
        </form>
      </div>
      <div className="w-4/5 h-full p-10 flex justify-center items-center gap-10">
        <div className="w-1/2 h-full bg-slate-300 rounded-lg py-5 px-10">
          <div className="flex justify-center items-center mb-6">
            <h1 className=" font-extrabold text-xl text-slate-800">
              TASK HAD TO BE COMPLETE
            </h1>
          </div>
          <ul>
            <li>{renderTask}</li>
          </ul>
        </div>
        <div className="w-1/2 h-full bg-slate-300 rounded-lg py-5 px-10">
          <div className="flex justify-center items-center mb-6">
            <h1 className=" font-extrabold text-xl text-slate-800">
              TASK HAD BEEN COMPLETED
            </h1>
          </div>
          <ul>
            <li>{renderCheckedTask}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
