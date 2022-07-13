import { Tablero } from "./components/Tablero";
import { TableroV2 } from "./components/TableroV2";
import gatito from './gatito.jpg';


function App() {
  return (
    <div>
      <TableroV2 image={gatito}/>
    </div>
  );
}

export default App;
