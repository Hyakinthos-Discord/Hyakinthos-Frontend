import Image from 'next/image'
import {Fragment, useState} from "react";
import {Bars3Icon, ChevronDownIcon} from "@heroicons/react/24/outline"
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { PrimaryButton, SecondaryButton } from "../components/primaryButton"

export default function Home() {
  
  return (
    <header className="p-4 bg-red-700 rounded-lg flex-1 flex-row">
      <p>Hyakinthos</p>
      <div className="w-5/6 mx-1 bg-red-800">
      </div>
      <div className="ml-1">
        <PrimaryButton text="Login" />
        <SecondaryButton text="Sign up" />
      </div>
    </header>
  )
}
