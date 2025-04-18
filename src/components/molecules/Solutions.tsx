import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type SolutionsProps = {
  percentage: number;
  title: string;
};

export default function Solutions({ percentage, title }: SolutionsProps) {
  return (
    <div className="Solutions grid grid-col-1 text-center gap-y-3">
      <div className="w-34 h-34">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
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
