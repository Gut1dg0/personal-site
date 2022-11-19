import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Channel from './components/Channel';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <About />
        </section>
        <article>
          <Channel />
        </article>
      </main>
    </div>
  );
}

export default App;
