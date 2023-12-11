'use client'

import Image from 'next/image'
import {Fragment, useState} from "react";
import {Bars3Icon, ChevronDownIcon} from "@heroicons/react/24/outline"
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { PrimaryButton, SecondaryButton } from "../components/primaryButton"

export default function Home() {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="flex flex-row p-2">
      <div><PrimaryButton text="Hello" className="mr-1"/></div>
      <div className="ml-3"><SecondaryButton text="Bye!, how are you today?" /></div>
    </div>
  )
}
