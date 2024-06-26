import { useState } from "react";
import { useTodo } from "../context";

function Header() {
  const buttons = ["Mon", "Tue", "Wed", "Thus", "Fri"];
  const [activeButton, setActiveButtons] = useState(null);
  const { setDay } = useTodo();
  const handleButtonClick = (index) => {
    setActiveButtons(index);
    setDay(buttons[index]);
  };
  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {buttons.map((button, index) => (
                    <button
                      key={index}
                      onClick={() => handleButtonClick(index)}
                      className={`${
                        activeButton === index
                          ? "bg-gray-900"
                          : "hover:bg-gray-700 hover:text-white"
                      } text-white  rounded-md px-3 py-2 text-sm font-medium`}
                      aria-current="page"
                    >
                      {button}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
