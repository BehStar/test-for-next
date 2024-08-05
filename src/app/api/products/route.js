import { NextResponse } from "next/server";
import connectDB from "../../../components/connectDB";
import Product from "../../../components/Product";

// گرفتن تمام محصولات
export async function GET(req) {
  try {
    await connectDB();

    const products = await Product.find();

    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.set("Cache-Control", "no-cache");

    return NextResponse.json(
      { message: "دیتا با موفقیت ارسال شد", products },
      { status: 200, headers }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "مشکلی در برقراری ارتباط با سرور رخ داده است" },
      { status: 500 }
    );
  }
}
