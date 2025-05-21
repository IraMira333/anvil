export const FourSquaresRow = ({ index }: { index?: number }) => {
  return (
    <div className="flex gap-[6px] ">
      <div className=" w-2 h-2 bg-title" />
      <div
        className={`w-2 h-2  ${index && index >= 2 ? "bg-title" : "bg-black30"}`}
      />
      <div
        className={`w-2 h-2 ${index && index >= 3 ? "bg-title" : "bg-black30"}`}
      />
      <div
        className={`w-2 h-2 ${index && index >= 4 ? "bg-title" : "bg-black30"}`}
      />
    </div>
  );
};
