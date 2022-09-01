
import { Button, Modal } from "react-bootstrap"
import React, { useState, useEffect } from 'react';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [skills, setSkills] = useState([
    {
      name: "",
      url: ""
    }
  ])

  useEffect(() => {
    fetch("http://localhost:3001")
    .then(res => res.json())
    .then(jsonRes => setSkills(jsonRes))
  }, [])

  useEffect(() => {
    console.log(skills)
  }, [skills])

  return (
    <div className='App'>
    <h4>Click the image</h4>
    <div style={{display:"flex", flexDirection:"column", width:"20%"}}>
      {skills.map(skill => {
        return(
          <img key={skill.name} src={skill.url} alt={skill.name} name={skill.name} />
        )
      })}

      </div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default App;
