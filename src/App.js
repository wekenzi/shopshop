import './App.css';
import React , {useState} from 'react';
import  Header  from "./components/header/Header";
import  Head  from "./components/header/Head";
import  Home  from "./components/Home/Home";
import  Cart  from "./components/Cart/Cart";
import  ProductPage  from "./components/ProductPage/ProductPage";
import { Switch, Route } from "react-router-dom";

function App() {
  const [lang, changeLang] = useState('en');
  const [dir, changeDir] = useState('ltr');

  const clickBtn = () => {
    lang === 'en' ? changeLang('ar') : changeLang('en');
    lang === 'en' ? changeDir('rtl') : changeDir('ltr');
  }

  const helmetProps = { dir, lang };

  return (
    <div className="App">
      <Head {...helmetProps}/>
      <Header changeLang={clickBtn} lang={ lang === 'en' ? 'ع':'en'}/>

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/product/:id" exact>
          <ProductPage />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
