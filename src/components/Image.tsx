import { useState } from "react";

export const Image = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative">
      {loading && (
        <div className="rounded-2xl w-full h-full absolute bg-neutral-300">
          <div className="rounded-2xl bg-neutral-200 animate-pulse w-full h-full"></div>
        </div>
      )}
      <img
        src={src}
        onLoad={() => setLoading(false)}
        className={className}
      ></img>
    </div>
  );
};
