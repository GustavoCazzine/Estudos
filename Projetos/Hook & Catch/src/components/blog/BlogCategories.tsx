
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const categories = [
  { id: 1, name: 'Equipamentos', count: 24, slug: 'equipamentos' },
  { id: 2, name: 'Técnicas', count: 18, slug: 'tecnicas' },
  { id: 3, name: 'Locais de Pesca', count: 15, slug: 'locais' },
  { id: 4, name: 'Espécies', count: 22, slug: 'especies' },
  { id: 5, name: 'Conservação', count: 12, slug: 'conservacao' },
  { id: 6, name: 'Culinária', count: 9, slug: 'culinaria' },
  { id: 7, name: 'Dicas', count: 30, slug: 'dicas' },
  { id: 8, name: 'Torneios', count: 11, slug: 'torneios' }
];

const popularTags = [
  'Pesca Esportiva', 'Água Doce', 'Equipamentos', 'Iscas Artificiais', 
  'Carretilha', 'Fly Fishing', 'Tucunaré', 'Pesca de Praia', 'Robalo', 
  'Dourado', 'Molinete', 'Pesque e Solte', 'Iniciantes'
];

const BlogCategories = () => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Categorias</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.id} className="border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                <Link 
                  to={`/blog/categoria/${category.slug}`}
                  className="flex justify-between items-center hover:text-fishing-600 transition-colors"
                >
                  <span>{category.name}</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Tags Populares</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag, index) => (
              <Link 
                key={index}
                to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-gray-100 hover:bg-fishing-100 hover:text-fishing-800 px-3 py-1 rounded-full text-sm text-gray-700 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogCategories;
