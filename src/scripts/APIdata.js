// fetch post our data form the event lsitener that is  validated to the data base and get data from database

const API = {
  saveToList(newContact) {
    console.log("fetch")
    return fetch("http://localhost:8088/contact-list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newContact)
    })//.then.....our dom creation
  },
  getFromList() {
    return fetch("http://localhost:8088/contact-list")
      .then(response => response.json())
  }
}



export default API



