import { NotificationProvider, useNotifications } from "@/app/contexts/notificationcontext"
import { act, render, screen, waitFor } from "@testing-library/react"

const NotificationComponent = () => {
    const { addNotification, closeNotification, notifications } = useNotifications()
    const addTestNotification = () => {
        addNotification({ text: "Test", variant: "success" })
    }
    const closeTestNotification = () => {
        if (notifications.length === 0) return
        closeNotification(notifications[0].id)
    }

    return (
        <div data-testid="notifications">
            {notifications.map((n) => (
                <div key={n.id} role="alert">
                    {n.text}
                </div>
            ))}
            <button data-testid="add-btn" onClick={addTestNotification}>
                Add
            </button>
            <button data-testid="del-btn" onClick={closeTestNotification}>
                Delete
            </button>
        </div>
    )
}

describe("Notifications", () => {
    it("Sets up notifications", () => {
        render(
            <NotificationProvider>
                <NotificationComponent />
            </NotificationProvider>,
        )
        expect(screen.queryAllByRole("alert")).toHaveLength(0)
    })

    it("Adds and clears notifications", async () => {
        render(
            <NotificationProvider>
                <NotificationComponent />
            </NotificationProvider>,
        )
        expect(screen.queryAllByRole("alert")).toHaveLength(0)
        act(() => {
            screen.getByTestId("add-btn").click()
        })
        await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(1))
        act(() => {
            screen.getByTestId("del-btn").click()
        })
        await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0))
    })

    it("Removes notifications after 5 seconds", async () => {
        jest.useFakeTimers()
        render(
            <NotificationProvider>
                <NotificationComponent />
            </NotificationProvider>,
        )
        act(() => {
            screen.getByTestId("add-btn").click()
        })
        await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(1))
        act(() => {
            jest.advanceTimersByTime(5001)
        })
        await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0))
        jest.clearAllTimers()
        jest.useRealTimers()
    })
})
