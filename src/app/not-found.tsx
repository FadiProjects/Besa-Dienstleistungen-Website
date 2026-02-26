import Link from 'next/link';
import Button from '@/app/components/ui/button'
import { MoveLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Seite nicht gefunden</h2>
      <p className="text-paragraph max-w-md mb-8">
        Hoppla! Die Seite, nach der Sie suchen, scheint nicht zu existieren oder wurde verschoben.
      </p>
      <Button 
        href="/" 
        variant="primary" 
        title="Zurück zur Startseite von Besa Dienstleistungen Berlin" 
        icon={<MoveLeft size={20} />}
        className="w-full sm:w-auto"
    >
        Zurück zur Startseite
    </Button>
    </div>
  );
}
