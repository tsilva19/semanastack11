import React, {useState} from 'react';
import Header from './Header';
import  './global.css';
import Routes from './routes';


function App() {
  // const [contador, setContador] = useState(0);

  // function increment(){
  //   setContador(contador + 1)
  //   console.log(contador);
  // }
  return (
    <Routes/>
    // <div>
    //   <Header>
    //   Contador: {contador}
    // </Header>
    // <button onClick={increment}>Incrementar</button>
    // </div>
    
   );
}

export default App;
