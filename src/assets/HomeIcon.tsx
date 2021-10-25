import React from 'react';

/**
 * @interface IHomeIconProps
 * @field   activeIcon: string - the currently active icon

 */
interface IHomeIconProps {
  activeIcon: string;
}

const getFillColor = (activeIcon: string) => {
  if (activeIcon === "home") {
    return "#5559AF"
  }
  return "white"
  
}


const HomeIcon = (props: IHomeIconProps) => {

  return (
    <svg width="35" height="35" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z"
        fill={getFillColor(props.activeIcon)}
      />
    </svg>
  );
};

export default HomeIcon;