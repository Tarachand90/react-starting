import TabButtonProps from './TabButtonProps';

const TabButton = ({ children, onButtonClick }: TabButtonProps) => {
  return (
    <li>
      <button onClick={onButtonClick}>{children}</button>
    </li>
  );
};

export default TabButton;
