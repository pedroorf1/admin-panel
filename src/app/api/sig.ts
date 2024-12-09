'use server'
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body
  if (req.method === 'POST') {
    console.log(req.method); // Verifique o método
    console.log(req.body);
    return res.json('ok');
  }
  return res.json('ok');
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