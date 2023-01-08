import React, { useEffect, useState } from "react";
import "./popup.css";

export default function Example(props) {
  const [showPopup] = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const styleObject = {
    "z-index": "100",
  };
  return (
    <>
      {show && (
        <div className="modal-main">
          <div className="modal-body">
            <div className="modal-child"></div>
          </div>
        </div>
      )}
    </>
  );
}

/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */

/* <Modal show={false} onHide={handleClose} style={styleObject}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */
