import { render, screen } from "@testing-library/react"
import { IconButton } from "@/app/components/ui/iconbutton"

describe("IconButton", () => {
    it("Renders different icon buttons", () => {
        render(
            <div data-testid="iconbtns">
                <IconButton icon={<></>} id="btn1" size="small" />
                <IconButton icon={<></>} id="btn2" size="medium" />
                <IconButton icon={<></>} id="btn3" size="large" />
            </div>,
        )
        expect(screen.getByTestId("iconbtns")).toMatchSnapshot()
    })
    it("Renders a clickable button", () => {
        const fn = jest.fn()
        render(<IconButton dataTestId="btn" icon={<></>} id="btn" onClick={fn} />)
        screen.getByTestId("btn").click()
        expect(fn).toHaveBeenCalled()
    })
})
