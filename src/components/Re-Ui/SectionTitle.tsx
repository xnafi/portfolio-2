import { ReactNode } from "react";
import { GiFlowerEmblem } from "@/src/components/Icons";

interface Props {
  icon?: ReactNode;
  className?: string;
  classNames?: {
    container?: string;
    title?: string;
    icon?: string;
  };
  title: string;
}

const SectionTitle = ({ icon, title, className, classNames }: Props) => {
  return (
    <div
      className={`flex items-center gap-4 mb-10 ${
        className ?? ""
      } ${classNames?.container ?? ""}`}
    >
      {icon ? (
        icon
      ) : (
        <GiFlowerEmblem
          size={40}
          className={`animate-spin [animation-duration:15s] text-primary ${classNames?.icon ?? ""}`}
        />
      )}

      <h2
        className={`text-xl uppercase leading-none text-foreground ${classNames?.title ?? ""}`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;