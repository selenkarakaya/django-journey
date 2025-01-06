import { toast } from "react-toastify";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { FaPlus } from "react-icons/fa";

function NoteItem({ note, ticketId }) {
  return (
    <div className="flex">
      <p>{note.text}</p>
      <h1>image</h1>
      <img alt="not found" width={"250px"} />
      <h2>Add image</h2>
      <button className="btn-close">X</button>
      <form>
        <div className="form-group">
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          />
        </div>

        <div className="form-group">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NoteItem;
