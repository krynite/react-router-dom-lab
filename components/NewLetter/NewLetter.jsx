import LetterForm from "../LetterForm/LetterForm";

const NewLetter = ({ mailboxes, letters, addLetter }) => {


    return (
        <>
            <LetterForm mailboxes={mailboxes} addLetter={addLetter} />
        </>
    );
};

export default NewLetter;
