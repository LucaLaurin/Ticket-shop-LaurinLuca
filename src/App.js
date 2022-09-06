import NavBar from "./Components/ItemListContainer/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";


const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting = "Buenas tardes gentee!!" />
    </div>
  )
} 

export default App;