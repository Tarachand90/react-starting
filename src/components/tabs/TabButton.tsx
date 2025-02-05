import { TabButtonProps } from './TabButtonProps';

const TabButton = ({ children, onButtonClick }: TabButtonProps) => {
  return (
    <li>
      <button onClick={onButtonClick}>
        <span>{children}</span>
      </button>
    </li>
  );
};

export default TabButton;
