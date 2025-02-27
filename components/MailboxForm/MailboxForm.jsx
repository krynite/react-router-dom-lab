import { Link } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";

const MailboxForm = ({ addBox }) => {
  const [formData, setFormData] = useState({
    newMailBox: "",
    newMailBoxSize: "Small",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    addBox(formData);
    setFormData([]);
    navigate("/mailboxes");
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <h1>New Mailbox Forms</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newMailBox">Enter a Boxholder: </label>{" "}
        <input
          type="text"
          name="newMailBox"
          value={formData.newMailBox}
          onChange={handleChange}
        ></input>
        <label htmlFor="newMailBoxSize">Select a Box Size: </label>{" "}
        {/* <input
          type="text"
          name="newMailBoxSize"
          value={formData.newMailBoxSize}
          onChange={handleChange}
        ></input> */}
        <select
          id="newMailBoxSize"
          name="newMailBoxSize"
          onChange={handleChange}
        >
          <option id="Small" name="newMailBoxSize" value="Small">
            Small
          </option>
          <option id="Medium" name="newMailBoxSize" value="Medium">
            Medium
          </option>
          <option id="Large" name="newMailBoxSize" value="Large">
            Large
          </option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MailboxForm;
