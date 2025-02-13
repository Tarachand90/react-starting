import { useState } from 'react';
import CoreConceptList from './components/core-concepts/CoreConceptList';
import Header from './components/Header';
import TabMenu from './components/tabs/TabMenu';
import ExampleSection from './components/examples/ExampleSection';
import ButtonsApp from './components/buttons/ButtonsApp';

function App() {
  const [tabContent, setTabContent] = useState<string>('');
  const [selectedTab, setSelectedTab] = useState<string>('');

  const onClickHandler = (selectedButton: string) => {
    // Selected button can be Components, JSX, Props and State
    setTabContent(selectedButton);
    setSelectedTab(selectedButton);
  };

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <CoreConceptList />
          <div>
            <TabMenu onTabSelect={onClickHandler} selectedTab={selectedTab} />
            <ExampleSection tabContent={tabContent} />
          </div>
        </section>
      </main>
      <ButtonsApp />
    </>
  );
}

export default App;
