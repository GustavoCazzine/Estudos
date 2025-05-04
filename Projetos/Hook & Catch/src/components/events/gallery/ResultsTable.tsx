
import React from 'react';
import { CameraIcon } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { resultsData } from './galleryData';

const ResultsTable = () => {
  return (
    <div className="overflow-x-auto">
      <div className="bg-gray-100 rounded-lg p-4 mb-6 flex items-center">
        <CameraIcon className="h-5 w-5 text-fishing-600 mr-2" />
        <span className="text-sm text-gray-700">Deslize horizontalmente para visualizar todos os dados na tabela</span>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16 text-center">Posição</TableHead>
            <TableHead>Participante</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Captura</TableHead>
            <TableHead className="text-right">Pontos</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {resultsData.map((row, index) => (
            <TableRow key={index} className="hover:bg-gray-50 transition-colors">
              <TableCell className="text-center font-medium">
                {row.position === 1 ? (
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-600">1</span>
                ) : row.position === 2 ? (
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600">2</span>
                ) : row.position === 3 ? (
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-600">3</span>
                ) : (
                  row.position
                )}
              </TableCell>
              <TableCell>{row.participant}</TableCell>
              <TableCell>
                <Badge variant="outline" className={
                  row.category === 'Água Doce' 
                    ? 'border-blue-500 text-blue-500' 
                    : 'border-indigo-500 text-indigo-500'
                }>
                  {row.category}
                </Badge>
              </TableCell>
              <TableCell>{row.catch}</TableCell>
              <TableCell className="text-right font-medium">{row.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ResultsTable;
