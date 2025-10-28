export interface ProcessStep {
  id: string;
  title: string;
  emoji: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 'sourcing',
    title: 'Sourcing',
    emoji: '🌱',
  },
  {
    id: 'quality-check',
    title: 'Quality Check',
    emoji: '🔍',
  },
  {
    id: 'packaging',
    title: 'Packaging',
    emoji: '📦',
  },
  {
    id: 'shipping',
    title: 'Shipping',
    emoji: '🚢',
  }
];