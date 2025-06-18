const secondaryStyles =
  "border border-darkgreen bg-lightgreen hover:bg-darkgreen hover:text-lightgreen";
const primaryStyles =
  "border border-darkgreen bg-darkgreen text-lightgreen hover:border   hover:bg-black";
export const Button = ({
  varient = "primary",
  text,
}: {
  varient: "primary" | "secondary";
  text: string;
}) => {
  return (
    <button
      className={`${
        varient === "primary" ? primaryStyles : secondaryStyles
      } rounded-[100px] w-fit text-[12px] px-[24px] py-[8px] md:px-[36px] md:py-[8px] md:text-[16px] font-normal cursor-pointer transition-all duration-200 ease-in-out`}
    >
      {text}
    </button>
  );
};
