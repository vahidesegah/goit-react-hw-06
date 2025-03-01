import './App.css';
import Title from '../Title/Title.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactForm from '../ContactForm/ContactForm.jsx';
import ContactList from '../ContactList/ContactList.jsx';

function App() {
  return (
    <div className="app-container">
      <header className="app-header"> {/* Başlık için yeni bir element */}
        <Title />
      </header>
      <div className="content-wrapper">
        <div className="form-section">
          <SearchBox />
          <ContactForm />
        </div>
        <div className="list-section">
          <ContactList />
        </div>
      </div>
    </div>
  );
}

export default App;