import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,

  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import Navigation from "./navigation"
import Following from "./following"

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
     <Navigation/>
        <SidebarSeparator/>
          <Following/>      
        <SidebarSeparator/>
            Recommonded
      </SidebarContent>
      <SidebarFooter>
         <SidebarMenu>
          <SidebarMenuItem>
            <h1>footer user</h1>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}