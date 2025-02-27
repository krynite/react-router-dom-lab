import { Link } from "react-router";

const MailboxList = ({ mailboxes }) => {
  return (
    <>
      <p>Mail Box List</p>
      <ul>
        {mailboxes.map((mailbox) => (
          <li key={mailbox._id} className="mail-box">
            <Link to={`/mailboxes/${mailbox._id}`}>Mailbox {mailbox._id}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MailboxList;
