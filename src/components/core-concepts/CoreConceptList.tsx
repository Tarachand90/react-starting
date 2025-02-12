import { CORE_CONCEPTS } from '../../datas/data';
import Sections from '../utils/Sections';
import CoreConcepts from './CoreConcepts';

const CoreConceptList = () => {
  return (
    <Sections title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcepts key={concept.title} {...concept} />
        ))}
      </ul>
    </Sections>
  );
};

export default CoreConceptList;
