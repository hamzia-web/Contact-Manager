import React from 'react'
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import ContactList from "./components/contacts/ContactList/ContactList";
import AddContact from "./components/contacts/AddContact/AddContact";
import EditContact from "./components/contacts/EditContact/EditContact";
import ViewContact from "./components/contacts/ViewContact/ViewContact";
import Spinner from "./components/Spinner/Spinner";

let  App = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
        <Route path={'/contacts/list'} element={<ContactList/>}/>
        <Route path={'/contacts/add'} element={<AddContact/>}/>
        <Route path={'/contacts/view/:contactId'} element={<ViewContact/>}/>
        <Route path={'/contacts/edit/:contactId'} element={<EditContact/>}/>
        {/*<Route path='/contacts/add' component={AddContact}/>*/}
      </Routes>
    </React.Fragment>
  );
}

export default App;
