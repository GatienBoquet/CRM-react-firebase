import React, { Component } from "react";
import "./App.css";
import Grid from "./Grid";
import Form from "./Form";
import firebase from "../FireBase";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }

  updateData() {
    const db = firebase.firestore();

    db.collection("contacts")
      .get()
      .then((snapshot) => {
        let contacts = [];
        snapshot.forEach((doc) => {
          let contact = Object.assign({ id: doc.id }, doc.data());
          contacts.push(contact);
        });
        this.setState({
          contacts: contacts,
        });
      })
      .catch((err) => {
        console.log("Erreur !", err);
      });
  }

  deleteData(docID) {
    const db = firebase.firestore();

    db.collection("contacts").doc(docID).delete();
    this.updateData();
  }

  modifyData = (docID, data) => {
    console.log("modifyData : Demande de modification reçu ! : docID" + docID + " et la data :" + data);
    const db = firebase.firestore();

    var collectionActuel = db.collection("contacts").doc(docID);
    var index = Object.keys(data)[0]
    var value = Object.values(data)[0];
    
    console.log(index);
    console.log(value);
    this.updateData();

    // document updated
    return collectionActuel
      .update({
        [index]: value,
      })
      .then(function () {
        console.log("Document successfully updated!");
        //k.updateData();
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
      
  }

  componentWillMount() {
    this.updateData();
  }

  render() {
    return (
      <div>
        <div>
          <div className="navbar-fixed">
            <nav className="blue lighten-2">
              <div className="nav-wrapper">
                <a href="/" className="brand-logo center">
                  Contacts
                </a>
              </div>
            </nav>
          </div>
        </div>
        <div>
          <Form updateData={this.updateData.bind(this)} />
          <Grid
            items={this.state.contacts}
            deleteData={this.deleteData.bind(this)}
            modifyData={this.modifyData.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
