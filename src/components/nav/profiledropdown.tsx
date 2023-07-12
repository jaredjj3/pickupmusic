"use client";

export type ProfileDropdownProps = {
  open: boolean;
};

export const ProfileDropdown: React.FC<ProfileDropdownProps> = (props) => {
  const menuTransitionClassNames = props.open
    ? "transition ease-out duration-100"
    : "transition ease-in duration-75";
  const menuTransformClassNames = props.open
    ? "transform opacity-100 scale-100"
    : "transform opacity-0 scale-95";
  const menuClassNames = `${menuTransitionClassNames} ${menuTransformClassNames}`;

  return (
    <div
      className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${menuClassNames}`}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
    >
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        tabIndex={-1}
        id="user-menu-item-0"
      >
        Your Profile
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        tabIndex={-1}
        id="user-menu-item-1"
      >
        Settings
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        tabIndex={-1}
        id="user-menu-item-2"
      >
        Sign out
      </a>
    </div>
  );
};