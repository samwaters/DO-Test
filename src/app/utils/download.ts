export const downloadDataUrl = (dataUrl: string) => {
    const a = document.createElement("a")
    a.setAttribute("download", "workflow.png")
    a.setAttribute("href", dataUrl)
    a.click()
}
