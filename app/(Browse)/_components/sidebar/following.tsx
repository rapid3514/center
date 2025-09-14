import { SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { Followes } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Following = () => {
  return (
    <SidebarGroup>
        <SidebarGroupLabel>Following</SidebarGroupLabel>
        <SidebarContent>
            <SidebarMenu>
                 {Followes.map((item) => (
              <SidebarMenuItem key={item.id}>
              <SidebarMenuButton asChild>
                <Link href={item.username}>
                <Image
                  width={32}
                  height={32}
                  className="rounded-full"
                  src={item.avatar}
                  alt={item.username}
                />
                <div className="flex flex-col">
                    <p className="text-sm font-bold font-spaceGrotesk">
                        @{item.username}
                    </p>
                    <p className="text-muted-foreground">
                        {item.Followers}follower{item.Followers !== 1 && "s"}
                    </p>
                </div>
            </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
            </SidebarMenu>
        </SidebarContent>
    </SidebarGroup>
  )
}

export default Following