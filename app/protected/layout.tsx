import { Suspense } from "react"
import { Bell, Search } from "lucide-react"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebarServer } from "@/features/_shared/components/app-sidebar-server"
import { PlanProviderServer } from "@/features/_shared/components/plan-provider-server"
import { SidebarSkeleton } from "@/features/_shared/components/sidebar-skeleton"

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <PlanProviderServer>
        <SidebarProvider
          style={
            {
              "--sidebar": "#05080B",
              "--sidebar-foreground": "#FFFFFF",
              "--sidebar-accent": "rgba(255,255,255,0.10)",
              "--sidebar-accent-foreground": "#FFFFFF",
              "--sidebar-border": "rgba(255,255,255,0.10)",
              "--sidebar-ring": "#B7F34A",
            } as React.CSSProperties
          }
        >
          <Suspense fallback={<SidebarSkeleton />}>
            <AppSidebarServer />
          </Suspense>
          <SidebarInset className="bg-[#F6F7F3]">
            <header className="sticky top-0 z-20 flex h-20 shrink-0 items-center gap-4 border-b border-black/5 bg-white/90 px-5 backdrop-blur-xl md:px-8">
              <SidebarTrigger className="-ml-1 rounded-xl border border-black/5 bg-white md:hidden" />
              <div className="hidden h-12 max-w-xl flex-1 items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 text-sm text-muted-foreground shadow-[0_10px_30px_rgba(13,15,18,0.04)] md:flex">
                <Search className="size-4" />
                Search jobs, companies, or sponsors...
                <span className="ml-auto rounded-lg border bg-[#F7F8F5] px-2 py-1 text-xs font-bold text-[#6B7280]">⌘K</span>
              </div>
              <div className="flex-1 md:hidden" />
              <button className="relative flex size-11 items-center justify-center rounded-2xl border border-black/5 bg-white shadow-sm">
                <Bell className="size-4 text-[#1F2328]" />
                <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-[#B7F34A] text-[10px] font-black text-[#0D0F12]">3</span>
              </button>
              <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white py-1.5 pl-2 pr-3 shadow-sm">
                <div className="grid size-9 place-items-center rounded-full bg-[#0D0F12] text-xs font-black text-[#B7F34A]">AF</div>
                <div className="hidden text-sm leading-tight sm:block">
                  <p className="font-bold text-[#111318]">Alex Rivera</p>
                  <p className="text-xs text-muted-foreground">Premium</p>
                </div>
              </div>
            </header>
            <main className="flex-1 overflow-auto p-5 md:p-8">{children}</main>
          </SidebarInset>
        </SidebarProvider>
      </PlanProviderServer>
    </Suspense>
  )
}
