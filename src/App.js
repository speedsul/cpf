import { Header } from './components/header';
import { Home } from './components/home';
import { Search } from './components/search';
import Rota from './route';

function App() {
  return (
    <>
      <Header />
      <Rota>
        <Home>
          <Search />
        </Home>
      </Rota>
    </>
  );
}

export default App;
