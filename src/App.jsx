import "./App.css";
import Myform from "./components/Form/ContactFrom";
function App() {
  const datobject = {};
  const parentData = (getData) => {
    const { name, email, password } = getData;
    console.log("i'm Papa:" + name, email, password);
  };
  return (
    <>
      <Myform getWay={parentData}></Myform>
    </>
  );
}

export default App;
