"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Bell,
  BriefcaseBusiness,
  ChevronRight,
  FileText,
  Gauge,
  LogOut,
  MessageSquare,
  SearchCheck,
  Settings,
  ShieldCheck,
  User,
  Users,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { signOut } from "@/app/auth/signout/actions"
import { ApplyfastLogo } from "@/components/brand/applyfast-logo"

const mainNav = [
  { title: "Dashboard", url: "/protected/dashboard", icon: Gauge },
  { title: "Job Matches", url: "/protected/jobs", icon: BriefcaseBusiness },
  { title: "Applications", url: "/protected/tracker", icon: FileText, badge: "8" },
  { title: "Sponsors", url: "/protected/sponsors", icon: Users },
  { title: "Resume Tailor", url: "/protected/resume", icon: SearchCheck },
  { title: "Messages", url: "/protected/messages", icon: MessageSquare },
  { title: "Settings", url: "/protected/settings", icon: Settings },
]

const toolNav = [
  { title: "Sponsor Explorer", url: "/protected/sponsors", icon: ShieldCheck, badge: "New" },
  { title: "Visa Tracker", url: "/protected/analyzer", icon: Bell },
  { title: "Salary Insights", url: "/protected/salary-insights", icon: BarChart3 },
]

interface AppSidebarProps {
  email: string
  name: string
  avatarUrl: string
  plan: string
}

export function AppSidebar({ email, name, avatarUrl, plan }: AppSidebarProps) {
  const pathname = usePathname()
  const isActive = (url: string) => pathname === url || pathname.startsWith(url + "/")
  const displayName = name || email || "Alex Johnson"
  const initials = name
    ? name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2)
    : email ? email.substring(0, 2).toUpperCase() : "AJ"

  return (
    <Sidebar
      collapsible="icon"
      variant="sidebar"
      className="border-r border-white/10 bg-[#05080B] text-white"
    >
      <SidebarHeader className="px-5 py-6">
        <ApplyfastLogo href="/protected/dashboard" dark textClassName="h-9" />
      </SidebarHeader>

      <SidebarContent className="gap-6 px-3">
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="px-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white/38">
            Main
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1.5">
              {mainNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    tooltip={item.title}
                    className="h-11 rounded-xl px-3 text-white/72 hover:bg-white/[0.08] hover:text-white data-[active=true]:bg-white/10 data-[active=true]:font-bold data-[active=true]:text-white [&>svg]:text-white/70 data-[active=true]:[&>svg]:text-[#B7F34A]"
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.badge ? (
                    <SidebarMenuBadge className="right-3 top-2.5 rounded-full border border-white/10 bg-white/[0.07] text-white/75">
                      {item.badge}
                    </SidebarMenuBadge>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="px-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white/38">
            Tools
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1.5">
              {toolNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    tooltip={item.title}
                    className="h-11 rounded-xl px-3 text-white/72 hover:bg-white/[0.08] hover:text-white data-[active=true]:bg-white/10 data-[active=true]:font-bold data-[active=true]:text-white [&>svg]:text-white/70 data-[active=true]:[&>svg]:text-[#B7F34A]"
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.badge ? (
                    <SidebarMenuBadge className="right-3 top-2.5 rounded-full bg-[#B7F34A] px-2 text-[10px] font-black text-[#0D0F12]">
                      {item.badge}
                    </SidebarMenuBadge>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="gap-4 p-4">
        <div className="rounded-2xl border border-[#B7F34A]/40 bg-[#B7F34A]/[0.08] p-4 text-white group-data-[collapsible=icon]:hidden">
          <p className="text-sm font-black">Unlock full insights</p>
          <p className="mt-2 text-xs leading-5 text-white/58">
            Get verified sponsor lists, job alerts, and application tracking.
          </p>
          <Link
            href="/protected/sponsors"
            className="mt-4 inline-flex h-10 w-full items-center justify-between rounded-xl bg-[#B7F34A] px-3 text-sm font-black text-[#0D0F12]"
          >
            Find sponsors <ChevronRight className="size-4" />
          </Link>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-left group-data-[collapsible=icon]:justify-center">
              <Avatar className="size-9 rounded-full ring-1 ring-[#B7F34A]/40">
                {avatarUrl && <AvatarImage src={avatarUrl} alt={displayName} />}
                <AvatarFallback className="bg-[#B7F34A] text-xs font-black text-[#0D0F12]">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1 group-data-[collapsible=icon]:hidden">
                <p className="truncate text-sm font-bold">{displayName}</p>
                <p className="truncate text-xs text-white/50">{plan || "free"} plan</p>
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 rounded-xl" side="top" align="end" sideOffset={8}>
            <DropdownMenuItem asChild>
              <Link href="/protected/profile"><User /><span>Profile</span></Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <form action={signOut} className="w-full">
                <button type="submit" className="flex w-full items-center gap-2">
                  <LogOut className="size-4" />
                  <span>Log out</span>
                </button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
