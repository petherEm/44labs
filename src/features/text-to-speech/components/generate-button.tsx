"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export function GenerateButton({
  size,
  disabled,
  isSubmitting,
  onSubmit,
  className,
}: {
  size?: "default" | "sm";
  isSubmitting?: boolean;
  disabled: boolean;
  onSubmit: () => void;
  className?: string;
}) {
  return (
    <Button
      size={size}
      disabled={disabled}
      onClick={onSubmit}
      className={className}
    >
      {isSubmitting ? <Spinner /> : "Generate speech"}
    </Button>
  );
}
