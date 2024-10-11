import React from 'react';
import { Play, SkipBack, SkipForward, Volume2 } from 'lucide-react';

const Player = () => {
  return (
    <div className="bg-gray-900 border-t border-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Album cover" className="w-14 h-14 rounded-md mr-4" />
          <div>
            <h4 className="font-semibold">Nombre de la canción</h4>
            <p className="text-sm text-gray-400">Artista</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <SkipBack className="text-gray-400 hover:text-white cursor-pointer" />
          <Play className="text-white bg-green-500 rounded-full p-1 cursor-pointer" />
          <SkipForward className="text-gray-400 hover:text-white cursor-pointer" />
        </div>
        <div className="flex items-center">
          <Volume2 className="text-gray-400 mr-2" />
          <div className="w-24 h-1 bg-gray-600 rounded-full">
            <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;