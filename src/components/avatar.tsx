"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      variant: {
        default: "*:data-[slot^=avatar-]:bg-muted",
        picton:
          "*:data-[slot=avatar-fallback]:text-accent-foreground *:data-[slot^=avatar-]:bg-picton-500",
        emerald:
          "*:data-[slot=avatar-fallback]:text-accent-foreground *:data-[slot^=avatar-]:bg-emerald-500",
        pizazz:
          "*:data-[slot=avatar-fallback]:text-accent-foreground *:data-[slot^=avatar-]:bg-pizazz-500",
        electric:
          "*:data-[slot=avatar-fallback]:text-accent-foreground *:data-[slot^=avatar-]:bg-electric-500",
        azalea:
          "*:data-[slot=avatar-fallback]:text-accent-foreground *:data-[slot^=avatar-]:bg-azalea-500",
        carnelian:
          "*:data-[slot=avatar-fallback]:text-accent-foreground *:data-[slot^=avatar-]:bg-carnelian-500",
      },
      size: {
        sm: "size-6 [&>[data-slot=avatar-fallback]>svg]:size-3",
        md: "size-8 [&>[data-slot=avatar-fallback]>svg]:size-4",
        lg: "size-10 [&>[data-slot=avatar-fallback]>svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

function Avatar({
  className,
  size,
  variant,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> &
  VariantProps<typeof avatarVariants>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(avatarVariants({ variant, size }), className)}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-muted",
        className,
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback, avatarVariants };
