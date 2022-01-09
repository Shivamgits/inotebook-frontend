import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';

function App() {
  return (
   <>
   <NoteState>
   <Navbar/>
   <div className="container">
   <Home/>
   </div>


   </NoteState>
   </>
  );
}

export default App;
