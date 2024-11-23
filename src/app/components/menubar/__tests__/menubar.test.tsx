import { render, screen } from "@testing-library/react"
import { MenuBar } from "@/app/components/menubar/menubar"
import { ReactFlowProvider } from "@xyflow/react"

describe("MenuBar", () => {
    it("Renders the menu bar", () => {
        render(
            <ReactFlowProvider>
                <div data-testid="menubar">
                    <MenuBar />
                </div>
            </ReactFlowProvider>,
        )
        expect(screen.getByTestId("menubar")).toMatchSnapshot()
    })
})
