import './App.css';
import { useState } from 'react';

function Party() {
    const [guestList, setGuestList] = useState(initialGuests);

    function handleAddGuest(name: string) {
        setGuestList([
            ...guestList,
            { id: nextIndex, name: name, status: "cadastrado" }
        ])
        nextIndex++
    }

    return (

        <>
            <GuestInput onEnter={handleAddGuest}
            />
            <GuestList list={guestList} setList={setGuestList} />
        </>
    )
}

function GuestInput({ onEnter }: { onEnter: (name: string) => void }) {
    const [text, setText] = useState("");

    function handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            if (text) { onEnter(text) }
            setText("");
        }
    }

    return (

        <input
            className='inserir'
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyUp={handleKeyUp}
        />


    )
}

function Guest({
    guest,
    onDelete,
    onStatusButton
}: {
    guest: { id: number; name: string; status: string };
    onDelete: (id: number) => void;
    onStatusButton: (id: number) => void;
}) {
    let disable = false;
    let lable = "convidar";
    let css = "convite";

    switch (guest.status) {
        case "cadastrado": {
            lable = 'convidar'

            break
        }
        case "convidado": {
            lable = 'confirmar'
            css = 'confirme'
            break
        }
        case "confirmado": {
            lable = 'Confirmado'
            css = 'confirmei'
            disable = true
            break
        }
        default: { }
    }

    return (
        <div className='informacoes'>

            <span className='usuario'>{guest.name.length > 10 ? `${guest.name.substring(0, 7)}..` : guest.name}</span>


            <button
                onClick={() => onStatusButton(guest.id)}
                disabled={disable} className={css === 'convite' ? 'convite' : css === 'confirme' ? 'confirme' : 'confirmei'}>
                {lable}
            </button>

            <button className="btndanger" onClick={() => onDelete(guest.id)}>X</button>

        </div>
    )
}

function GuestList({
    list,
    setList
}: { 
    list: { id: number; name: string; status: string }[];
    setList: React.Dispatch<React.SetStateAction<{ id: number; name: string; status: string }[]>>;
}) {
    function handleDelete(id: number) {
        setList(list.filter((g) => g.id !== id));
    }
    function handleStatusButton(id: number) {
        setList(list.map(g => {
            if (g.id === id) {
                let newStatus = "cadastrado"
                if (g.status === "cadastrado") {
                    newStatus = "convidado"
                } else if (g.status === "convidado") {
                    newStatus = "confirmado"
                }
                return {
                    ...g,
                    status: newStatus
                }
            } else {
                return g
            }
        }))
    }

    return (
        <>
            <ul>
                {list.map(guest => {
                    return (
                        <Guest
                            guest={guest}
                            onDelete={handleDelete}
                            onStatusButton={handleStatusButton}
                        />
                    )
                })}
            </ul>
        </>
    )
}

let nextIndex = 4;
const initialGuests = [
    { id: 1, name: "vini", status: "confirmado" },
    { id: 2, name: "amaral", status: "cadastrado" },
    { id: 3, name: "yasmin", status: "convidado" },
]


export default Party;