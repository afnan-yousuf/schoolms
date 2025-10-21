import { friends } from "./friends";


export function GET() {
  
  return Response.json(friends);
}

export async function POST(request) {
  const body = await request.json();
  body.id = friends.length+1;
  friends.push(body);
  return Response.json({ success: true, message: "Friend has been added" });
}

export async function PUT(request) {
  const body = await request.json();
  const index = friends.findIndex((s) => s.id == body.id);
  if (index !== -1) {
    friends[index] = { ...friends[index], ...body };
  } else {
    return Response.json({
      success: true,
      message: "Friend not found in database",
    });
  }
  return Response.json({ success: true, message: "Friend has Updated" });
}

export async function DELETE(request) {
  const body = await request.json();
  const index = friends.findIndex((s) => s.id == body.id);
  if (index !== -1) {
    friends.splice(index,1)
  } else {
    return Response.json({
      success: true,
      message: "Friend not found in database",
    });
  }
  return Response.json({ success: true, message: "Friend has been deleted" });
}
