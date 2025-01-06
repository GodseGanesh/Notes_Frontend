import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import "./App.css";
import NotesListPage from "./pages/NotesListPage";
import Notepage from "./pages/Notepage";
import Header from "./compoents/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
    <Router>
      <div className="container dark">
       
        <Routes>
          
        <Route path="/" exact Component={NotesListPage} />
        <Route path="/note/:noteId" Component={Notepage} />
        <Route path="/register" Component={Register} />
        <Route path="/login" Component={Login} />
        </Routes>
       
      </div>
    </Router>
    </UserContextProvider>
  );
}

export default App;
