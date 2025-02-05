import { TabButtonProps } from './TabButtonProps';

const TabButton = ({ children, onButtonClick, isSelected }: TabButtonProps) => {
  return (
    <li>
      <button onClick={onButtonClick}>
        <span className={isSelected ? 'active' : ''}>{children}</span>
      </button>
    </li>
  );
};

export default TabButton;
