import React from "react";

const RecentSearch = ({ history, setHistory, setSelectHistory }) => {
  const clearHistory = () => {
    localStorage.clear();
    setHistory([]);
  };
  return (
    <>
      <div className=" col-span-1 bg-zinc-800 h-screen ">
        <h1 className=" text-xl text-white pt-4 justify-center text-center flex">
          <span>Recent Search </span>
          <button className=" cursor-pointer pl-5" onClick={clearHistory}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
          </button>
        </h1>
        <div className=" text-left overflow-auto">
          <ul>
            {history &&
              history.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setSelectHistory(item)}
                  className=" p-1 pl-5 cursor-pointer text-amber-100 hover:bg-zinc-700 hover:text-zinc-200 truncate"
                >
                  {item}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RecentSearch;
