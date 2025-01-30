import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "En" },
  { code: "ua", lang: "UA" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="flex rounded-full bg-gray-200 px-3 py-2 shadow-lg transition-all duration-300 focus:outline-hidden dark:bg-gray-800"
      >
        {languages.find((lang) => lang.code === i18n.language)?.lang ||
          "Select Language"}
        <svg
          className={`-mr-1 ml-2 h-5 w-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="xl:dark:bg-custom-gradient ring-opacity-5 mt-2 w-full rounded-md bg-white py-2 ring-1 shadow-lg ring-black xl:absolute xl:w-38 dark:bg-transparent"
          role="menu"
        >
          {languages.map((lng) => (
            <button
              key={lng.code}
              onClick={() => changeLanguage(lng.code)}
              className={`block w-full px-4 py-2 text-left text-sm ${
                lng.code === i18n.language
                  ? "bg-gray-200 font-bold dark:bg-gray-700"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {lng.lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
