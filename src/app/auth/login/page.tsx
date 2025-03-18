import { Title } from '@/components';
import { LoginForm } from './ui/LoginForm';

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52 bg-white">
      <Title title="Ingresar" />

      <LoginForm />

    </div>
  );
}