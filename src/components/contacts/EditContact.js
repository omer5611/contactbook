import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams ,useNavigate} from 'react-router-dom';
import { editContact } from '../../features/contacts/contactSlice';


export default function EditContact() {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    
    const [contact, setContact] = React.useState({
        name: '',
        email: '',
        phone: '',
    });
    const id = useParams().id;
    const contacts = useSelector((state) => state.contact.contacts);
    const contactValues = Object.values(contacts);
    const contactToEdit = contactValues.find((item) => item.id == id);
    
    React.useEffect(() => {
        setContact(contactToEdit);
    }
        , [contactToEdit]);
    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editContact(contact));
        navigator('/');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={contact.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={contact.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={contact.phone}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )

}
