import CoreConceptList from "./components/CoreConceptList";
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
          <CoreConceptList />
        </section>
        
      </main>
    </div>
  );
}

export default App;
