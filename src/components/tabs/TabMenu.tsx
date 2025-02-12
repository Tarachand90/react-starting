import TabButton from './TabButton';

interface TabMenuProps {
  onTabSelect: (tab: string) => void;
  selectedTab: string;
}

const TabMenu = ({ onTabSelect, selectedTab }: TabMenuProps) => {
  const tabs = ['Components', 'JSX', 'Props', 'State'];

  return (
    <menu>
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
    </menu>
  );
};

export default TabMenu;
