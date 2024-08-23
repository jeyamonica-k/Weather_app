import Header from "./components/Header";
import InputComp from "./components/InputComp";


function App() {
  return(
    <div className="bg-purple-100 p-10 ">
      <div className="bg-blue-400 p-5 border rounded-lg shadow-lg shadow-gray-500 ">
        <Header></Header>
        <InputComp></InputComp>
      </div>
    </div>)
  }
  


export default App;
