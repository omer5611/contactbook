import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { unselectAllContacts } from "../features/contacts/contactSlice";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  function handleAddContact() {
    dispatch(unselectAllContacts());
    navigator("/contacts/add");
  }

  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div>
        <Link className="navbar-brand" to="/">
          ContactBook
        </Link>
        <Link
          className="btn btn-light ml-auto"
          to="/contacts/add"
          onClick={handleAddContact}
        >
          Create Contact
        </Link>
      </div>
    </nav>
  );
}
