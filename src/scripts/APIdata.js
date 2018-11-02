// fetch post our data form the event lsitener that is  validated to the data base and get data from database
import domInjector from "./domInjection"

const API = {
  saveToList(newContact) {
    console.log("fetch")
    return fetch("http://localhost:8088/contact-list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newContact)
    }).then(data => data.json())
    .then(contacts => domInjector.userCreate(contacts))
  },
  getFromList() {
    return fetch("http://localhost:8088/contact-list")
      .then(response => response.json())
      .then(contacts => domInjector.databaseCreate(contacts))
  }
}



export default API



