import { useParams } from "react-router";

const MailboxDetails = ({ mailboxes, letters }) => {
    const { mailBoxId } = useParams();

    const mailItem = mailboxes.find(
        (item) => item._id === Number(mailBoxId)
    );

    const mailboxLetters = letters.filter(
        (letter) => letter.mailboxId === Number(mailBoxId)
    );

    if (!mailItem) {
        return <h2>Mailbox not found</h2>;
    }

    return (
        <>
            <h1>Mailbox Details</h1>
            <h2>Box Owner: {mailItem.boxOwner}</h2>
            <p>Box Size: {mailItem.boxSize}</p>

            {/* Display letters if you want */}
            <h3>Letters ({mailboxLetters.length})</h3>
            {mailboxLetters.length > 0 ? (
                <ul>
                    {mailboxLetters.map((letter) => (
                        <li key={letter._id}>
                            {letter.sender} - {letter.content}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No letters for this mailbox yet.</p>
            )}
        </>
    );
};

export default MailboxDetails;