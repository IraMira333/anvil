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
      className={`${className} relative p-4 pc:p-8 w-[288px] h-[165px] tab:w-[350px] pc:w-[394px] tab:h-[170px] pc:h-[210px] bg-[url('/bg/rectangle2.svg')] bg-no-repeat bg-center bg-cover `}
    >
      <div
        className={`flex gap-4 items-center mb-4 pc:justify-between ${index === 2 ? "pc:gap-[161px]" : "pc:gap-[125px]"} `}
      >
        <span className="w-6 h-6 font-exo font-semibold uppercase flex items-center justify-center">
          0{index + 1}
        </span>
        <div className=" flex gap-2 items-center">
          <div>
            <ThreeSquares />
          </div>
          <h4 className=" font-exo font-semibold uppercase text-title pc:text-lg">
            {title}
          </h4>
        </div>
      </div>
      <p className="text-base tab:text-base13">{description}</p>
    </div>
  );
};
