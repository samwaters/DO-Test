export const downloadDataUrl = (dataUrl: string) => {
    // Fix for next's prerender
    if (!document) return
    const a = document.createElement("a")
    a.setAttribute("download", "workflow.png")
    a.setAttribute("href", dataUrl)
    a.click()
}
