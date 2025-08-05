// src/components/Sidebar.tsx
import { Package, GanttChartSquare } from 'lucide-react';

export function Sidebar() {
  return (
    // MUDANÇAS PRINCIPAIS AQUI:
    // 1. Adicionamos `h-full` para garantir que a sidebar ocupe 100% da altura.
    // 2. Usamos `flex flex-col` para transformar a sidebar em um container flexível vertical.
    // 3. Aplicamos nossas novas cores personalizadas: `bg-sidebar` e `text-sidebar-foreground`.
    <aside className="w-64 bg-sidebar text-sidebar-foreground p-6 flex flex-col h-full">
      
      {/* Seção do Logo (continua no topo) */}
      <div className='flex items-center gap-3 mb-10'>
        <GanttChartSquare className="h-8 w-8 text-teal-400" />
        <h1 className="text-2xl font-bold text-white">AgendaBarber</h1>
      </div>

      {/* Seção da Navegação */}
      {/* MUDANÇA: Adicionamos a classe `flex-1` a esta div.
        Isso faz com que a área de navegação "cresça" e ocupe todo o espaço
        vertical disponível, empurrando qualquer conteúdo futuro para o final.
      */}
      <div className="flex-1">
        <nav className="space-y-2">
          {/* Link Ativo */}
          <a href="#" className="flex items-center gap-3 rounded-lg bg-teal-500/20 text-white px-4 py-2">
            <Package className="h-5 w-5" />
            <span className="font-medium">Serviços</span>
          </a>
          {/* Outros exemplos de links seriam adicionados aqui */}
        </nav>
      </div>

      {/* Seção Inferior (Footer da Sidebar) */}
      {/* Esta seção agora ficará "colada" na parte de baixo da sidebar,
        graças ao `flex-1` que colocamos na div da navegação.
      */}
      <div className="border-t border-gray-500 pt-4">
        <p className="text-xs text-gray-400">© 2025 AgendaBarber</p>
      </div>

    </aside>
  );
}