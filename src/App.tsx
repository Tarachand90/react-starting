import { useState } from 'react';
import CoreConceptList from './components/core-concepts/CoreConceptList';
import Header from './components/Header';
import TabMenu from './components/tabs/TabMenu';
import { EXAMPLES } from './datas/data';
import ExampleSection from './components/examples/ExampleSection';

function App() {
  const [tabContent, setTabContent] = useState<string>('Please click a button');

  const onClickHandler = (selectedButton: string) => {
    // Selected button can be Components, JSX, Props and State
    setTabContent(selectedButton);
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
          <ExampleSection tabContent={tabContent} />
        </section>
      </main>
    </div>
  );
}

export default App;
