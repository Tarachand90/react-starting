import { TabButtonProps } from './TabButtonProps';

const TabButton = ({ children, onButtonClick, isSelected }: TabButtonProps) => {
  return (
    <li>
      <button onClick={onButtonClick} className={isSelected ? 'active' : ''}>
        <span>{children}</span>
      </button>
    </li>
  );
};

export default TabButton;
