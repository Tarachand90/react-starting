import TabButton from './TabButton';

interface TabMenuProps {
  onTabSelect: (tab: string) => void;
  selectedTab: string;
}

const TabMenu = ({ onTabSelect, selectedTab }: TabMenuProps) => {
  const tabs = ['Components', 'JSX', 'Props', 'State'];

  return (
    <menu>
      <div>
        {tabs.map((tab) => (
          <TabButton
            key={tab}
            onButtonClick={() => onTabSelect(tab)}
            isSelected={selectedTab === tab}
          >
            {tab}
          </TabButton>
        ))}
      </div>
    </menu>
  );
};

export default TabMenu;
