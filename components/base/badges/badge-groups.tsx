import { cx } from "@/utils/cx";
import { type ReactNode } from "react";

interface BadgeGroupProps {
  addonText?: string;
  children: ReactNode;
  color?: "brand" | "gray";
  theme?: "modern" | "outline";
  align?: "leading" | "center";
  size?: "md" | "lg";
  className?: string;
  style?: React.CSSProperties;
  layout?: "horizontal" | "vertical";
}

export const BadgeGroup = ({ 
  addonText, 
  children, 
  color = "brand", 
  theme = "modern",
  size = "md",
  className,
  style,
  layout = "horizontal"
}: BadgeGroupProps) => {
  return (
    <div 
      className={cx(
        "badge-group",
        `badge-group--${color}`,
        `badge-group--${theme}`,
        `badge-group--${size}`,
        `badge-group--${layout}`,
        className
      )}
      style={style}
    >
      {addonText && <span className="badge-group__addon">{addonText}</span>}
      <span className="badge-group__text">{children}</span>
      <svg className="badge-group__arrow" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
    </div>
  );
};
