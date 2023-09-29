import { Footer, Header } from '@/components';
import { UserProvider } from '@/providers';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <Header />
      {children}
      <Footer />
    </UserProvider>
  );
}
