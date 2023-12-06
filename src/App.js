import './App.css';
import {Route, Routes} from "react-router-dom";
import FormHome from "./component/FormHome";
import Login from "./component/Login";
import {ToastContainer} from "react-toastify";


function App() {
    return (<>
            <ToastContainer />
            <Routes>
                <Route path={''} element={<FormHome></FormHome>}>
                    <Route path={'/login'} element={<Login></Login>}></Route>
                </Route>
            </Routes>

        </>
    );
}

export default App;
