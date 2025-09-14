import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,

  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
      navigation
        <SidebarSeparator/>
            Following        
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