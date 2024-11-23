import "./menubar.styles.css"
import { TiFlowMerge } from "react-icons/ti"
import { IconButton } from "@/app/components/ui/iconbutton"
import { MdFileDownload, MdOutlineSave } from "react-icons/md"
import { useDownload } from "@/app/hooks/download"
export const MenuBar = () => {
    const download = useDownload()

    return (
        <nav className="menubar">
            <div className="menubar-left">
                <div className="menubar-logo">
                    <TiFlowMerge />
                </div>
                <div className="menubar-title">Untitled Workflow</div>
            </div>
            <div className="menubar-right">
                <IconButton icon={<MdOutlineSave />} id="btn-save" size="medium" tooltip="Save Changes" />
                <IconButton
                    icon={<MdFileDownload />}
                    id="btn-download"
                    onClick={download}
                    size="medium"
                    tooltip="Download as PNG"
                />
            </div>
        </nav>
    )
}
