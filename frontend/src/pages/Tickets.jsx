import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import Ticket from "../components/Ticket";

function Tickets() {
  return (
    <>
      <BackButton />
      <h1>Tickets</h1>
      <div className="tickets">
        <div className="ticket-headings">
          <div>Product</div>
          <div>Date</div>
          <div>Status</div>
          <div></div>
        </div>
        {/* {tickets.map((ticket) => (
          <Ticket key={ticket._id} ticket={ticket} />
        ))} */}
      </div>
    </>
  );
}

export default Tickets;
