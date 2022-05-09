import { useState } from "react";
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
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
      <Main />
    </>
  );
}

export default App;
