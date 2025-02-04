import CoreConceptsType from '../components/CoreConceptsType';

const CoreConcepts = ({ title, description, image }: CoreConceptsType) => {
  return (
    <div>
      <img src={image} alt="Image representing core React concepts" />
      {title}
      {description}
    </div>
  );
};

export default CoreConcepts;
