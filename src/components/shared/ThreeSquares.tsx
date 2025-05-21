export const ThreeSquares = () => {
  return (
    <div className="relative w-[10px] h-[10px]">
      <div className="absolute top-0 left-0 w-1 h-1 bg-accent" />
      <div className="absolute top-0 right-0 w-1 h-1 bg-accent" />
      <div className="absolute bottom-0 left-0 w-1 h-1 bg-accent" />
    </div>
  );
};
