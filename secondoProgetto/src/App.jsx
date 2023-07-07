import  {useState}  from 'react'
import  Header from "./components/Header"
import Footer from './components/footer'
import Main from './components/main'
import './App.css'


function App() {
  
const [books, setBooks] = useState([
  {titolo : "ancora vita", autore : "sarah winman", imgCopertina : "https://www.mondadori.it/content/uploads/2023/07/978880476507HIG-234x360.jpg?x92345", prezzo : "5.50"},
  {titolo : "il mio nome nel vento", autore : "sarah winman", imgCopertina : "https://www.mondadori.it/content/uploads/2023/07/978880474656HIG-240x360.jpg?x92345", prezzo : "6.50"},
  {titolo : "la casa delle salamandre", autore : "stefano di martino", imgCopertina : "https://www.mondadori.it/content/uploads/2023/07/978880478059HIG-265x360.jpg?x92345", prezzo : "5.20"},
  {titolo : "la dama e il moro", autore : "carlo maria", imgCopertina : "https://www.mondadori.it/content/uploads/2023/07/978880476693HIG-234x360.jpg?x92345", prezzo : "4.50"},
  {titolo : "la segretaria di churchill", autore : "susan elia macneal", imgCopertina : "https://www.mondadori.it/content/uploads/2023/07/978880476067HIG-265x360.jpg?x92345", prezzo : "8.50"},
  {titolo : "lezioni sulla felicità", autore : "waldinger robert", imgCopertina : "https://www.mondadori.it/content/uploads/2023/07/978880474999HIG-234x360.jpg?x92345", prezzo : "5.10"},
  {titolo : "la pasticceria incantata", autore : "jay heinrichs", imgCopertina : "https://www.mondadori.it/content/uploads/2023/07/978880473827HIG-235x360.jpg?x92345", prezzo : "7.50"},
  {titolo : "la pasticceria incantata", autore : "Gu byeong-mo", imgCopertina : "https://www.mondadori.it/content/uploads/2023/06/978880477242HIG-216x360.jpg?x92345", prezzo : "10.50"}
])
  return (
    <div>
        <Header />
        <Main books ={books}/>
        
        <Footer />
    </div>
      
  )
}

export default App
// Creare un array di 8 oggetti a piacere che rappresentano libri (titolo, autore, immagineCopertina, prezzo), 
// con almeno 2 libri di 2 autori identici, e 2 libri con titolo identico ma autori differenti.
// Il componente Header mostra il titolo dell'app, il componente Footer i copyright.
// Il componente Main mostra la logica dell'applicazione: abbiamo un campo di input per digitare il titolo e 
// uno per digitare l'autore, e un pulsante di ricerca. La ricerca mostra i risultati del match di almeno uno dei 
// due criteri di ricerca, oppure "nessun libro trovato".
// Inizialmente la lista di libri in output è vuota, alla produzione delle ricerche vengono mostrate tutte le info 
// dei libri corrispondenti. Usare la strategia preferita per mostrare le immagini di copertina