import { render, screen } from "@testing-library/react"
import { Button } from "@/app/components/ui/button"

describe("Button", () => {
    it("Renders different button variants", () => {
        const fn = jest.fn()
        render(
            <div data-testid="btns">
                <Button onClick={fn} size="small" variant="primary">
                    One
                </Button>
                <Button onClick={fn} size="medium" variant="primary">
                    Two
                </Button>
                <Button onClick={fn} size="large" variant="primary">
                    Three
                </Button>
                <Button onClick={fn} size="small" variant="secondary">
                    One
                </Button>
                <Button onClick={fn} size="medium" variant="secondary">
                    Two
                </Button>
                <Button onClick={fn} size="large" variant="secondary">
                    Three
                </Button>
            </div>,
        )
        expect(screen.getByTestId("btns")).toMatchSnapshot()
    })
    it("Renders a clickable button", () => {
        const fn = jest.fn()
        render(
            <Button onClick={fn} size="small" variant="primary">
                Button
            </Button>,
        )
        screen.getByText("Button").click()
        expect(fn).toHaveBeenCalled()
    })
})
