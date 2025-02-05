import CoreConceptList from './components/CoreConceptList';
import Header from './components/Header';
import TabButton from './components/TabButton';

function App() {
  const onClickHandler = (selectedButton) => {
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
          <menu>
            <TabButton onButtonClick={() => onClickHandler('Components')}>
              Components
            </TabButton>
            <TabButton onButtonClick={() => onClickHandler('JSX')}>
              JSX
            </TabButton>
            <TabButton onButtonClick={() => onClickHandler('Props')}>
              Props
            </TabButton>
            <TabButton onButtonClick={() => onClickHandler('State')}>
              State
            </TabButton>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
