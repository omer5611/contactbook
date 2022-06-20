import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteAllContacts,
  selectAllContacts,
  unselectAllContacts,
} from "../../features/contacts/contactSlice";

import Contacts from "./Contacts";

export default function Contact() {
  const contacts = useSelector((state) => state.contact.contacts);
  const contactsValues = Object.values(contacts);
  const selectedContact = useSelector((state) => state.contact.selectedContact);
  const dispatch = useDispatch();

  function handleCheckboxChange(e) {
    const { id } = e.target;
    if (e.target.checked) {
      dispatch(selectAllContacts(id));
    } else {
      dispatch(unselectAllContacts(id));
    }
  }

  function handleDeleteAllContacts() {
    dispatch(deleteAllContacts());
  }

  return (
    <div className="row">
      <div className="col-sm-1">
        {selectedContact.length > 1 && (
          <button onClick={handleDeleteAllContacts}>Delete all</button>
        )}
      </div>
      <div className="col-sm-10">
        <table className="table table-hover">
          <thead>
            <tr className="col-1">
              <th scope="col">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id={`checkbox-all`}
                  checked={
                    selectedContact.length >= contactsValues.length &&
                    selectedContact.length > 0
                  }
                  onChange={handleCheckboxChange}
                />
              </th>
              <th scope="col">Avatar</th>
              <th scope="col">Name</th>
              <th scope="col">email</th>
              <th scope="col">Phone</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            {contactsValues &&
              contactsValues.map((item, i) => (
                <Contacts key={i} contact={item} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
