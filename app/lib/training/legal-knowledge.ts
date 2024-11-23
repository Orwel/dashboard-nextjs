interface TrainingData {
  category: string;
  content: string;
  priority: number;
}

const legalKnowledge: TrainingData[] = [
  {
    category: 'derecho_laboral',
    content: `
      // Aquí va tu conocimiento específico sobre derecho laboral
      1. Contratos de trabajo
      2. Despidos
      3. Indemnizaciones
      ...
    `,
    priority: 1
  },
  {
    category: 'derecho_civil',
    content: `
      // Conocimiento sobre derecho civil
      1. Contratos civiles
      2. Responsabilidad civil
      ...
    `,
    priority: 2
  }
]; 