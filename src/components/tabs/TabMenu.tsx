import Sections from '../utils/Sections';
import TabButton from './TabButton';
import Tabs from './Tabs';

interface TabMenuProps {
  onTabSelect: (tab: string) => void;
  selectedTab: string;
}

const TabMenu = ({ onTabSelect, selectedTab }: TabMenuProps) => {
  const tabs = ['Components', 'JSX', 'Props', 'State'];
  const tabButtons = (
    <ul className="button-container">
      {tabs.map((tab) => (
        <TabButton
          key={tab}
          onButtonClick={() => onTabSelect(tab)}
          isSelected={selectedTab === tab}
          aria-selected={selectedTab === tab}
        >
          {tab}
        </TabButton>
      ))}
    </ul>
  );

  // Create the list of tab buttons

  return (
    <Sections title="Examples">
      <Tabs buttons={tabButtons}></Tabs>
    </Sections>
  );
};

export default TabMenu;
