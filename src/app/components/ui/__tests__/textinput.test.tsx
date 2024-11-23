import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { TextInput } from "@/app/components/ui/textinput"

describe("TextInput", () => {
    it("Renders different text inputs", () => {
        const change = jest.fn()
        render(
            <div data-testid={"textinput"}>
                <TextInput onChange={change} size="small" value="" />
                <TextInput onChange={change} size="medium" value="med" />
                <TextInput onChange={change} size="large" value="" />
            </div>,
        )
        expect(screen.getByTestId("textinput")).toMatchSnapshot()
    })
    it("Calls the change handler correctly", async () => {
        userEvent.setup()
        const change = jest.fn()
        render(<TextInput dataTestId="input" onChange={change} size="small" value="" />)
        expect(change).not.toHaveBeenCalled()
        await userEvent.type(screen.getByTestId("input"), "f")
        expect(change).toHaveBeenCalledWith(expect.objectContaining({ type: "change" }))
    })
})
