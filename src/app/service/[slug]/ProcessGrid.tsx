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

      <div className="grid grid-cols-2  border-border">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`
            flex flex-col h-full border-border border-[rgba(255,255,255,0.1)]
              ${index % 2 === 0 ? "border-r" : ""} 
              ${
                index % 2 === 0 ? "py-[10px] pr-[10px]" : "py-[10px] pl-[10px]"
              } 
              ${
                index < steps.length - (steps.length % 2 === 0 ? 2 : 1)
                  ? "border-b"
                  : ""
              }
              !border-[rgba(255,255,255,0.1)]
            `}
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
        ))}
      </div>
    </div>
  );
};
