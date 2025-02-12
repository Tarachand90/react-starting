import { CoreConceptsType } from './CoreConceptsType';

const CoreConcepts = ({ title, description, image }: CoreConceptsType) => {
  return (
    <li>
      <img src={image} alt="Image representing core React concepts" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default CoreConcepts;
