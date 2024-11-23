import { MouseEvent, PropsWithChildren } from "react"
import "./button.styles.css"
import { PropsWithDataTestId } from "@/app/components/ui/data-testid"

interface Props extends PropsWithChildren, PropsWithDataTestId {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
    size: "small" | "medium" | "large"
    variant: "primary" | "secondary"
}
export const Button = ({ children, dataTestId, onClick, size, variant }: Props) => {
    return (
        <button className={`btn btn-${size} btn-${variant}`} data-testid={dataTestId} onClick={onClick}>
            {children}
        </button>
    )
}
