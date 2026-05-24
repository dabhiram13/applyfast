"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { ApplyfastLogo } from "@/components/brand/applyfast-logo"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-[#020405]/95 text-white backdrop-blur-xl">
      <nav className="mx-auto flex h-[66px] max-w-[1048px] items-center px-6 md:px-0">
        <ApplyfastLogo href="/" dark textClassName="h-10" />
        <div className="ml-12 hidden items-center gap-9 text-xs font-bold text-white/82 lg:flex">
          <a href="#product" className="inline-flex items-center gap-1 hover:text-white">
            Product <ChevronDown className="size-3" />
          </a>
          <Link href="/protected/sponsors" className="hover:text-white">Sponsors</Link>
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#blog" className="hover:text-white">Blog</a>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button asChild variant="ghost" className="hidden h-10 text-xs text-white/85 hover:bg-white/10 hover:text-white sm:inline-flex">
            <Link href="/auth/login">Sign in</Link>
          </Button>
          <Button asChild className="h-[38px] rounded-full bg-[#B7F34A] px-7 text-xs font-black text-[#0D0F12] hover:bg-[#C8FF63]">
            <Link href="/auth/sign-up">Start free</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
