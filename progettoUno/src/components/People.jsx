import React, { useState } from "react";

function People() {
    const [people, setPeople] = useState([
        { id: 1, fullname: "mario rossi", avg: 6, gender: "m" },
        { id: 2, fullname: "luigi verdi", avg: 4, gender: "m" },
        { id: 3, fullname: "peach pink", avg: 8, gender: "f" },
        { id: 4, fullname: "wario rossi", avg: 9, gender: "m" },
        { id: 5, fullname: "daisy princess", avg: 10, gender: "f" },
    ]);

    const [searchFullName, setSearchFullName] = useState("");
    const iptValue =(event) =>{
        setSearchFullName(event.target.value)
    }
    const valueIptBtn =() => {
        const filterStudents = people.filter(
            (person) => person.fullname.toLowerCase() === searchFullName.toLowerCase()
        )
        setPeople(filterStudents)
    }


   return (
        <>  
        {people.length >0 ? (    
            <div className="flex flex-col items-center">
                {people.map((person) => (
                    <div
                        className={`flex flex-col justify-center items-center w-80  ${person.gender == "m" ? "bg-blue-400" : "bg-pink-300"
                            }`}
                        key={person.id}
                    >
                        <div>
                            <div>nome e cognome : {person.fullname}</div>
                            <div>media voti : {person.avg}</div>
                            <div>sesso : {person.gender} </div>
                        </div>
                    </div>
            ))}     
            </div>
        ):(
            <div className="flex flex-col justify-center items-center mt-6">
                <div>studente non trovato</div>
            </div>
        )}
            <div className="flex flex-col gap-8">
                <div className="flex flex-col justify-center items-center mt-10">
                    <input
                        className="p-2 border border-black w-56 text-black text-center"
                        type="search"
                        placeholder="Inserisci il nome"
                        onChange={iptValue}
                        value={searchFullName}
                    />
                </div>
                <div className=" flex justify-center items-center">
                    <button onClick={valueIptBtn} className="w-56 bg-red-500 p-4">Cerca studenti</button>
                </div>
            </div>
        </>
        
    );
}

export default People;
