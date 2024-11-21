import {ReactElement} from "react";
import "./iconbutton.styles.css"
import {Tooltip} from "react-tooltip";

interface Props {
    icon: ReactElement
    id: string
    onClick?: () => void;
    size?: "small" | "medium" | "large";
    tooltip?: string
}

export const IconButton = ({ icon, id, onClick, size, tooltip }: Props) => {
    return <>
        <button className={`icon-button ${size}`} data-tooltip-id={id} data-tooltip-content={tooltip} onClick={onClick}>
            {icon}
        </button>
        {tooltip && <Tooltip id={id} />}
    </>
}