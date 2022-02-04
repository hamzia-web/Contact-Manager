import axios from "axios";

export class ContactService {

    static serverUrl = `http://localhost:9000`;

    /*
       Get all Contacts
     */
    static getAllContacts(){
        let dataUrl = `${this.serverUrl}/contacts`;
        return axios.get(dataUrl)
    }

    /*
       Get a single Contact
     */
    static getContact(contactId){
        let dataUrl = `${this.serverUrl}/contacts/${contactId}`
        return axios.get(dataUrl);
    }

    /*
       Create Contact
     */
    static createContact(contact){
        let dataUrl = `${this.serverUrl}/contacts`;
        return axios.post(dataUrl, contact)
    }

    /*
       Update Contact
     */
    static updateContact(contact, contactId){
        let dataUrl = `${this.serverUrl}/contacts/${contactId}`;
        return axios.put(dataUrl, contact)
    }

    /*
       Delete Contact
     */
    static deleteContact(contactId){
        let dataUrl = `${this.serverUrl}/contacts/${contactId}`;
        return axios.delete(dataUrl)
    }

    /*
       Get all groups
     */
    static getGroups(){
        let dataUrl = `${this.serverUrl}/groups`;
        return axios.get(dataUrl)
    }
}