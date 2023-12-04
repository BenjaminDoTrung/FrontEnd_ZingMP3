import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Nav from "./component/Nav";
import Login from "./pages/Login";
import {Provider} from "react-redux";
import {store} from "./redux/Store";
import FormHome from "./pages/FormHome";

function App() {
  return (
<Provider store={store}>
  <BrowserRouter>
      <Routes>
          <Route path={'/'} element={<FormHome></FormHome>}>

        </Route>
      </Routes>
  </BrowserRouter>
</Provider>

  );
}

export default App;
