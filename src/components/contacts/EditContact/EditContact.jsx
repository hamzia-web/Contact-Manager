import React, {useEffect, useState} from "react"
import {Link, useNavigate, useParams} from "react-router-dom";
import {ContactService} from "../../../services/ContactService";

let EditContact = () => {

    let {contactId} = useParams()
    let navigate = useNavigate()

    let [state, setState] = useState({
        loading: false,
        contact: {
            name: '',
            photo: '',
            mobile: '',
            email: '',
            company: '',
            title: '',
            groupId: '',
        },
        groups: [],
        errorMessage: ''
    })

    useEffect(async ()=>{
        try{
            setState({
                ...state,
                loading: true
            })
            let response = await ContactService.getContact(contactId)
            let groupResponse = await ContactService.getGroups()
            setState({
                ...state,
                loading: false,
                contact: response.data,
                groups: groupResponse.data
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

    let updateInput = (event) => {
        setState({
            ...state,
            contact: {
                ...state.contact,
                [event.target.name] : event.target.value
            },
        })
    }

    let {loading, contact, groups, errorMessage} = state;

    let submitForm = async (event) => {
       event.preventDefault()

        try{
            let response = await ContactService.updateContact(state.contact, contactId)
            if(response)
            {
                navigate('/', {replace: true})
            }
        }
        catch (error) {
            setState({
                ...state,
                errorMessage: error.message
            })
            navigate(`/contacts/edit/${contactId}`, {replace: false})
        }
    }

    return(
        <React.Fragment>
            {/*<pre>{JSON.stringify(contact)}</pre>*/}
            <section className="add-contact mt-2">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h4 text-primary fw-bold">Edit Contact</p>
                            <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque culpa debitis dicta eaque enim fugit id in ipsa minus necessitatibus nostrum, obcaecati omnis porro quaerat sint sit suscipit voluptas!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form className="form" onSubmit={submitForm}>
                                <div className="mb-2">
                                    <input name="name" value={contact.name} onChange={updateInput} required={true}
                                           type="text" className="form-control" placeholder="Name"/>
                                </div>
                                <div className="mb-2">
                                    <input name="photo" value={contact.photo} onChange={updateInput} required={true}
                                           type="text" className="form-control" placeholder="Photo Url"/>
                                </div>
                                <div className="mb-2">
                                    <input name="mobile" value={contact.mobile} onChange={updateInput} required={true}
                                           type="number" className="form-control" placeholder="Mobile"/>
                                </div>
                                <div className="mb-2">
                                    <input name="email" value={contact.email} onChange={updateInput} required={true}
                                           type="email" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="mb-2">
                                    <input name="company" value={contact.company} onChange={updateInput} required={true}
                                           type="text" className="form-control" placeholder="Company Name"/>
                                </div>
                                <div className="mb-2">
                                    <input name="title" value={contact.title} onChange={updateInput} required={true}
                                           type="text" className="form-control" placeholder="Title"/>
                                </div>
                                <div className="mb-2">
                                    <select name="groupId" value={contact.groupId} onChange={updateInput} required={true}
                                        className="form-control">
                                        <option value="">Select a group</option>
                                        {
                                            groups.length > 0 &&
                                                groups.map(group => {
                                                    return(
                                                        <option key={group.id} value={group.id}>{group.name}</option>
                                                    )
                                                })
                                        }
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <input type="submit" className="btn btn-primary btn-sm" value="Update"/>
                                    <Link to={'/contacts/list'} className="btn btn-dark btn-sm ms-2">Cancel</Link>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <img src={contact.photo} className="img-fluid contact-img"/>

                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default EditContact