"use client";

import { useState } from "react";
import Dark from "../Dark";
import LanguageSelector from "./language-selector";
import { useTranslation } from "react-i18next";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Example() {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-transparent">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <h1 className="text-xl font-bold text-[#231F20] dark:text-[#F9F4DA]">
              {t("logo_text")}
            </h1>
            {/* <img
              alt=""
              src="#"
              className="h-8 w-auto"
            /> */}
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 dark:text-[#F9F4DA]">
          <a
            href="#"
            className="text-base font-semibold text-gray-900 dark:text-[#F9F4DA]"
          >
            {t("home")}
          </a>
          <a
            href="#"
            className="text-base font-semibold text-gray-900 dark:text-[#F9F4DA]"
          >
            {t("about")}
          </a>
          <a
            href="#"
            className="text-base font-semibold text-gray-900 dark:text-[#F9F4DA]"
          >
            {t("skills")}
          </a>
          <a
            href="#"
            className="text-base font-semibold text-gray-900 dark:text-[#F9F4DA]"
          >
            {t("experience")}
          </a>
          <a
            href="#"
            className="text-base font-semibold text-gray-900 dark:text-[#F9F4DA]"
          >
            {t("contact")}
          </a>
        </PopoverGroup>
        <div className="hidden gap-2 lg:flex lg:flex-1 lg:justify-end">
          {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a> */}
          <Dark />
          <LanguageSelector />
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="bg-custom-gradient fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Yaroslav Bozhak</span>
              <h1 className="text-xl font-bold text-[#231F20] dark:text-[#F9F4DA]">
                Yaroslav Bozhak
              </h1>
              {/* <img alt="" src="#" className="h-8 w-auto" /> */}
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-[#F9F4DA]"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-[#F9F4DA]"
                >
                  About
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-[#F9F4DA]"
                >
                  Skills
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-[#F9F4DA]"
                >
                  Experience
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-[#F9F4DA]"
                >
                  Contact
                </a>
              </div>
              <div className="py-6">
                <Dark />
                {/* <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a> */}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
