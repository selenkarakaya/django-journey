import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { FaPlus } from "react-icons/fa";
import NoteItem from "../components/NoteItem";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    width: "600px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "relative",
  },
};

function SingleTicketItem() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Open/close modal
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  return (
    <>
      <div className="ticket-page">
        <header className="ticket-header">
          <BackButton />
          <h2>
            Ticket ID: ticket._id
            <span className="ticket.status">ticket.status</span>
          </h2>
          <h3>Date Submitted:</h3>
          <h3>Product: </h3>
          <hr />
          <div className="ticket-desc">
            <h3>Description of Issue</h3>
            <p>ticket.description</p>
            <p>ticket.date</p>
          </div>
        </header>
        {/* {ticket.status !== "closed" && (
          <button onClick={openModal} className="btn">
            <FaPlus /> Add Note
          </button>
        )} */}
        <h2>Notes</h2>
        {/* {notes
          ? notes.map((note) => (
              <NoteItem key={note._id} note={note} ticketId={ticketId} />
            ))
          : ""} */}

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Add Note"
        >
          <h2>Add Note</h2>
          <button className="btn-close" onClick={closeModal}>
            X
          </button>
          <form>
            <div className="form-group">
              <textarea
                name="noteText"
                id="noteText"
                className="form-control"
                placeholder="Note text"
              ></textarea>
            </div>

            <div className="form-group">
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
}

export default SingleTicketItem;
