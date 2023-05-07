import {FC, useState} from 'react';
import {ContactsList} from "./components/ContactsList/ContactsList.tsx";
import ContactForm from "./components/ContactForm/ContactForm.tsx";

const App: FC = () => {
    const [openForm, setOpenForm] =  useState<boolean>(false)

    const handelOpenForm = (): void => {
        setOpenForm((prev) => !prev)
    }

    return (
        <div>
            <ContactsList onClick={handelOpenForm}/>

            {openForm && <ContactForm onClick={handelOpenForm}/>}
        </div>
    );
};

export default App;
