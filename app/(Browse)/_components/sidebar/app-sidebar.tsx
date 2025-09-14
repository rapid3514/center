import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,

  SidebarMenuButton,

  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import Navigation from "./navigation"
import Following from "./following"
import Recommended from "./recommended"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { ChevronUp, User2 } from "lucide-react"
import Link from "next/link"

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
     <Navigation/>
        <SidebarSeparator/>
          <Following/>      
        <SidebarSeparator/>
           <Recommended/>
      </SidebarContent>
      <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 /> Username
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                 <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <Link href={'/as'}>
                  <span>Acoount</span>
                  </Link>
                </DropdownMenuItem>
                 <DropdownMenuItem>
                  <Link href={'/dashboard'}>
                  <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                 <DropdownMenuItem>
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}