import { ReactElement } from "react"
import "./iconbutton.styles.css"
import { Tooltip } from "react-tooltip"
import { PropsWithDataTestId } from "@/app/components/ui/data-testid"

interface Props extends PropsWithDataTestId {
    icon: ReactElement
    id: string
    onClick?: () => void
    size?: "small" | "medium" | "large"
    tooltip?: string
}

export const IconButton = ({ dataTestId, icon, id, onClick, size, tooltip }: Props) => {
    return (
        <>
            <button
                className={`icon-button ${size}`}
                data-testid={dataTestId}
                data-tooltip-id={id}
                data-tooltip-content={tooltip}
                onClick={onClick}
            >
                {icon}
            </button>
            {tooltip && <Tooltip id={id} />}
        </>
    )
}
