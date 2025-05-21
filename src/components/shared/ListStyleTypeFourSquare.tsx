export const ListStyleTypeFourSquare = ({ index }: { index?: number }) => {
  return (
    <div className="relative w-[10px] h-[10px]">
      <div className="absolute top-0 left-0 w-1 h-1 bg-accent"></div>
      <div
        className={`absolute top-0 right-0 w-1 h-1 ${index && index >= 2 ? "bg-accent" : "border border-accent"} `}
      ></div>
      <div
        className={`absolute bottom-0 left-0 w-1 h-1 ${index && index >= 3 ? "bg-accent" : "border border-accent"}`}
      ></div>
      <div
        className={`absolute bottom-0 right-0 w-1 h-1 ${index && index >= 4 ? "bg-accent" : "border border-accent"}`}
      ></div>
    </div>
  );
};
