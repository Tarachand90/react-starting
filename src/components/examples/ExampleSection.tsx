import { EXAMPLES } from '../../datas/data';
import { Example } from './Example';

interface ExampleSectionProps {
  tabContent: string;
}

const ExampleSection = ({ tabContent }: ExampleSectionProps) => {
  const currentExample: Example =
    EXAMPLES[tabContent.toLocaleLowerCase() as keyof typeof EXAMPLES];

  if (!currentExample) {
    return <div>Select a valid concept</div>;
  }

  return (
    <div id="tab-content">
      <h3>{currentExample.title}</h3>
      <p>{currentExample.description}</p>
      <pre>
        <code>{currentExample.code}</code>
      </pre>
    </div>
  );
};

export default ExampleSection;
