import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header";

import { CORE_CONCEPTS } from "./datas/data";

function App() {

  
  
  return (
    <div>
      <Header/>
       <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <li>
              <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} 
              image={CORE_CONCEPTS[0].image}/>
            </li>
            <li>
              <CoreConcepts title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} 
              image={CORE_CONCEPTS[1].image}/>
            </li>
            <li>
              <CoreConcepts title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} 
              image={CORE_CONCEPTS[2].image}/>
            </li>
            <li>
              <CoreConcepts title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} 
              image={CORE_CONCEPTS[3].image}/>
            </li>
          </ul>
        </section>
        
      </main>
    </div>
  );
}

export default App;
