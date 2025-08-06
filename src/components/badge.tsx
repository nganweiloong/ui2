import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border px-2 py-0.5 text-xs leading-none font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring focus-visible:ring-ring focus-visible:ring-offset-1 [&>svg]:pointer-events-none",
  {
    variants: {
      variant: {
        bold: "border-transparent text-accent-foreground",
        subtle: "",
      },
      color: {
        picton: "",
        emerald: "",
        pizazz: "",
        electric: "",
        azalea: "",
        carnelian: "",
        info: "border-info-border bg-info-subtle text-info-foreground [a&]:hover:bg-info-border/40",
        warning:
          "border-warning-border bg-warning-subtle text-warning-foreground [a&]:hover:bg-warning-border/40",
        success:
          "border-success-border bg-success-subtle text-success-foreground [a&]:hover:bg-success-border/40",
        danger:
          "border-monza-300 bg-monza-50 text-monza-700 [a&]:hover:bg-monza-100",
      },
      size: {
        sm: "px-2 py-0.25 text-xs [&>svg]:size-3",
        md: "px-2 py-0.5 text-sm [&>svg]:size-3",
        lg: "px-2 py-1 text-sm [&>svg]:size-4",
      },
    },
    compoundVariants: [
      {
        variant: "bold",
        color: "picton",
        className: "bg-picton-500 [a&]:hover:bg-picton-500/90",
      },
      {
        variant: "bold",
        color: "emerald",
        className: "bg-emerald-500 [a&]:hover:bg-emerald-500/90",
      },
      {
        variant: "bold",
        color: "pizazz",
        className: "bg-pizazz-500 [a&]:hover:bg-pizazz-500/90",
      },
      {
        variant: "bold",
        color: "electric",
        className: "bg-electric-500 [a&]:hover:bg-electric-500/90",
      },
      {
        variant: "bold",
        color: "azalea",
        className: "bg-azalea-500 [a&]:hover:bg-azalea-500/90",
      },
      {
        variant: "bold",
        color: "carnelian",
        className: "bg-carnelian-500 [a&]:hover:bg-carnelian-500/90",
      },
      {
        variant: "subtle",
        color: "picton",
        className:
          "border-picton-300 bg-picton-50 text-picton-700 [a&]:hover:bg-picton-100",
      },
      {
        variant: "subtle",
        color: "emerald",
        className:
          "border-emerald-300 bg-emerald-50 text-emerald-700 [a&]:hover:bg-emerald-100",
      },
      {
        variant: "subtle",
        color: "pizazz",
        className:
          "border-pizazz-300 bg-pizazz-50 text-pizazz-700 [a&]:hover:bg-pizazz-100",
      },
      {
        variant: "subtle",
        color: "electric",
        className:
          "border-electric-300 bg-electric-50 text-electric-700 [a&]:hover:bg-electric-100",
      },
      {
        variant: "subtle",
        color: "azalea",
        className:
          "border-azalea-300 bg-azalea-50 text-azalea-700 [a&]:hover:bg-azalea-100",
      },
      {
        variant: "subtle",
        color: "carnelian",
        className:
          "border-carnelian-300 bg-carnelian-50 text-carnelian-700 [a&]:hover:bg-carnelian-100",
      },
    ],
    defaultVariants: {
      variant: "bold",
      color: "picton",
      size: "sm",
    },
  },
);

function Badge({
  asChild = false,
  className,
  color,
  size,
  variant,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, color, size }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
