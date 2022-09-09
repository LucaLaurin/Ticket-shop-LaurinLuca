import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";


const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting = "Buenas tardes gentee!!" />
    </div>
  )
} 

export default App;