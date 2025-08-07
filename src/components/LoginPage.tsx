import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Building, Chrome, Square } from "lucide-react";

interface LoginPageProps {
  onLogin: (userType: 'admin' | 'teacher' | 'student') => void;
}

export const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [email, setEmail] = useState("");
  const [selectedOrg, setSelectedOrg] = useState("");

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Banner */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-white p-12 text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Calendrify Pro</h1>
            <p className="text-xl text-slate-300 mb-8">
              Sistema completo de agendamento de espaços e eventos
            </p>
          </div>
          
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-slate-300">Gestão inteligente de reservas</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-slate-300">Integração com calendários</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-slate-300">Relatórios em tempo real</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-slate-300">Controle de acesso por perfil</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 bg-slate-900 text-white flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between p-6">
          <div className="flex items-center gap-2 lg:hidden">
            <Calendar className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">calendrify.pro</span>
          </div>
          <Button variant="ghost" className="text-white hover:bg-white/10 ml-auto">
            Nova organização
          </Button>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-6 py-8">
          <div className="w-full max-w-sm space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-white">Acessar painel</h2>
              <p className="text-slate-400">
                Gerencie seus agendamentos pelo painel administrativo
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="organization" className="text-white text-sm font-medium">
                  Organização
                </Label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <select
                    className="w-full pl-10 pr-3 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
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
                <Label htmlFor="email" className="text-white text-sm font-medium">
                  Seu e-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="exemplo@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:ring-primary focus:border-transparent py-3 rounded-lg transition-colors"
                />
              </div>

              <Button 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg transition-colors"
                size="lg"
              >
                Acessar painel
              </Button>

              <div className="space-y-3 mt-6">
                <Button 
                  variant="outline" 
                  className="w-full bg-white border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg transition-colors flex items-center justify-center gap-3 shadow-sm"
                >
                  <Chrome className="w-5 h-5 text-red-500" />
                  Entrar com Google
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full bg-white border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg transition-colors flex items-center justify-center gap-3 shadow-sm"
                >
                  <Square className="w-5 h-5 text-blue-600" />
                  Entrar com Microsoft
                </Button>
              </div>

              <div className="pt-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-slate-700" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-slate-900 px-2 text-slate-400">Ou acesse para preview</span>
                  </div>
                </div>
                
                <div className="space-y-3 mt-6">
                  <Button 
                    variant="outline" 
                    onClick={() => onLogin('admin')}
                    className="w-full bg-transparent border-slate-600 text-white hover:bg-slate-800 py-2.5 rounded-lg transition-colors"
                  >
                    Login como Administrador
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => onLogin('teacher')}
                    className="w-full bg-transparent border-slate-600 text-white hover:bg-slate-800 py-2.5 rounded-lg transition-colors"
                  >
                    Login como Professor
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => onLogin('student')}
                    className="w-full bg-transparent border-slate-600 text-white hover:bg-slate-800 py-2.5 rounded-lg transition-colors"
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
    </div>
  );
};