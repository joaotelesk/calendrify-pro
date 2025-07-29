import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users,
  Search,
  BookOpen,
  CheckCircle,
  Filter,
  Share
} from "lucide-react";

const myEvents = [
  {
    id: 1,
    title: "Aula de Algoritmos Avançados",
    room: "Auditório Principal",
    professor: "Prof. Maria Silva",
    date: "2024-01-30",
    time: "14:00 - 16:00",
    status: "confirmado"
  },
  {
    id: 2,
    title: "Workshop de React",
    room: "Lab. Informática 1",
    professor: "Prof. João Santos",
    date: "2024-02-01",
    time: "09:00 - 12:00",
    status: "confirmado"
  }
];

const availableEvents = [
  {
    id: 3,
    title: "Palestra: Futuro da IA",
    room: "Auditório Principal",
    professor: "Prof. Ana Costa",
    date: "2024-02-03",
    time: "19:00 - 21:00",
    spots: 45,
    totalSpots: 50,
    category: "Palestra",
    description: "Uma visão abrangente sobre as tendências e o futuro da Inteligência Artificial.",
    free: true
  },
  {
    id: 4,
    title: "Workshop: Design Thinking",
    room: "Sala de Reuniões A",
    professor: "Prof. Carlos Lima",
    date: "2024-02-05",
    time: "14:00 - 17:00",
    spots: 8,
    totalSpots: 15,
    category: "Workshop",
    description: "Aprenda metodologias de Design Thinking para resolver problemas complexos.",
    free: false
  },
  {
    id: 5,
    title: "Seminário: Sustentabilidade Empresarial",
    room: "Auditório Secundário",
    professor: "Prof. Lucia Ferreira",
    date: "2024-02-07",
    time: "16:00 - 18:00",
    spots: 75,
    totalSpots: 80,
    category: "Seminário",
    description: "Como implementar práticas sustentáveis em empresas modernas.",
    free: true
  }
];

export const StudentDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Eventos Confirmados
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">próximos 7 dias</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Eventos Disponíveis
            </CardTitle>
            <BookOpen className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">neste mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Eventos Participados
            </CardTitle>
            <Calendar className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">total este ano</p>
          </CardContent>
        </Card>
      </div>

      {/* My Events */}
      <Card>
        <CardHeader>
          <CardTitle>Meus Próximos Eventos</CardTitle>
          <CardDescription>
            Eventos confirmados em que você está participando
          </CardDescription>
        </CardHeader>
        <CardContent>
          {myEvents.length > 0 ? (
            <div className="space-y-4">
              {myEvents.map((event) => (
                <div key={event.id} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {event.professor}
                      </p>
                    </div>
                    <Badge className="bg-success">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Confirmado
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {event.room}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {event.date} • {event.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Você não tem eventos confirmados</p>
              <p className="text-sm">Explore os eventos disponíveis abaixo</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Available Events */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Eventos Disponíveis</CardTitle>
              <CardDescription>
                Descubra novos eventos e workshops para participar
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar eventos..."
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {availableEvents.map((event) => (
              <div key={event.id} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">{event.title}</h4>
                      {event.free && (
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          Gratuito
                        </Badge>
                      )}
                      <Badge variant="secondary">
                        {event.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {event.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {event.professor}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {event.room}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {event.date} • {event.time}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {event.spots} / {event.totalSpots} vagas
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button className="flex-1">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Confirmar Participação
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};