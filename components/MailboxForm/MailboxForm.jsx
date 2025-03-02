import { Link } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";

const MailboxForm = ({ addBox }) => {
    const [formData, setFormData] = useState({
        boxOwner: "",
        boxSize: "Small",
    });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        addBox(formData);
        setFormData({
            boxOwner: "",
            boxSize: "Small",
        })
        navigate("/mailboxes");
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <>
            <h1>New Mailbox Forms</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxOwner">Enter a Boxholder: </label>{" "}
                <input
                    type="text"
                    name="boxOwner"
                    value={formData.boxOwner}
                    onChange={handleChange}
                ></input>
                <label htmlFor="boxSize">Select a Box Size: </label>{" "}

                <select
                    id="boxSize"
                    name="boxSize"
                    onChange={handleChange}
                >
                    <option id="Small" name="boxSize" value="Small">
                        Small
                    </option>
                    <option id="Medium" name="boxSize" value="Medium">
                        Medium
                    </option>
                    <option id="Large" name="boxSize" value="Large">
                        Large
                    </option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default MailboxForm;
