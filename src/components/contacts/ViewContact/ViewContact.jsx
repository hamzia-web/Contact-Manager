import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import {ContactService} from "../../../services/ContactService";
import Spinner from "../../Spinner/Spinner";

let ViewContact = () => {

    // url param receive from url
    let {contactId} = useParams()

    let [state, setState] = useState({
        loading : false,
        contact: {},
        errorMessage: ''
    })

    // React Hook to receive data 
    useEffect(async () =>{
        try {
            setState({
                ...state, loading: true
            })
            let response = await ContactService.getContact(contactId)
            //contact =  response.data
            console.log(contact)
            setState({
                ...state,
                loading: false,
                contact: response.data
            })
        }
        catch (error) {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            })
        }
    }, [contactId])

    // Destructuring
    let {loading, contact, errorMessage} = state

    return(
        <React.Fragment>
            <section className="view-contact-intro p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                          <p className="h3 text-warning fw-bold">View Contact</p>
                          <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores at dignissimos exercitationem expedita illum laudantium libero nemo nobis optio, perspiciatis praesentium quam quas rem tempora ut velit voluptatem voluptates?</p>
                        </div>
                    </div>
                </div>
            </section>
            {/*<pre>{JSON.stringify(contact)}</pre>*/}
            <section className="view-contact">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src={contact.photo} className="img-fluid contact-img"/>
                        </div>
                        <div className="col-md-8">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-action">
                                    Name: <span className="fw-bold">{contact.name}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Mobile: <span className="fw-bold">{contact.mobile}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Email: <span className="fw-bold">{contact.email}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Company: <span className="fw-bold">{contact.company}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Title: <span className="fw-bold">{contact.title}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Group: <span className="fw-bold">{contact.group}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to={'/contacts/list'} className="btn btn-warning">Back</Link>
                        </div>
                    </div>
                </div>
            </section>
          </React.Fragment>
    )
}

export default ViewContact