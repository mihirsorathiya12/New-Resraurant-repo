import React, { useContext } from "react";
import MyContext from "./MyContext"; // MyContext ko import karna hoga

const MyComponent = () => {
  // useContext ka use karke data ko access karo
  const { user } = useContext(MyContext);

  return (
    <div>
      <h1>Hello, {user.name}</h1>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default MyComponent;
