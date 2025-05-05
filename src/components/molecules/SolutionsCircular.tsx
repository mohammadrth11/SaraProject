import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type SolutionsProps = {
  percentage: number;
  title: string;
};

export default function Solutions({ percentage, title }: SolutionsProps) {
  const [value, setValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1000; // 1 second
      const steps = 30; // smoother animation
      const increment = percentage / steps;
      const intervalTime = duration / steps;

      const interval = setInterval(() => {
        start += increment;
        if (start >= percentage) {
          clearInterval(interval);
          setValue(percentage);
        } else {
          setValue(Math.ceil(start));
        }
      }, intervalTime);

      return () => clearInterval(interval);
    }
  }, [inView, percentage]);

  return (
    <div ref={ref} className="Solutions grid grid-col-1 text-center gap-y-3">
      <div className="w-34 h-34">
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          styles={buildStyles({
            textColor: "black",
            pathColor: "red",
            trailColor: "#d1d5db",
            textSize: "22px",
            strokeLinecap: "round",
          })}
        />
      </div>
      <div className="solutions-title">{title}</div>
      <div className="line w-13 h-0.5 bg-amber-950 mx-auto"></div>
    </div>
  );
}
