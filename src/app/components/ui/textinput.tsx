import "./textinput.styles.css"
import { ChangeEvent, useEffect, useRef } from "react"

interface Props {
    autoFocus?: boolean
    fullWidth?: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    size: "small" | "medium" | "large"
    value: string | undefined
}

export const TextInput = ({ autoFocus, fullWidth, onChange, size, value }: Props) => {
    const ref = useRef<HTMLInputElement>(null)
    useEffect(() => {
        if (autoFocus && ref.current) {
            ref.current.focus()
        }
    }, [autoFocus])

    return (
        <input
            className={`text-input text-input-${size} ${fullWidth ? "text-input-fullwidth" : ""}`}
            onChange={onChange}
            ref={ref}
            type="text"
            value={value}
        />
    )
}
