import React from 'react';

const MainContent = () => {
  const playlists = [
    { id: 1, name: 'Descubrimiento semanal', image: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    { id: 2, name: 'Top 50 - Global', image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    { id: 3, name: 'Éxitos de hoy', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    { id: 4, name: 'Mood Booster', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  ];

  return (
    <div className="flex-1 p-8 overflow-y-auto bg-gradient-to-b from-gray-900 to-black">
      <h2 className="text-3xl font-bold mb-6">Bienvenido</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition duration-300">
            <img src={playlist.image} alt={playlist.name} className="w-full aspect-square object-cover rounded-md mb-4" />
            <h3 className="font-semibold">{playlist.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;