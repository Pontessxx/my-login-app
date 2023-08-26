import './App.css';
import Navbar from './Navbar';

function App() {
    console.log('App.js está sendo renderizado.'); // Adicione isso para verificar se o App.js está sendo chamado
    const handleNavbarButtonClick = () => {
      console.log('Botão do Navbar clicado no componente pai (App.js)');
    };
  
    return (
      <div className="App">
        <Navbar onClickButton={handleNavbarButtonClick} />
      </div>
    );
  }
  

export default App;
