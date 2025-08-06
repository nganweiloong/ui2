import type { Icon } from "@phosphor-icons/react";
import { VariantProps, cva } from "class-variance-authority";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";

const emptyStateVariants = cva("flex flex-col justify-center text-center", {
  variants: {
    variant: {
      default: "",
      dashed: "rounded-lg border border-dashed border-border p-8",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function EmptyState({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof emptyStateVariants>) {
  return (
    <div
      data-slot="empty-state"
      className={cn(emptyStateVariants({ variant, className }))}
      {...props}
    />
  );
}

function EmptyStateIcon({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement> & { children: React.ReactElement<Icon> }) {
  return (
    <div
      data-slot="empty-state-icon"
      className="peer flex justify-center text-muted-foreground [&>svg:not([class*='size-'])]:size-16"
      {...props}
    >
      {children}
    </div>
  );
}

function EmptyStateTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="empty-state-title"
      className={cn(
        "peer text-lg font-semibold peer-data-[slot=empty-state-icon]:mt-4",
        className,
      )}
      {...props}
    />
  );
}

function EmptyStateDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="empty-state-description"
      className={cn(
        "peer text-sm peer-data-[slot=empty-state-title]:mt-1",
        className,
      )}
      {...props}
    />
  );
}

function EmptyStateAction({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      data-slot="empty-state-action"
      className={cn("peer mt-8 w-max self-center only:mt-0", className)}
      {...props}
    />
  );
}

export {
  EmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateAction,
};
