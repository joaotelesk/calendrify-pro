import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Plus,
  CreditCard,
  Users,
  Link,
  CheckCircle
} from "lucide-react";

const upcomingReservations = [
  {
    id: 1,
    room: "Auditório Principal",
    event: "Aula de Algoritmos Avançados",
    date: "2024-01-30",
    time: "14:00 - 16:00",
    status: "confirmado",
    participants: 45,
    link: "https://calendrify.com/event/abc123"
  },
  {
    id: 2,
    room: "Lab. Informática 1",
    event: "Workshop de React",
    date: "2024-02-01",
    time: "09:00 - 12:00",
    status: "pendente_pagamento",
    participants: 12,
    link: "https://calendrify.com/event/def456"
  },
  {
    id: 3,
    room: "Sala de Reuniões B",
    event: "Orientação de TCC",
    date: "2024-02-02",
    time: "16:00 - 17:00",
    status: "confirmado",
    participants: 8,
    link: "https://calendrify.com/event/ghi789"
  }
];

const availableRooms = [
  {
    id: 1,
    name: "Sala de Reuniões A",
    capacity: 20,
    price: "R$ 80/hora",
    available: "Hoje 18:00 - 22:00",
    features: ["Projetor", "Quadro", "AC"]
  },
  {
    id: 2,
    name: "Lab. Informática 2",
    capacity: 30,
    price: "R$ 120/hora",
    available: "Amanhã 08:00 - 12:00",
    features: ["30 PCs", "Projetor", "AC"]
  },
  {
    id: 3,
    name: "Auditório Secundário",
    capacity: 100,
    price: "R$ 200/hora",
    available: "Amanhã 14:00 - 18:00",
    features: ["Som", "Iluminação", "Palco"]
  }
];

export const TeacherDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Próximas Reservas
            </CardTitle>
            <Calendar className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">nos próximos 7 dias</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total de Participantes
            </CardTitle>
            <Users className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65</div>
            <p className="text-xs text-muted-foreground">em eventos ativos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pagamentos Pendentes
            </CardTitle>
            <CreditCard className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">R$ 360 total</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* My Reservations */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Minhas Reservas</CardTitle>
                <CardDescription>
                  Eventos e reservas agendadas
                </CardDescription>
              </div>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Nova Reserva
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingReservations.map((reservation) => (
                <div key={reservation.id} className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium">{reservation.event}</h4>
                      <p className="text-sm text-muted-foreground flex items-center mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {reservation.room}
                      </p>
                    </div>
                    <Badge 
                      variant={reservation.status === "confirmado" ? "default" : "secondary"}
                      className={reservation.status === "confirmado" ? "bg-success" : "bg-warning"}
                    >
                      {reservation.status === "confirmado" ? "Confirmado" : "Pag. Pendente"}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {reservation.date} • {reservation.time}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {reservation.participants} participantes
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Link className="h-4 w-4 mr-2" />
                      Copiar Link
                    </Button>
                    {reservation.status === "pendente_pagamento" && (
                      <Button size="sm" className="flex-1">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Pagar Agora
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Available Rooms */}
        <Card>
          <CardHeader>
            <CardTitle>Salas Disponíveis</CardTitle>
            <CardDescription>
              Próximos horários disponíveis para reserva
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {availableRooms.map((room) => (
                <div key={room.id} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-medium">{room.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Capacidade: {room.capacity} pessoas
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-primary">{room.price}</p>
                      <p className="text-xs text-muted-foreground">{room.available}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {room.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full" variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    Reservar Agora
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-20 flex-col space-y-2" variant="outline">
              <Plus className="h-6 w-6" />
              <span>Criar Novo Evento</span>
            </Button>
            <Button className="h-20 flex-col space-y-2" variant="outline">
              <Calendar className="h-6 w-6" />
              <span>Ver Calendário</span>
            </Button>
            <Button className="h-20 flex-col space-y-2" variant="outline">
              <CreditCard className="h-6 w-6" />
              <span>Histórico de Pagamentos</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};