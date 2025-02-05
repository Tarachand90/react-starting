import { CoreConceptsType } from './CoreConceptsType';

const CoreConcepts = ({ title, description, image }: CoreConceptsType) => {
  return (
    <div>
      <img src={image} alt="Image representing core React concepts" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CoreConcepts;
