import { cx } from "@/utils/cx";

export const RatingStars = ({ rating = 5, className, starClassName }: { rating?: number, className?: string, starClassName?: string }) => {
  return (
    <div className={cx("flex items-center gap-0.5", className)}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          className={cx("text-gold fill-current", starClassName)}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
};
