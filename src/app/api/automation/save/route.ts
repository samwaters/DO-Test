import { schema } from "@/app/api/automation/save/schema"

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const response = schema.safeParse(body)
        if (!response.success) {
            return new Response(JSON.stringify({ error: true, message: "Invalid Request", errors: response.error }), {
                status: 400,
            })
        }
        return new Response(JSON.stringify({ error: false, message: `Saved ${response.data.nodes.length} nodes` }), {
            status: 200,
        })
    } catch {
        return new Response(JSON.stringify({ error: true, message: "Something went wrong" }), { status: 500 })
    }
}
