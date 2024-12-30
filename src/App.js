import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import "./App.css";
import NotesListPage from "./pages/NotesListPage";
import Notepage from "./pages/Notepage";
import Header from "./compoents/Header";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
        <Routes>
          
        <Route path="/" exact Component={NotesListPage} />
        <Route path="/note/:noteId" Component={Notepage} />
        <Route path="/register" Component={Register} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
