import '@testing-library/jest-dom';
import { beforeEach } from "@jest/globals"
import { mockReactFlow } from "@/testutils/react-flow"

if(!crypto.randomUUID) {
    crypto.randomUUID = () => "foo-bar-baz-foo-bar"
}

// Make sure fetch is mocked out
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ test: 100 }),
    }),
) as jest.Mock;

// Make sure React Flow is mocked
beforeEach(() => {
    mockReactFlow()
})
