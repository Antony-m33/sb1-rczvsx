import React from 'react';
import { Home, Search, Library, PlusSquare, Heart } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-black p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Música Online</h1>
      </div>
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center text-gray-300 hover:text-white">
              <Home className="mr-4" />
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-300 hover:text-white">
              <Search className="mr-4" />
              Buscar
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-300 hover:text-white">
              <Library className="mr-4" />
              Tu Biblioteca
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-8">
        <button className="flex items-center text-gray-300 hover:text-white mb-4">
          <PlusSquare className="mr-4" />
          Crear playlist
        </button>
        <button className="flex items-center text-gray-300 hover:text-white">
          <Heart className="mr-4" />
          Tus me gusta
        </button>
      </div>
    </div>
  );
};

export default Sidebar;