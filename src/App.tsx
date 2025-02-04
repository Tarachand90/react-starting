import CoreConceptList from './components/CoreConceptList';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <CoreConceptList />
        </section>
      </main>
    </div>
  );
}

export default App;
