import { connect } from "@/DBConfig/dbConfig";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/helper/mailer";

connect();

export async function POST(req: NextRequest) {
  try {
    const { username, email, password } = await req.json();
    console.log({ username, email, password });

    const user = await User.findOne({ email });
console.log(user);

    if (user) {
      return NextResponse.json({ error: "user already exist", status: 400 });
    }
    //hash password
    const salt = await bcrypt.genSalt(10); //this defines at what scale you want to hash your password
    const hashPassword = await bcrypt.hash(password, salt); //this hashes the password with the salt

    const newUser = await new User({
      username,
      email,
      password:hashPassword,
    }).save();
    console.log(newUser);

    //send verification email
    await sendEmail({email, emailType:"VERIFY",userId:newUser._id})

    return NextResponse.json({
      message: "user created successfully",
      success: true,
      newUser,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
      status: 500,
    });
  }
}
