'use client';

export default function DocumentUpload() {
  const handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('category', 'jurisprudencia'); // o la categoría que corresponda

    const response = await fetch('/api/train/documents', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Documento procesado y añadido al conocimiento');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cargar Documentos Legales</h1>
      
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFileUpload(file);
        }}
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100"
      />
    </div>
  );
} 