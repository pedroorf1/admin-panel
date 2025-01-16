'use server'
import { NextResponse } from 'next/server';
// import axios from 'axios';

export async function GET() {
  // const data = req.body
  // if (req.method === 'POST') {
  //   console.log(req.method); // Verifique o método
  //   console.log(req.body);
  //   return res.json('ok');
  // }
  console.log('ok')
  return NextResponse.json({message:"ok"});
  // const API_ADMIN = process.env.ADMIN_API_URL ?? 'http://localhost:3000'
  // try {
  //   // const response = await axios.post(API_ADMIN, { data });
  //   console.log({data})
  //   res.status(200).json('ok');
  //   // res.status(200).json(response.data);
  // } catch (error) {
  //   res.status(500).json({ error: 'Erro ao tentar fazer o login' });
  // }
}


export async function POST(req: Request) {
  const data = await req.json();

    console.log(req.method); // Verifique o método
    console.log(req);
    console.log('ok')
    return NextResponse.json({message:"ok", data});

  // const API_ADMIN = process.env.ADMIN_API_URL ?? 'http://localhost:3000'
  // try {
  //   // const response = await axios.post(API_ADMIN, { data });
  //   console.log({data})
  //   res.status(200).json('ok');
  //   // res.status(200).json(response.data);
  // } catch (error) {
  //   res.status(500).json({ error: 'Erro ao tentar fazer o login' });
  // }
}