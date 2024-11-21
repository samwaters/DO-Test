import { z } from "zod"

export const schema = z.object({
    nodes: z.object({
        id: z.number(),
        position: z.object({
            x: z.number(),
            y: z.number()
        }),
        data: z.object({
            label: z.string()
        }),
        type: z.string()
    }).array()
})