import * as React from "react"

import { cn } from "@/lib/utils"

// Removed empty interface
// interface EmptyInterface {}

// If you need an interface, define its members appropriately
// interface InputProps {
//   value: string
//   onChange: (value: string) => void
//   // Add other necessary props
// }

// Keep this type definition
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // Your className logic here
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
