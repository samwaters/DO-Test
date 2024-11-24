import { getViewportForBounds, useReactFlow } from "@xyflow/react"
import { toPng } from "html-to-image"
import { downloadDataUrl } from "@/app/utils/download"

export const useDownload = () => {
    const { getNodes, getNodesBounds } = useReactFlow()
    const imageWidth = 1024
    const imageHeight = 768

    return () => {
        const nodesBounds = getNodesBounds(getNodes())
        const viewport = getViewportForBounds(nodesBounds, imageWidth, imageHeight, 0.5, 2, 10)
        // Fix for next's prerender
        if (!document) return
        const imageElement: HTMLElement = document.querySelector(".react-flow__viewport")!
        toPng(imageElement, {
            backgroundColor: "#1a365d",
            width: imageWidth,
            height: imageHeight,
            style: {
                width: `${imageWidth}px`,
                height: `${imageHeight}px`,
                transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`,
            },
        }).then(downloadDataUrl)
    }
}
