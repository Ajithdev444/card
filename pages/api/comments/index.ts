import { NextApiRequest, NextApiResponse } from "next";
import { comments } from "../../../data/comments.json";
import ReviewComponent from "@/components/ReviewComponent";
type Data = {
  name: string;
  review: string;
  id: number;
  message: string;
  userdata: string;
};

// function handler(req: NextApiRequest, res: NextApiResponse<Data[]>) {
//   if (req.method === "GET") {
//     res.status(200).json({ message: "data" });
//   } else if (req.method === "POST") {
//     const name = req.body.name;
//     const review = req.body.review;
//     const userdata = {
//       id: new Date(),
//       name: name,
//       review: review,
//     };
//     comments.push(userdata);
//     res.status(201).json(userdata);
//     console.log(userdata);
//   }
// }
// export default handler;
