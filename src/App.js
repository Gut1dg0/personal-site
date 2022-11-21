import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Channel from './components/Channel';
import Projects from './components/Projects';

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
        <article>
          <Projects />
        </article>
      </main>
    </div>
  );
}

export default App;
