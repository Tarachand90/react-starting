import CoreConceptList from './components/core-concepts/CoreConceptList';
import Header from './components/Header';
import TabMenu from './components/tabs/TabMenu';

function App() {
  const onClickHandler = (selectedButton: string) => {
    // Selected button can be Components, JSX, Props and State
    console.log(selectedButton);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <CoreConceptList />
          <h2>Examples</h2>
          <TabMenu onTabSelect={onClickHandler} />
        </section>
      </main>
    </div>
  );
}

export default App;
