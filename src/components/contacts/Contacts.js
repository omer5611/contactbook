import React from "react";

import {
  deleteContact,
  selectContact,
  unselectContact,
} from "../../features/contacts/contactSlice";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Contacts(props) {
  const dispatch = useDispatch();
  const item = props.contact;




  function handleChange(e) {
    if (e.target.checked) {
      dispatch(selectContact(item));
    } else {
      dispatch(unselectContact(item));
    }
  }

  function clickOnRow() {
    if (document.getElementById("checkbox-" + item.id).checked) {
      dispatch(unselectContact(item));
    } else {
      dispatch(selectContact(item));
    }
  }

  return (
    <tr key={item.id} onClick={clickOnRow}>
      <td>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id={`checkbox-${item.id}`}
            checked={item.selected}
            onChange={handleChange}
          />
          <label
            className="custom-control-label"
            htmlFor={`checkbox${item.id}`}
          />
        </div>
      </td>
      <td>
        <Avatar className="mr-2" name={item.name} size="45" round={true} />
      </td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>
        <Link to={`/contacts/edit/${item.id}`}>
          <span className="material-icons">edit</span>
        </Link>
        <Link to="" onClick={() => dispatch(deleteContact({ id: item.id }))}>
          <span className="material-icons">remove_circle</span>
        </Link>
      </td>
    </tr>
  );
}
