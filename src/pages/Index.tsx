import { useState } from "react";
import { LoginPage } from "@/components/LoginPage";
import { DashboardLayout } from "@/components/DashboardLayout";
import { AdminDashboard } from "@/components/AdminDashboard";
import { TeacherDashboard } from "@/components/TeacherDashboard";
import { StudentDashboard } from "@/components/StudentDashboard";

type UserType = 'admin' | 'teacher' | 'student' | null;

const Index = () => {
  const [userType, setUserType] = useState<UserType>(null);

  const handleLogin = (type: 'admin' | 'teacher' | 'student') => {
    setUserType(type);
  };

  const handleLogout = () => {
    setUserType(null);
  };

  if (!userType) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const renderDashboard = () => {
    switch (userType) {
      case 'admin':
        return <AdminDashboard />;
      case 'teacher':
        return <TeacherDashboard />;
      case 'student':
        return <StudentDashboard />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout userType={userType} onLogout={handleLogout}>
      {renderDashboard()}
    </DashboardLayout>
  );
};

export default Index;
