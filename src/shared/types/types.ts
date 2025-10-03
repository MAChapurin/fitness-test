export interface PlanCardProps {
  id: string;
  period: string;
  price: number;
  full_price: number;
  is_best: boolean;
  selected?: boolean;
  text: string;
  onClick?: () => void;
  isLate: boolean;
}

export type EventMap = {
  "plan:selected": Partial<PlanCardProps>;
  "countdown:ended": void;
};
