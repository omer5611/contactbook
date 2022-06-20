import React from "react";
import { addContact } from "../../features/contacts/contactSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import shortid from "shortid";

export default function AddContact() {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  function createContact(event) {
    event.preventDefault();
    const contact = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      id: shortid.generate(),
    };
    dispatch(addContact(contact));
    navigator("/");
  }

  return (
    <div>
      <div className="card border-0 shadow">
        <div className="card-header">Add a contact</div>
        <div className="card-body">
          <form onSubmit={(e) => createContact(e)}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter name"
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
              />
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter phone"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
