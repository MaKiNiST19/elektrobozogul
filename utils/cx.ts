export const cx = (...args: (string | boolean | undefined)[]) => args.filter(Boolean).join(" ");
