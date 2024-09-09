import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);
  return (
    <div
      className={` duration-300 ${isSelected ? "" : ""}`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex space-x-4 px-8 py-3 hover:bg-slate-900 hover:rounded-full duration-300 cursor-pointer">
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img
              src={`https://avatar.iran.liara.run/username?username=${user.fullname}`}
            />
          </div>
        </div>
        <div>
          <h1 className=" font-bold text-xl">{user.fullname}</h1>
          {/* <span>{user.email}</span> */}
        </div>
      </div>
    </div>
  );
}

export default User;
