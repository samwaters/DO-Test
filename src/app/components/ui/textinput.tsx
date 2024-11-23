import "./textinput.styles.css"
import { ChangeEvent, useEffect, useRef } from "react"
import { PropsWithDataTestId } from "@/app/components/ui/data-testid"

interface Props extends PropsWithDataTestId {
    autoFocus?: boolean
    fullWidth?: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    size: "small" | "medium" | "large"
    value: string | undefined
}

export const TextInput = ({ autoFocus, dataTestId, fullWidth, onChange, size, value }: Props) => {
    const ref = useRef<HTMLInputElement>(null)
    useEffect(() => {
        if (autoFocus && ref.current) {
            ref.current.focus()
        }
    }, [autoFocus])

    return (
        <input
            className={`text-input text-input-${size} ${fullWidth ? "text-input-fullwidth" : ""}`}
            data-testid={dataTestId}
            onChange={onChange}
            ref={ref}
            type="text"
            value={value}
        />
    )
}
