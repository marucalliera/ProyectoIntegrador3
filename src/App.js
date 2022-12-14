
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './screens/Home/Home';
import Favoritos from './screens/favoritos/favoritos';
import detallePel from './screens/detallePel/detallePel';
import resultadoBusqueda from './screens/resultadoBusqueda/resultadoBusqueda';
import NotFound from './screens/NotFound/NotFound';
import Populares from './screens/Populares/Populares';
import CarteleraMovie from './screens/CarteleraMovie/CarteleraMovie';


function App() {
  return (
    <React.Fragment>
      <header>
        <Navbar/>
      </header>

      <main>
        <Switch>
          
          <Route path='/' exact={true} component={Home} />
          <Route path='/favoritos' exact={true} component={Favoritos} />
          <Route path='/populares' exact={true} component={Populares} />
          <Route path='/cartelera' exact={true} component={CarteleraMovie} />
          <Route path='/unapelicula/id/:id' component={detallePel}/>
          <Route path='/busqueda/:name' component={resultadoBusqueda}/>
          <Route path='' component={NotFound} />
          
        </Switch>


      </main>

      <footer>
        <Footer/>
      </footer>
    </React.Fragment>
      
  );
}

export default App;
