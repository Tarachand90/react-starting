import TabButton from './TabButton';

interface TabMenuProps {
  onTabSelect: (tab: string) => void;
}

const TabMenu = ({ onTabSelect }: TabMenuProps) => {
  const tabs = ['Components', 'JSX', 'Props', 'State'];

  return (
    <menu>
      {tabs.map((tab) => (
        <TabButton key={tab} onButtonClick={() => onTabSelect(tab)}>
          {tab}
        </TabButton>
      ))}
    </menu>
  );
};

export default TabMenu;
