import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#app");

const Window = ({ show, person, onClose, item }) => {
  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      className={"modal"}
      overlayClassName={"overlay"}
    >
      <div className={"close-btn-ctn"}>
        <h1 style={{ flex: "1 90%" }}>{item.title}</h1>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
      </div>
      <div>
        <h2>Candidate name</h2>
        <p>{item.person}</p>
        <h2>Role</h2>
        <p>{item.content}</p>
        <h2>Status</h2>
        <p>
          {item.icon}{" "}
          {`${item.status.charAt(0).toUpperCase()}${item.status.slice(1)}`}
        </p>
      </div>
    </Modal>
  );
};

export default Window;
