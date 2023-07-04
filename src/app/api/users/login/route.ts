import { connect } from "@/DBConfig/dbConfig";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { log } from "console";

connect()

export async function POST(req:NextRequest){
    try {
        const {email,password}=req.json()
        console.log();
        
    } catch (error:any) {
        return NextResponse.json({
            error:error.message
        },{
            status:500
        })
    }

}