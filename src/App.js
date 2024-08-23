import Header from "./components/Header";
import InputComp from "./components/InputComp";


function App() {
  return(
    <div className="bg-purple-300 p-20 ">
      <div className="bg-blue-400 p-10 border rounded-lg shadow-lg shadow-gray-500 ">
        <Header></Header>
        <InputComp></InputComp>
      </div>
    </div>)
  }
  


export default App;
