import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from './Components/Layout';
import MainContainer from './Components/MainContainer';
import Wishlist from './Components/Wishlist';
import Cart from './Components/Cart';
import NotFound from './Components/NotFound';
import ProductPage from './Components/ProductPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={MainContainer} />
            <Route exact path="/products" component={MainContainer} />
            <Route path="/products/:productId" component={ProductPage} />
            <Route exact path="/wishlist" component={Wishlist} />
            <Route exact path="/cart" component={Cart} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
