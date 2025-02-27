import { useState } from "react";
import { Route, Routes } from "react-router";
import NavBar from "../components/NavBar/NavBar";
import MailboxList from "../components/MailboxList/MailboxList";
import MailboxForm from "../components/MailboxForm/MailboxForm";
import MailboxDetails from "../components/MailboxDetails/MailboxDetails";
import NewLetter from "../components/NewLetter/NewLetter";

const App = () => {
  const [mailboxes, setMailboxes] = useState([
    {
      _id: 1,
      boxSize: "Small",
      boxOwner: "Alex",
    },
  ]);
  const [letters, setLetters] = useState([]);

  const addBox = (FormData) => {
    FormData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, FormData]);
  };

  const addLetter = (newLetter) => {
    const letterId = {
      ...newLetter,
      _id: letters.length + 1,
    };
    setLetters([...letters, letterId]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Mailbox List</h1>}></Route>
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxIdlboxes" element={<MailboxDetails mailboxes={mailboxes} letters={letters} />} />
      </Routes>
    </>
  );
};

export default App;
