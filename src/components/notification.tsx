import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const notificationVariants = cva(
  "inline-flex items-center bg-danger transition-colors",
  {
    variants: {
      size: {
        sm: "h-4 min-w-4 px-1 text-xs",
        md: "h-6 min-w-6 px-2 text-base",
      },
      variant: {
        dot: "size-2 rounded-sm",
        default: "justify-center rounded font-medium text-primary-foreground",
      },
    },
    compoundVariants: [{ variant: "dot", class: "min-w-2 px-0" }],
    defaultVariants: {
      variant: "default",
    },
  },
);

function Notification({
  className,
  size,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof notificationVariants>) {
  return (
    <div
      className={cn(notificationVariants({ size, variant }), className)}
      {...props}
    />
  );
}

function NotificationNumber({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return <span className={cn("tabular-nums", className)} {...props} />;
}

export { Notification, NotificationNumber, notificationVariants };
// todo: not done
