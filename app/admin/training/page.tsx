'use client';

import { useState } from 'react';

export default function TrainingInterface() {
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const handleTraining = async () => {
    try {
      const response = await fetch('/api/train', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category,
          content,
          priority: 1
        })
      });

      if (response.ok) {
        alert('Entrenamiento completado');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Entrenar Asistente Legal</h1>
      
      <div className="space-y-4">
        <div>
          <label className="block mb-2">Categoría Legal:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-2">Contenido Legal:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-64 p-2 border rounded"
            placeholder="Ingrese el conocimiento legal aquí..."
          />
        </div>

        <button
          onClick={handleTraining}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Entrenar
        </button>
      </div>
    </div>
  );
} 