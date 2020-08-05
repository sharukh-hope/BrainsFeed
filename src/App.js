import React, { useState, useEffect } from 'react';
import CompanyFrame from './Components/CompanyFrame';

import data from './front-end_data';
import { Modal, Button } from 'react-bootstrap';
import ModalWindow from './Components/ModalWindow';
import './App.css';

function App() {
  const [currentCompany, setCurrentCompany] = useState(undefined);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setCurrentCompany(undefined);
  };

  const Data = data.map((comp) => {
    return (
      <CompanyFrame
        changeCurentCompany={setCurrentCompany}
        details={comp}
      />
    );
  });

  useEffect(() => {
    if (currentCompany) {
      setShow(true);
    }
  }, [currentCompany]);
  return (
    <div className='App'>
      {Data}
      <Modal size="xl" centered show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton /> */}
        <Modal.Body>
          {currentCompany && (
            <>
              <ModalWindow currentCompany={currentCompany} />
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
