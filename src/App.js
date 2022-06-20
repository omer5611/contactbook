import React from "react";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Contact from "./components/contacts/Contact";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Routes>
                <Route exact path="/" element={<Contact />} />
                <Route exact path="/contacts/add" element={<AddContact />} />
                <Route path="/contacts/edit/:id" element={<EditContact />} />
                <Route exact path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
