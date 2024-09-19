import './App.css';
import Header from './components/header/header';
import Soccer from './pages/soccer/soccer';
// import Test from './pages/test/test';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { firestore } from './firebase';

function App() {

  const [allDocs, setAllDocs] = useState([]);
  useEffect(() => {
    let unmounted = false; // May be unnecessary
    fetchAll();
    const interval = setInterval(() => {
      fetchAll();
    }, 5000);

    return () => {
      unmounted = true; // May be unnecessary
      clearInterval(interval)
    };
  }, []);
  console.log(allDocs);

  async function fetchAll() {
    await firestore.collection("games")
      .get()
      .then((snapshot) => {
        if (snapshot.docs.length !== 0) {
          setAllDocs([]);
          snapshot.docs.forEach((doc) => {
            setAllDocs((prev) => {
              return [...prev, { ...doc.data(), id: doc.id }];
            });
          });
        }
      });
  }

  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundColor: "black" }}>
        <Header />
        <Routes>
          {/* <Route
            path='/'
            exact element={<Navigate to='/soccer' />}
          /> */}
          <Route path='/' element={<Navigate to='/soccer' />} />
          <Route path='/soccer' exact element={<Soccer games={allDocs} />} />
          <Route path='/soccer/:id' exact element={<Soccer games={allDocs} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
