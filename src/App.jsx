import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./features/User";
import { useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <div className="flex flex-col items-center p-12 gap-12">
      <div className="">
        <input
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          placeholder="username..."
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: nanoid(),
                name,
                userName,
              })
            );
          }}
        >
          Add user
        </button>
      </div>
      <div className="space-y-5 ">
        {userList.map((user, index) => {
          return (
            <div key={index} className="bg-white shadow-xl w-[300px] p-12">
              <h1>{user.name}</h1>
              <h1>{user.userName}</h1>
              <input
                placeholder="New userName..."
                onChange={(event) => {
                  setNewUsername(event.target.value);
                }}
              />
              <button
                onClick={() => {
                  dispatch(
                    updateUsername({ id: user.id, username: newUsername })
                  );
                }}
              >
                Update userName
              </button>
              <button
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}
              >
                Delete userName
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
