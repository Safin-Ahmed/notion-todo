import { useState } from "react";
import Header from "./components/Layout/Header";
import NameForm from "./components/NameForm";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [username, setUsername] = useState("Safin Ahmed");
  const showFormHandler = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      {isClicked && (
        <NameForm onSubmit={setUsername} onClick={showFormHandler} />
      )}
      <Header username={username} onClick={showFormHandler} />
    </>
  );
}

export default App;
