import { useState } from "react";
import { MyComponent, AnotherComponent, a } from "./MyComponent";
import axios from "axios";

import "./App.css";

function App() {
  const [user, setUser] = useState({ name: "Saeed", age: 22 });

  return (
    <>
      <MyComponent user={user} />
      <div>
        This is my main component. My name is {user.name}. I am {user.age} years
        old<br></br> {a}
      </div>
    </>
  );
}

export default App;
