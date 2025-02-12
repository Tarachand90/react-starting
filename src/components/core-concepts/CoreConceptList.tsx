import { CORE_CONCEPTS } from '../../datas/data';
import Tabs from '../tabs/Tabs';
import Sections from '../utils/Sections';
import CoreConcepts from './CoreConcepts';

const CoreConceptList = () => {
  const tabButtons = (
    <>
      {CORE_CONCEPTS.map((concept) => (
        <CoreConcepts key={concept.title} {...concept} />
      ))}
    </>
  );
  return (
    <Sections title="Core Concepts">
      <Tabs buttons={tabButtons} buttonsContainer="ul" />
    </Sections>
  );
};

export default CoreConceptList;
