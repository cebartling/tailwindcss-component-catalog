import {useEffect, useState} from "react";

type StepProgressProps = {
  step: number;
};

const MIN = 0;
const MAX = 100;
const normalize = (value: number) => ((value - MIN) * 100) / (MAX - MIN);

export default function StepProgress({step}: StepProgressProps) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${normalize(step)}%`
      };

      setStyle(newStyle);
    }, 200);
    return () => clearTimeout(timer);
  }, [step]);

  return (
    <div>
      <div className="step-progress">
        <div className="step-progress-done" style={style}></div>
      </div>
    </div>
  );
}
