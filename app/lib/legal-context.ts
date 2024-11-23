export async function getLegalContext(category?: string) {
  // Obtener prompts personalizados y conocimiento legal de la base de datos
  const context = await prisma.legalContext.findMany({
    where: {
      category: category || undefined,
    },
    orderBy: {
      priority: 'desc',
    },
  });

  return context;
} 