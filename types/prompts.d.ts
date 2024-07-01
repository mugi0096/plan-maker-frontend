export type DayPlan = {
  title: string;
  contents: string[];
  references: string[];
};

export type PromptResponse = {
  title: string;
  plans: DayPlan[];
};
