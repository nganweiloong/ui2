import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-lg text-sm leading-none font-medium whitespace-nowrap transition-all focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-danger aria-invalid:ring-danger/20 dark:aria-invalid:ring-danger/40 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary-hover hover:ring-4 hover:ring-primary-hover/20 active:bg-primary-active active:ring-4 active:ring-primary-active/40 active:ring-offset-0",
        secondary:
          "border border-border bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary-hover active:bg-secondary-active",
        danger:
          "bg-danger text-danger-foreground shadow-xs hover:bg-danger-hover hover:ring-4 focus-visible:ring-danger-hover/20 active:bg-danger-active active:ring-danger-active/40 dark:bg-danger/60 dark:focus-visible:ring-danger/40",
        ghost:
          "text-inherit hover:bg-secondary-hover active:bg-secondary-active",
        dashed:
          "border border-dashed border-border hover:bg-secondary-hover active:bg-secondary-active",
      },
      size: {
        // use `has-[>svg]:px-*` to change side paddings when there is an icon
        xs: "h-6 px-2 has-[>svg:only-child]:w-6 [&_svg:not([class*='size-'])]:size-4",
        sm: "h-8 px-2 has-[>svg:only-child]:w-8 [&_svg:not([class*='size-'])]:size-4",
        md: "h-9 px-4 py-2 has-[>svg:only-child]:w-9 [&_svg:not([class*='size-'])]:size-5",
        lg: "h-10 px-4 has-[>svg:only-child]:w-10 [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

function Button({
  asChild = false,
  className,
  size,
  variant,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
