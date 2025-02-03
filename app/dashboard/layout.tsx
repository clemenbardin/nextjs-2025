// app/layout.tsx (ou un nouveau fichier app/components/layout.tsx)
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import SideNav from '@/app/ui/dashboard/sidenav'; // Importez votre SideNav

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen">
          <aside className="w-64 md:w-80">
            <SideNav />
          </aside>
          <main className="mt-3 ml-5 overflow-y-auto"> {/* Contenu principal (Dashboard) */}
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}