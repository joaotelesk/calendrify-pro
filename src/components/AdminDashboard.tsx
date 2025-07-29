import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Users, 
  Calendar, 
  TrendingUp, 
  MapPin, 
  Clock,
  DollarSign,
  AlertCircle
} from "lucide-react";

const statsCards = [
  {
    title: "Total de Salas",
    value: "24",
    change: "+2 este mês",
    icon: Building,
    color: "text-blue-600"
  },
  {
    title: "Usuários Ativos",
    value: "156",
    change: "+12 esta semana",
    icon: Users,
    color: "text-green-600"
  },
  {
    title: "Reservas do Mês",
    value: "89",
    change: "+23% vs mês anterior",
    icon: Calendar,
    color: "text-purple-600"
  },
  {
    title: "Receita do Mês",
    value: "R$ 12.450",
    change: "+15% vs mês anterior",
    icon: DollarSign,
    color: "text-emerald-600"
  }
];

const recentBookings = [
  {
    id: 1,
    room: "Auditório Principal",
    user: "Prof. Maria Silva",
    date: "2024-01-29",
    time: "14:00 - 16:00",
    status: "confirmado",
    amount: "R$ 250"
  },
  {
    id: 2,
    room: "Lab. Informática 1",
    user: "Prof. João Santos",
    date: "2024-01-29",
    time: "09:00 - 11:00",
    status: "pendente",
    amount: "R$ 150"
  },
  {
    id: 3,
    room: "Sala de Reuniões A",
    user: "Prof. Ana Costa",
    date: "2024-01-30",
    time: "16:00 - 18:00",
    status: "confirmado",
    amount: "R$ 180"
  }
];

const alerts = [
  {
    id: 1,
    message: "Sala de Informática 2 com problema no ar condicionado",
    type: "warning",
    time: "2h atrás"
  },
  {
    id: 2,
    message: "Auditório Principal reservado para evento especial amanhã",
    type: "info",
    time: "1 dia atrás"
  }
];

export const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((stat, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Bookings */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Reservas Recentes</CardTitle>
                <CardDescription>
                  Últimas reservas realizadas no sistema
                </CardDescription>
              </div>
              <Button variant="outline" size="sm">
                Ver todas
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{booking.room}</p>
                      <p className="text-sm text-muted-foreground">{booking.user}</p>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {booking.date} • {booking.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={booking.status === "confirmado" ? "default" : "secondary"}
                        className={booking.status === "confirmado" ? "bg-success" : ""}
                      >
                        {booking.status}
                      </Badge>
                      <span className="font-medium">{booking.amount}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Alerts and Quick Actions */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Alertas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className="p-3 border rounded-lg">
                  <p className="text-sm">{alert.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" variant="outline">
                <Building className="h-4 w-4 mr-2" />
                Adicionar Nova Sala
              </Button>
              <Button className="w-full" variant="outline">
                <Users className="h-4 w-4 mr-2" />
                Gerenciar Usuários
              </Button>
              <Button className="w-full" variant="outline">
                <TrendingUp className="h-4 w-4 mr-2" />
                Ver Relatórios
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};