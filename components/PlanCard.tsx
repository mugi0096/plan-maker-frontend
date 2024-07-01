import { DayPlan } from '@/types/prompts.d.ts';
interface PlanCardProps {
  plan: DayPlan;
}

const PlanCard = ({ plan }: PlanCardProps) => {
  return (
    <div className='animate-fadeIn flex flex-col p-2 border rounded bg-gradient-to-br from-teal-400 to-blue-300 w-96'>
      <h2 className='text-lg font-bold text-white'>{plan.title}</h2>
      <ul className='mb-2'>
        {plan.contents.map((content) => <li className='text-white'>{content}</li>)}
      </ul>

      {plan.references?.length > 0 &&
        (
          <>
            <div className='text-lg font-bold text-white'>References</div>
            <ul>
              {plan.references.map((reference) => (
                <li className='text-white'>
                  {reference.startsWith('http')
                    ? <a href={reference}>{reference}</a>
                    : <p>{reference}</p>}
                </li>
              ))}
            </ul>
          </>
        )}
    </div>
  );
};

export default PlanCard;
