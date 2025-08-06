import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const linkVariants = cva(
  "cursor-pointer rounded text-primary underline-offset-4 hover:text-primary-hover hover:underline focus-visible:outline focus-visible:outline-offset-1 focus-visible:outline-ring active:text-primary-active",
);

function Link({
  children,
  className,
  newTab,
  ...props
}: React.ComponentProps<"a"> & { newTab?: boolean }) {
  return (
    <a
      className={cn(linkVariants({ className }))}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}

export { Link, linkVariants };
