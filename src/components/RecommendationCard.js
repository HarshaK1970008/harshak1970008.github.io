import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function RecommendationCard(props) {
  const [shouldShow, setShow] = useState(false);
  const modalClose = () => setShow(false);
  const modalShow = () => setShow(true);

  const { name, designation, company, message } = props.recommendation;

  let string = message;

  if (message.length < 35) {
    string = message;
  } else {
    string = message.slice(0, 20) + "....";
  }

  return (
    <div className="col-12 col-md-4">
      <div className="card shadow h-100">
        <a onClick={modalShow}>
          <div className="card-body">
            <h4 className="card-text">{string}</h4>
            <p className="card-text text-secondary mb-0">{name}</p>
            <p className="card-text text-secondary">
              {designation} at {company}
            </p>
          </div>
        </a>
      </div>

      <Modal show={shouldShow} onHide={modalClose}>
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          <h4 className="card-text" style={{ textAlign: "center" }}>
            {message}
          </h4>
          <p
            className="card-text text-secondary mb-0"
            style={{ textAlign: "center" }}
          >
            {name}
          </p>
          <p
            className="card-text text-secondary"
            style={{ textAlign: "center" }}
          >
            {designation} at {company}
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default RecommendationCard;
