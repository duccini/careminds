export function calculateGoalProgress(
  currentAmount: number,
  spentAmount: number
): string {
  const goal = spentAmount * 10;

  if (currentAmount === 0) return "0.00%";

  const progress = (currentAmount / goal) * 100;
  return `${progress.toFixed(2)}%`;
}
