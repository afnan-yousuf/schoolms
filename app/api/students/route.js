import mongoose from "mongoose";
import mongodb from "@/lib/mongodb";
import Student from "@/models/Student";
import { NextResponse } from "next/server";


export async function GET(){
    await mongodb()
    const students = await Student.find()

    return NextResponse.json(students)
} 


export async function POST(request){

    await mongodb()
    const body = await request.json();

    const newStd = await Student.create(body)

    return NextResponse.json({success: true, message: "Student Added!"})
}