export const Title = ({ content }: { content: string }) => {
  return (
    <button className="border rounded-[100px] w-fit px-[16px] py-[8px] flex gap-[12px] items-center">
      <div className="min-h-[8px] h-3 rounded-4xl bg-darkgreen aspect-square"></div>
      <p className="text-[16px] md:text-[20px] font-normal">{content}</p>
    </button>
  );
};
