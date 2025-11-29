import * as React from "react"
import { Input, type InputProps } from "@/components/atoms/Input"
import { cn } from "@/lib/utils"

export interface FormFieldProps extends InputProps {
  label: string
  errorMessage?: string
  required?: boolean
}

/**
 * Molecular FormField Component
 * Combines label, input, and error message
 */
export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, errorMessage, required, id, className, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-")

    return (
      <div className={cn("space-y-2", className)}>
        <label htmlFor={inputId} className="text-sm font-medium leading-none text-foreground">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </label>
        <Input id={inputId} ref={ref} error={!!errorMessage} {...props} />
        {errorMessage && (
          <p className="text-sm text-destructive" role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    )
  },
)

FormField.displayName = "FormField"
