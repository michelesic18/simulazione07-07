import React, { useState } from "react";

function Main({books}) {


const [searchRes, setSearchRes] = useState("")
const [titleIpt, setTitleIpt] = useState("")
const [authorIpt, setAuthorIpt] = useState("")


const iptValue = (event) =>{
  setTitleIpt(event.target.value)
}
const iptValue2 = (event) =>{
  setAuthorIpt(event.target.value)
}
const searchBtn =() =>{
  const booksFilter = books.filter(
    (book) => book.titolo.includes(titleIpt) || book.autore.includes(authorIpt)
  )

  setSearchRes(booksFilter)
}
  return (
    <div>
      <div className="flex flex-col items-center mt-20">
        <input
          className="p-2 bg-slate-300 border border-black"
          type="text"
          name="ip1"
          id="ipt1"
          placeholder="inserisci il titolo"
          value={titleIpt}
          onChange={iptValue}
        />
        <input
          className="p-2 bg-slate-300 border border-black"
          type="text"
          name="ipt2"
          id="ipt2"
          placeholder="inserisci nome autore"
          onChange={iptValue2}
          value={authorIpt}
        />
        <button onClick={searchBtn} className="p-2 bg-red-400 text-black mt-6">Cerca</button>
      </div>

      <div>
          {searchRes.length > 0 ? (
            searchRes.map((book)=> (
                <div className="flex flex-col justify-center items-center gap-2">
                  <div>titolo : {book.titolo}</div>
                  <div>Autore : {book.autore}</div>
                  <div>prezzo : {book.prezzo}</div>
                </div>
            )) 
          ):(
          <div className="flex justify-center mt-10"> nessun libro trovato</div>
          )}
      </div>
    </div>
  );
}

export default Main;
