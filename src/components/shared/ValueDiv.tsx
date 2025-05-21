import { ListStyleTypeFourSquare } from "./ListStyleTypeFourSquare";

export const ValueDiv = ({
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
      className={`${className} relative p-6 w-[288px] h-[108px] bg-[url('/bg/rectangle.png')] bg-no-repeat bg-center bg-[length:100%_100%]`}
    >
      <h4 className=" font-exo font-semibold uppercase text-title mb-3">
        {title}
      </h4>
      <p className="w-[230px] text-sm13">{description}</p>
      <div className=" absolute top-6 right-6">
        <ListStyleTypeFourSquare index={index} />
      </div>
    </div>
  );
};
