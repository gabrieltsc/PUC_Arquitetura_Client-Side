import './App.css';
import { Contador } from './components/Contador';
/*import { AloMundo } from './components/AloMundo';
import { AloMundoColorido } from './components/AloMundoColorido';
import { MeuBotao } from './components/MeuBotao';
import { MeuBotao2 } from './components/MeuBotao2';*/

function App() {
  /*const handleClick = (event) =>{
      alert(`Clicou ${event.currentTarget.id}`);
    }*/
  
  return (
    /*<>
      <AloMundo />
      <AloMundoColorido nome="Gabriel Terry" cor="red" />
    </>

    <div id='divApp' onClick={handleClick}>
      <MeuBotao />
      <MeuBotao2 />
    </div>*/

    <>
      <Contador />
    </>
  );
}

export default App;
