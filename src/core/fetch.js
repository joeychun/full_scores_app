import { useState } from 'react';
import { firestore } from '../firebase';
// import { addDoc, collection } from '@firebase/firestore';

function Fetch() {

  const [allDocs, setAllDocs] = useState([]);

  function fetchAll(e) {
    e.preventDefault();
    setAllDocs([]);

    firestore.collection("games")
      .get()
      .then((snapshot) => {
        if (snapshot.docs.length !== 0) {
          snapshot.docs.forEach((doc) => {
            setAllDocs((prev) => {
              return [...prev, doc.data()];
            });
          });
        }
      });

    console.log(allDocs);
  }

  return (
    <div>
      <h1> Fetching Data.. </h1>
      <button onClick={fetchAll}>Fetch All Docs</button>
    </div>
  );
}

export default Fetch;