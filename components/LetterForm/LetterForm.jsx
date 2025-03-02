import { useState } from "react";
import { useNavigate } from "react-router";

const LetterForm = ({ mailboxes, addLetter }) => {
    const [formData, setFormData] = useState({
        mailboxId: "",
        recipient: "",
        sender: "",
        content: ""
    });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const letterData = {
            ...formData,
            mailboxId: Number(formData.mailboxId)
        };

        addLetter(letterData);

        // Reset form
        setFormData({
            mailboxId: "",
            recipient: "",
            sender: "",
            content: ""
        });

        navigate(`/mailboxes/${formData.mailboxId}`);
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    return (
        <>
            <h1>New Letter</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor="mailboxId">Select Mailbox: </label>{" "}
                <select
                    id="mailboxId"
                    name="mailboxId"
                    value={formData.mailboxId}
                    onChange={handleChange}
                >
                    <option value="" disabled>Select a mailbox</option>
                    {mailboxes.map((mailbox) => (
                        <option key={mailbox._id} value={mailbox._id}>
                            Mailbox {mailbox._id} - {mailbox.boxOwner}
                        </option>
                    ))}
                </select>

                <label htmlFor="recipient">Recipient: </label>{" "}
                <input
                    type="text"
                    id="recipient"
                    name="recipient"
                    value={formData.recipient}
                    onChange={handleChange}
                />

                <label htmlFor="sender">Your Name: </label>{" "}
                <input
                    type="text"
                    id="sender"
                    name="sender"
                    value={formData.sender}
                    onChange={handleChange}
                />

                <label htmlFor="content">Message: </label>
                <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                />

                <button type="submit">Send Letter</button>
            </form>
        </>
    );
};

export default LetterForm;