'use client';

import React, { useState, useRef } from 'react';
import { useChat } from 'ai/react';

export function LegalChatbot() {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
    onResponse: (response) => {
      // Manejar la respuesta
      console.log('Chat response:', response);
    },
  });

  const handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/analyze-document', {
      method: 'POST',
      body: formData,
    });

    const analysis = await response.json();
    // Añadir el análisis al contexto del chat
  };

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto p-4">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 p-4 rounded-lg ${
              message.role === 'assistant' 
                ? 'bg-blue-100 ml-4' 
                : 'bg-gray-100 mr-4'
            }`}
          >
            {message.content}
          </div>
        ))}
      </div>

      <div className="border-t pt-4">
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept=".pdf"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFileUpload(file);
          }}
        />

        <form onSubmit={handleSubmit} className="flex gap-2">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="p-2 bg-gray-200 rounded"
          >
            📎
          </button>
          
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Haga su consulta legal aquí..."
            className="flex-1 p-2 border rounded"
          />
          
          <button 
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
} 