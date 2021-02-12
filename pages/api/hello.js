// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../utils/dbConnect";
import Wish from "../../model/wish";
export default async (req, res) => {
    await dbConnect();
    const result = await Wish.findOne();

    res.status(200).json(result);
};
