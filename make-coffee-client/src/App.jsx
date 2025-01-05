import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/CoffeeCard";


function App() {
  const coffes=useLoaderData();
  console.log('coffes from app : ',coffes)
  return (
    <>
      <div>
      <h1 className="text-3xl font-bold">
      our all coffee count : {coffes.length}
      </h1>


      {
        coffes.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
      }
      
      </div>
    </>
  )
}

export default App
