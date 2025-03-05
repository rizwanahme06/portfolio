import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: 'rizwanahme06@gmail.com',
        pass: 'ocvd zueb pbsi yaal',
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Website Submission",
      text: `You have a connection request from: ${email}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
