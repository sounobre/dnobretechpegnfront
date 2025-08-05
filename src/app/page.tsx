// src/app/page.tsx
import { Servico } from "@/types/servico";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"; // Importe o Card


async function getServicos(): Promise<Servico[]> {
  try {
    const response = await fetch('http://localhost:8080/servicos', {
      cache: 'no-store'
    });
  
    if (!response.ok) {
      console.error("Falha ao buscar serviços. Status:", response.status);
      return [];
    }
  
    return response.json();
  } catch(error) {
    console.error("Erro de rede ou na chamada da API:", error);
    return []; // Retorna um array vazio em caso de erro de rede
  }
}

export default async function Home() {
  const servicos = await getServicos();

  return (
    // Vamos organizar o conteúdo da página
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Serviços</h1>
        <p className="text-gray-500 mt-1">Gerencie os serviços oferecidos pela barbearia.</p>
      </div>

      {/* AQUI ESTÁ A MUDANÇA PRINCIPAL */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Serviços</CardTitle>
          <CardDescription>Abaixo estão todos os serviços cadastrados no sistema.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Duração (min)</TableHead>
                  <TableHead className="text-right">Preço</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {servicos.map((servico) => (
                  <TableRow key={servico.id}>
                    <TableCell className="font-medium">{servico.id}</TableCell>
                    <TableCell>{servico.nome}</TableCell>
                    <TableCell>{servico.duracaoEmMinutos}</TableCell>
                    <TableCell className="text-right">
                      {servico.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
