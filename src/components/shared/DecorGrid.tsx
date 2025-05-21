export const DecorGrid = () => {
  return (
    <>
      <div className="absolute inset-x-0 top-0 bottom-[58px] grid grid-cols-2 grid-rows-2 pointer-events-none z-0">
        <div className="border-r  border-title20" />
        <div />
        <div className="border-t border-r border-title20" />
        <div className="border-t border-title20" />
      </div>
      <div className="absolute left-1/2 top-[calc(50%-29px)] -translate-x-1/2 -translate-y-1/2 w-8 h-8 grid grid-cols-2 grid-rows-2 pointer-events-none">
        <div className="border-r  border-title" />
        <div />
        <div className="border-t border-r border-title" />
        <div className="border-t border-title" />
      </div>
      <div className="absolute border-t border-l border-title20 w-4 h-4 top-9 left-4" />
      <div className="absolute border-t border-r border-title20 w-4 h-4 top-9 right-4" />
      <div className="absolute border-b border-l border-title20 w-4 h-4 bottom-[90px] left-4" />
      <div className="absolute border-b border-r border-title20 w-4 h-4 bottom-[90px] right-4" />
    </>
  );
};
