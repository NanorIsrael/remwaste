export type Item = {
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  area: string;
  created_at: Date;
  forbidden: boolean;
  hire_period_days: number;
  id: number;
  per_tonne_cost: number | null;
  per_tonne_cost_before_vat: number | null;
  postcode: string;
  price_before_vat: number;
  size: number;
  transport_cost: number | null;
  updated_at: Date;
  vat: number;
};
