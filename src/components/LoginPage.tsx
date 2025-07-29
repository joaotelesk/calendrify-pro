import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Calendar, Building } from "lucide-react";

interface LoginPageProps {
  onLogin: (userType: 'admin' | 'teacher' | 'student') => void;
}

export const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [selectedOrg, setSelectedOrg] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <Calendar className="h-6 w-6 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold">Calendrify Pro</CardTitle>
            <CardDescription>
              Sistema de Agendamento de Espaços e Eventos
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="organization">Organização</Label>
            <div className="relative">
              <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <select
                className="w-full pl-10 pr-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                value={selectedOrg}
                onChange={(e) => setSelectedOrg(e.target.value)}
              >
                <option value="">Selecione uma organização</option>
                <option value="univrsidade-tech">Universidade Tech</option>
                <option value="instituto-inovacao">Instituto de Inovação</option>
                <option value="escola-negócios">Escola de Negócios</option>
              </select>
            </div>
          </div>

          <Button 
            className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 font-medium"
            size="lg"
          >
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Entrar com Google
          </Button>

          <Separator />

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground text-center mb-4">
              Ou faça login para preview (dados mockados):
            </p>
            <div className="grid gap-2">
              <Button 
                variant="outline" 
                onClick={() => onLogin('admin')}
                className="w-full"
              >
                Login como Administrador
              </Button>
              <Button 
                variant="outline" 
                onClick={() => onLogin('teacher')}
                className="w-full"
              >
                Login como Professor
              </Button>
              <Button 
                variant="outline" 
                onClick={() => onLogin('student')}
                className="w-full"
              >
                Login como Aluno
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};