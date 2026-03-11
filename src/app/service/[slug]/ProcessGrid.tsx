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

      <div className="grid grid-cols-1 border-border sm:grid-cols-2">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={[
              "flex h-full flex-col border-[rgba(255,255,255,0.1)] py-5 sm:py-[10px]",
              index < steps.length - 1 ? "border-b" : "",
              index % 2 === 0 ? "sm:border-r sm:pr-[10px]" : "sm:pl-[10px]",
              index < steps.length - (steps.length % 2 === 0 ? 2 : 1)
                ? "sm:border-b"
                : "sm:border-b-0",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <span className="mb-[10px] text-[12px] leading-[16px] font-light tracking-[0.16em] text-white/55 sm:mb-[8px] sm:tracking-normal sm:text-white">
              {step.number}
            </span>
            <h4 className="mb-[10px] text-[18px] leading-[26px] font-semibold text-white sm:mb-[8px] sm:text-[16px] sm:leading-[24px]">
              {step.title}
            </h4>
            <p className="whitespace-pre-line text-[14px] leading-[22px] font-light text-white/72 sm:text-[11px] sm:leading-[16px] sm:text-white">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
