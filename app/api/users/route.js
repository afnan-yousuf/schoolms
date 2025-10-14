export function GET(){
    const users = [{uid: 101, uname: "zahid"},{uid: 102, uname: "waleed"}]
    return Response.json(users)
}