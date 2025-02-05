import { useState } from 'react';
import CoreConceptList from './components/core-concepts/CoreConceptList';
import Header from './components/Header';
import TabMenu from './components/tabs/TabMenu';
import { EXAMPLES } from './datas/data';

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
          <div id="tab-content">
            <h3>
              {
                EXAMPLES[tabContent.toLowerCase() as keyof typeof EXAMPLES]
                  ?.title
              }
            </h3>
            <p>
              {
                EXAMPLES[tabContent.toLowerCase() as keyof typeof EXAMPLES]
                  ?.description
              }
            </p>
            <pre>
              <code>
                {
                  EXAMPLES[tabContent.toLowerCase() as keyof typeof EXAMPLES]
                    ?.code
                }
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
