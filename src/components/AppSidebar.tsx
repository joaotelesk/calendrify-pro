import {
  BookOpen,
  Building,
  Calendar,
  Clock,
  CreditCard,
  LogOut,
  MapPin,
  Settings,
  User,
  Users,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  userType: "admin" | "teacher" | "student";
  onLogout: () => void;
}

const adminItems = [
  { title: "Dashboard", url: "/dashboard", icon: Calendar },
  { title: "Gerenciar Salas", url: "/rooms", icon: Building },
  { title: "Usuários", url: "/users", icon: Users },
  { title: "Relatórios", url: "/reports", icon: BookOpen },
  { title: "Configurações", url: "/settings", icon: Settings },
];

const teacherItems = [
  { title: "Dashboard", url: "/dashboard", icon: Calendar },
  { title: "Minhas Reservas", url: "/my-bookings", icon: Clock },
  { title: "Criar Evento", url: "/create-event", icon: MapPin },
  { title: "Pagamentos", url: "/payments", icon: CreditCard },
];

const studentItems = [
  { title: "Dashboard", url: "/dashboard", icon: Calendar },
  { title: "Eventos Disponíveis", url: "/events", icon: BookOpen },
  { title: "Minhas Participações", url: "/my-events", icon: User },
];

export function AppSidebar({ userType, onLogout }: AppSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const items =
    userType === "admin"
      ? adminItems
      : userType === "teacher"
      ? teacherItems
      : studentItems;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-primary font-medium"
      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground";

  const getUserTitle = () => {
    switch (userType) {
      case "admin":
        return "Administrador";
      case "teacher":
        return "Professor";
      case "student":
        return "Aluno";
    }
  };

  const getUserInitials = () => {
    switch (userType) {
      case "admin":
        return "AD";
      case "teacher":
        return "PR";
      case "student":
        return "AL";
    }
  };

  return (
    <Sidebar className={collapsed ? "w-14" : "w-60"} collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-md flex items-center justify-center">
            <Calendar className="h-4 w-4 text-white" />
          </div>
          {!collapsed && (
            <div>
              <p className="font-semibold text-sm">Calendrify Pro</p>
              <p className="text-xs text-muted-foreground">
                Sistema de Agendamento
              </p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="p-3 space-y-3">
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8">
              <AvatarFallback className="text-xs">
                {getUserInitials()}
              </AvatarFallback>
            </Avatar>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">João Silva</p>
                <p className="text-xs text-muted-foreground">
                  {getUserTitle()}
                </p>
              </div>
            )}
          </div>
          {!collapsed && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onLogout}
              className="w-full justify-start text-muted-foreground hover:text-foreground"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
