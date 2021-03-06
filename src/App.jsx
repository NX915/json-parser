import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

import { Info } from './components/Info';

function App() {
  const [state, setState] = useState({
    data: {},
    loading: true,
  });

  // Use data from server
  const getAllData = () => {
    Promise.all([
      axios.get('/api'),
    ])
      .then(all => {

        return setState(prev => (
          {
            ...prev,
            data: all[0].data,
            loading: false,
            error: null,
          }))
      })
      .catch(e => setState(prev => (
        {
          ...prev,
          error: e.response,
        }
      )));
  };

  //trigger inital data fetch
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <main className='page-content'>
      <h1>Seamless MD JSON Parser</h1>
      {!state.loading &&
        <Info
          data={state.data}
        />
      }
      {state.error &&
        <p>Error {state.error.status}: {state.error.statusText}</p>
      }
    </main>
  );
}

export default App;