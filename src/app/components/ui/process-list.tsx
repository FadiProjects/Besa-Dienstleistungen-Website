import React from 'react';

interface Step {
  number: string;
  text: string;
}

interface ProcessListProps {
  steps: Step[];
}

export const ProcessList = ({ steps }: ProcessListProps) => {
  return (
    <div className="flex flex-col">
      {steps.map((step, index) => (
        <div 
          key={index}
          className="reveal-item mb-4 flex flex-col sm:flex-row items-center sm:items-start gap-6 p-8 sm:p-12 bg-grey rounded-[8px] text-center sm:text-left border border-[#dddddd]"
        >
          <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-primary text-white text-2xl font-bold rounded-full shadow-md">
            {step.number}
          </div>
          
          <p className="leading-snug sm:pt-4">
            {step.text}
          </p>
        </div>
      ))}
    </div>
  );
};