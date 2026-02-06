import { cn } from "@/lib/utils";

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

interface ProcessGridProps {
  steps: ProcessStep[];
  title?: string;
}

export const ProcessGrid = ({ steps, title }: ProcessGridProps) => {
  return (
    <div className="mt-8">
      {title ? (
        <div className="text-[16px] text-white leading-[24px] font-semibold">
          {title}
        </div>
      ) : null}

      <div className="grid grid-cols-2">
        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;
          const isLastRow =
            index >= steps.length - (steps.length % 2 === 0 ? 2 : 1);

          return (
            <div
              key={step.id}
              className={cn(
                "flex flex-col h-full border-white/10",
                isLeft ? "border-r pr-2.5" : "pl-2.5",
                !isLastRow && "border-b",
                "py-2.5"
              )}
            >
              <span className="text-[11px] text-white leading-[16px] font-light mb-[8px]">
                {step.number}
              </span>
              <h4 className="text-[16px] text-white leading-[24px] font-semibold mb-[8px]">
                {step.title}
              </h4>
              <p className="text-[11px] text-white leading-[16px] font-light">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
