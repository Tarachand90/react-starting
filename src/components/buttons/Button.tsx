import React from 'react';

interface ButtonsProps {
  children: React.ReactNode;
  mode?: 'filled' | 'outline' | 'text';
  Icon?: React.ComponentType;
  onClick?: () => void;
  disable?: boolean;
}

// Instead of defining above ButtonsProps, we can do below interface which extends
//React.ButtonHTMLAttributes<HTMLButtonElement> so that we dont have to include all common
// attributes

/**interface ButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    mode?: 'filled' | 'outline' | 'text';
    Icon?: React.ComponentType;
  } */

export default function Button({
  children,
  mode = 'filled',
  Icon,
  ...props
}: ButtonsProps) {
  // Todo: Build this component!
  // !!! Important:
  // Wrap the icon with a <span className="button-icon"> to achieve the target look
  // Also wrap the children prop with a <span>

  //   const modeClass =
  //     mode !== undefined
  //       ? `${mode}-button`
  //       : Icon !== undefined
  //         ? `icon-button`
  //         : 'filled-button';

  const modeClass = `${mode}-button`;
  const iconClass = Icon ? 'icon-button' : '';
  return (
    <button className={`button ${modeClass} ${iconClass}`} {...props}>
      {/* If Icon is provided, render it inside a span for consistent styling */}
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}
