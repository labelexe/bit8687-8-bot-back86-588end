import { RequestHandler, Request, Response } from "express";
import UserModel from '../models/UserModel';

export const signin: RequestHandler = (req: Request, res: Response) => {
    const { email, password } = req.body;
    UserModel.findOne({ email, password }).then((item: any) => {
        if (item) res.status(200).json({ msg: "success", data: item });
        else res.status(400).json({ msg: "no account" })
    });
}
export const register: RequestHandler = (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    new UserModel({ email, name, password })
        .save()
        .then((newUser: any) => {
            if (newUser) res.status(200).json({ msg: "success", data: newUser });
            else res.status(400).json({ msg: "some issues" })
        });
}