import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Building } from "lucide-react";

interface LoginPageProps {
  onLogin: (userType: 'admin' | 'teacher' | 'student') => void;
}

export const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [email, setEmail] = useState("");
  const [selectedOrg, setSelectedOrg] = useState("");

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center gap-2">
          <Calendar className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold">calendrify.pro</span>
        </div>
        <Button variant="ghost" className="text-white hover:bg-white/10">
          Nova organização
        </Button>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)] px-4">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold text-white">Acessar painel</h1>
            <p className="text-slate-400 text-sm">
              Gerencie seus agendamentos pelo painel administrativo
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="organization" className="text-white text-sm">
                Organização
              </Label>
              <div className="relative">
                <Building className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <select
                  className="w-full pl-10 pr-3 py-3 bg-slate-800 border border-slate-700 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={selectedOrg}
                  onChange={(e) => setSelectedOrg(e.target.value)}
                >
                  <option value="">Selecione uma organização</option>
                  <option value="universidade-tech">Universidade Tech</option>
                  <option value="instituto-inovacao">Instituto de Inovação</option>
                  <option value="escola-negocios">Escola de Negócios</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white text-sm">
                Seu e-mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="exemplo@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:ring-primary focus:border-transparent"
              />
            </div>

            <Button 
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3"
              size="lg"
            >
              Acessar painel
            </Button>

            <div className="pt-6">
              <p className="text-sm text-slate-400 text-center mb-4">
                Ou acesse para preview (dados mockados):
              </p>
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  onClick={() => onLogin('admin')}
                  className="w-full bg-transparent border-slate-600 text-white hover:bg-slate-800"
                >
                  Login como Administrador
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => onLogin('teacher')}
                  className="w-full bg-transparent border-slate-600 text-white hover:bg-slate-800"
                >
                  Login como Professor
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => onLogin('student')}
                  className="w-full bg-transparent border-slate-600 text-white hover:bg-slate-800"
                >
                  Login como Aluno
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-6">
        <p className="text-slate-500 text-sm">
          Painel administrativo © calendrify.pro - 2024
        </p>
      </footer>
    </div>
  );
};