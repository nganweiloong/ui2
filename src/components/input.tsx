import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full min-w-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "rounded-lg border border-input bg-transparent px-3 py-1 text-sm transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-neutral-500 hover:border-primary-hover hover:read-only:border-input focus:border-primary-hover focus:ring-4 focus:ring-primary-hover/20 focus:outline-none focus:read-only:border-input focus:read-only:ring-0 aria-invalid:border-danger dark:bg-input/30 dark:aria-invalid:border-danger/40",
        invisible:
          "bg-transparent text-inherit placeholder:text-neutral-500 focus:ring-0 focus:outline-none",
      },
      size: {
        sm: "h-8",
        md: "h-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

function Input({
  className,
  size,
  variant,
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return (
    <input
      data-slot="input"
      className={cn(inputVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Input };
