import { Info, BookOpen, Code2, TrendingUp, ChevronDown } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const sessions = [
  { title: "About", url: "/about", icon: Info },
  {
    title: "Session 1: Showcase & Setup",
    url: "/session-1",
    icon: BookOpen,
    subtabs: [
      { title: "AI Communication", url: "/session-1/ai-communication" },
      { title: "API Concepts", url: "/session-1/api-concepts" },
      { title: "News API Example", url: "/session-1/news-api" },
      { title: "Setup", url: "/session-1/setup" },
    ],
  },
  { title: "Session 2: Using APIs", url: "/session-2", icon: Code2 },
  { title: "Session 3: Advanced Analysis", url: "/session-3", icon: TrendingUp },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  const isSessionActive = (sessionUrl: string, subtabs?: any[]) => {
    if (subtabs) {
      return location.pathname.startsWith(sessionUrl);
    }
    return location.pathname === sessionUrl;
  };

  return (
    <Sidebar collapsible="icon" className="border-r border-border/50 bg-card/50 backdrop-blur-sm">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-foreground/80 font-semibold">
            {!collapsed && "GitHub Copilot News Analysis"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sessions.map((session) => (
                <Collapsible
                  key={session.url}
                  defaultOpen={isSessionActive(session.url, session.subtabs)}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    {session.subtabs ? (
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          className={`flex items-center justify-between w-full ${
                            isSessionActive(session.url, session.subtabs)
                              ? "bg-primary/10 text-primary font-medium"
                              : "hover:bg-muted/50"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <session.icon className="h-5 w-5" />
                            {!collapsed && <span>{session.title}</span>}
                          </div>
                          {!collapsed && (
                            <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                          )}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                    ) : (
                      <SidebarMenuButton asChild>
                        <NavLink
                          to={session.url}
                          className={({ isActive }) =>
                            `flex items-center gap-3 ${
                              isActive
                                ? "bg-primary/10 text-primary font-medium"
                                : "hover:bg-muted/50"
                            }`
                          }
                        >
                          <session.icon className="h-5 w-5" />
                          {!collapsed && <span>{session.title}</span>}
                        </NavLink>
                      </SidebarMenuButton>
                    )}
                    {session.subtabs && (
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {session.subtabs.map((subtab) => (
                            <SidebarMenuSubItem key={subtab.url}>
                              <SidebarMenuSubButton asChild>
                                <NavLink
                                  to={subtab.url}
                                  className={({ isActive }) =>
                                    isActive ? "bg-muted text-primary" : ""
                                  }
                                >
                                  <span>{subtab.title}</span>
                                </NavLink>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    )}
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
