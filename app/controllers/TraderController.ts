import { RequestHandler, Request, Response } from "express";
import TraderModel from '../models/TraderModel';

export const getTrader: RequestHandler = (req: Request, res: Response) => {
    TraderModel.findOne({ userID: req.params.id }).then((account: any) => {
        if (account) res.status(200).json({ msg: "success", status: true, data: account });
        else res.status(200).json({ msg: "success", status: false, data: account });
    });
}
export const addTrader: RequestHandler = (req: Request, res: Response) => {
    new TraderModel({ ...req.body.trader, userID: req.body.id })
        .save()
        .then((newTrader: any) => {
            if (newTrader) res.status(200).json({ msg: "success", data: newTrader });
            else res.status(400).json({ msg: "some issues" })
        });
}
export const deleteTrader: RequestHandler = (req: Request, res: Response) => {
    TraderModel.findOneAndRemove({ userID: req.body.id }).then((account: any) => {
        if (account) res.status(200).json({ msg: "success" });
    });
}