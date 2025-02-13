import React from 'react';
import { JSX } from 'react/jsx-runtime';

interface TabsProps {
  buttons: React.ReactNode;
  buttonsContainer?: keyof JSX.IntrinsicElements; // Ensures the string is a valid HTML tag
}
const Tabs = ({ buttons, buttonsContainer = 'menu' }: TabsProps) => {
  const ButtonsContainer = buttonsContainer as keyof JSX.IntrinsicElements;
  return <ButtonsContainer>{buttons}</ButtonsContainer>;
};

export default Tabs;
