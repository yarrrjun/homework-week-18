const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

const request = window.indexedDB.open("budget", 1);

    request.onupgradeneeded = ({ target }) => {
        let db = target.result;
        const objectStore = db.createObjectStore("pending...", { autoincrement : true });
    };

    request.onsuccess = ({ target }) => {
        db = target.result;
        //test to see if the application is online before reading from database
        if (navigator.onLine) {
            scanData();
        }
    };
//error catch
request.onerror = function(event){

};

//need to save money spent record
const balance = "";

//function to check the database transaction variable store with objectStore and getAll -> 3 variable 
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"};
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;


//getAll.onsuccess
//if (getAll.request.length > 0)
//fetch post

app.post('/budget', (req, res) => {
    console.log(req.body);

//store clear

app.delete("/clearall", (req, res) => {
    db.budget.remove({}, (error, response) => {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log(response);
        res.send(response);
      }
    });
  });

  app.delete("/delete/:id", (req, res) => {
    db.budget.remove(
      {
        _id: mongojs.ObjectID(req.params.id)
      },
      (error, removed) => {
        if (error) {
          console.log(error);
          res.send(error);
        } else {
          console.log(removed);
          res.send(removed);
        }
      }
    );
  });
