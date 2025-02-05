import { useState } from 'react';
import CoreConceptList from './components/core-concepts/CoreConceptList';
import Header from './components/Header';
import TabMenu from './components/tabs/TabMenu';
import ExampleSection from './components/examples/ExampleSection';

function App() {
  const [tabContent, setTabContent] = useState<string>('');
  const [selectedTab, setSelectedTab] = useState<string>('');

  const onClickHandler = (selectedButton: string) => {
    // Selected button can be Components, JSX, Props and State
    setTabContent(selectedButton);
    setSelectedTab(selectedButton);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <CoreConceptList />
          <h2>Examples</h2>
          <div>
            <TabMenu onTabSelect={onClickHandler} selectedTab={selectedTab} />
            <ExampleSection tabContent={tabContent} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
