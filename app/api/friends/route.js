export function GET(){
    const friends = [{name: "Ali", id: 1},{name: "Kashif", id:2}]
    return Response.json(friends)
}   


export async function POST(request){

    const body = await request.json()
    console.log(body)

    return Response.json({success: true, message: "Friend has been added"})
}