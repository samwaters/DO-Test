import { ReactFlow, ReactFlowProvider } from "@xyflow/react"
import { useSave } from "@/app/hooks/save"
import { render, screen } from "@testing-library/react"
import { initialEdges, initialNodes } from "@/app/Constants"

const Workflow = () => {
    return (
        <ReactFlowProvider>
            <WorkflowComponent />
        </ReactFlowProvider>
    )
}

const WorkflowComponent = () => {
    const save = useSave()
    const handleSave = () => {
        save()
    }

    return (
        <>
            <ReactFlow edges={initialEdges} nodes={initialNodes} />
            <button data-testid="save-btn" onClick={handleSave}>
                Save
            </button>
        </>
    )
}

describe("Save", () => {
    it("Saves the state of the workflow", () => {
        render(<Workflow />)
        screen.getByTestId("save-btn").click()
        expect(global.fetch).toHaveBeenCalledWith(
            "/api/automation/save",
            expect.objectContaining({
                body: expect.stringContaining('{"nodes":[{"id":"1"'),
            }),
        )
    })
})
