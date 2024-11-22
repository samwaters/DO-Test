import {MouseEvent, PropsWithChildren} from "react"
import "./button.styles.css"

interface Props extends PropsWithChildren {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
    size: "small" | "medium" | "large"
    variant: "primary" | "secondary"
}
export const Button = ({ children, onClick, size, variant }: Props) => {
    return <button className={`btn btn-${size} btn-${variant}`} onClick={onClick}>
        {children}
    </button>
}