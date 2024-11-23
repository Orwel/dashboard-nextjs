import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function trainBot(trainingData: TrainingData[]) {
  try {
    // Guardar en la base de datos
    await prisma.legalContext.createMany({
      data: trainingData.map(data => ({
        type: 'custom_prompt',
        content: data.content,
        category: data.category,
        priority: data.priority
      }))
    });

    // También podrías crear embeddings
    const embeddings = await createEmbeddings(trainingData);
    await storeEmbeddings(embeddings);

  } catch (error) {
    console.error('Error training bot:', error);
    throw error;
  }
} 