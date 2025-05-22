import { ThreeSquares } from "./ThreeSquares";

export const StagesCard = ({
  title,
  description,
  index,
  className,
}: {
  title: string;
  description: string;
  index: number;
  className?: string;
}) => {
  return (
    <div
      className={`${className} relative p-4 w-[288px] h-[165px] bg-[url('/bg/rectangle2.svg')] bg-no-repeat bg-center bg-[length:100%_100%]`}
    >
      <div className="flex gap-4 items-center mb-4">
        <span className="w-6 h-6 font-exo font-semibold uppercase flex items-center justify-center">
          0{index + 1}
        </span>
        <div className=" flex gap-2 items-center">
          <div>
            <ThreeSquares />
          </div>
          <h4 className=" font-exo font-semibold uppercase text-title">
            {title}
          </h4>
        </div>
      </div>
      <p className="text-sm12">{description}</p>
    </div>
  );
};
