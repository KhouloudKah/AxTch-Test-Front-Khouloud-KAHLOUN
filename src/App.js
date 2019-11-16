import React from 'react';
import './App.css';
import HomePage from './HomePage/HomePage.jsx';
import ProductsListComponent from './ProductsListPage/ProductsListComponent.jsx';
import TopicsAndInspirationComponent from './TopicsandInspirationPage/TopicsAndInspirationComponent/TopicsAndInspirationComponent.jsx';
import store from "./Store/Store";
import { Route , HashRouter , Switch} from 'react-router-dom'
import { Provider } from 'react-redux';
import ProductsListByCategoryComponent from "./ProductsListPage/ProductsListByCategoryComponent";
function App() {
  return (

    <div className="App">
        <Provider store={store}>

                <HashRouter>
                    <div className="App">
                        <Switch>
                            <Route exact={true} path="/" component={HomePage} />
                            <Route exact={true} path="/product" component={ProductsListComponent} />
                            <Route exact={true} path="/TopicsAndInspiration" component={TopicsAndInspirationComponent} />
                            <Route exact={true} path="/products_by_category" component={ProductsListByCategoryComponent} />


                        </Switch>
                    </div>
                </HashRouter>
        </Provider>

    </div>
  );
}

export default App;
