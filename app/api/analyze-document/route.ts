import { NextResponse } from 'next/server';
import { PDFLoader } from 'langchain/document_loaders/fs/pdf';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { MemoryVectorStore } from 'langchain/vectorstores/memory';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    // Cargar PDF
    const loader = new PDFLoader(file);
    const docs = await loader.load();
    
    // Crear embeddings
    const vectorStore = await MemoryVectorStore.fromDocuments(
      docs,
      new OpenAIEmbeddings()
    );
    
    // Analizar contenido
    const relevantContent = await vectorStore.similaritySearch(
      'Resumen legal del documento',
      5
    );

    return NextResponse.json({ analysis: relevantContent });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error analyzing document' },
      { status: 500 }
    );
  }
} 