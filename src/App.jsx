import { useState } from "react";
import { Route, Routes } from "react-router";
import NavBar from "../components/NavBar/NavBar";
import MailboxList from "../components/MailboxList/MailboxList";
import MailboxForm from "../components/MailboxForm/MailboxForm";
import MailboxDetails from "../components/MailboxDetails/MailboxDetails";



const [mailboxes, setMailboxes] = useState([])



const App = () => {
  // return <h1>Hello world!</h1>;
  <>
    <NavBar/>
      <Routes>
        <Route path="/" element=""></Route>
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>} />
        <Route path="/new-mailbox" element={<MailboxForm/>} />
        <Route path="/maimailboxes/:mailboxIdlboxes" element={<MailboxDetails />} />
      </Routes>

  </>

};

export default App;