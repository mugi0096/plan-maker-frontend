import PlanCard from "@/components/PlanCard.tsx";
import { PromptResponse } from "@/types/prompts.d.ts";

const Plans = ({ title, plans }: PromptResponse) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {plans.map((plan) => <PlanCard plan={plan} />)}
      </div>
    </div>
  );
};

export default Plans;
