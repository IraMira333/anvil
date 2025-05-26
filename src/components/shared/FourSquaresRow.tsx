export const FourSquaresRow = ({ index }: { index?: number }) => {
  return (
    <div className="flex gap-[6px] ">
      <div className=" w-2 h-2 pc:w-[10px] pc:h-[10px] bg-title" />
      <div
        className={`w-2 h-2 pc:w-[10px] pc:h-[10px] ${index && index >= 2 ? "bg-title" : "bg-black30"}`}
      />
      <div
        className={`w-2 h-2 pc:w-[10px] pc:h-[10px] ${index && index >= 3 ? "bg-title" : "bg-black30"}`}
      />
      <div
        className={`w-2 h-2 pc:w-[10px] pc:h-[10px] ${index && index >= 4 ? "bg-title" : "bg-black30"}`}
      />
    </div>
  );
};
