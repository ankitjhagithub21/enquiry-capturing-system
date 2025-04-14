import dotenv from "dotenv";
dotenv.config();

import { ZodError } from "zod";
import { enquirySchema } from "../helper/validator.js";

import dayjs from "dayjs";
import { sheets } from "../service/googleSheet.js";

export const enquiryController = async (req, res) => {
    try {
        const body = enquirySchema.parse(req.body);
        const { name, email, category, message } = body;
        const date = dayjs().format("DD-MM-YYYY");

      
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: "enquiry!A:E",
            insertDataOption: "INSERT_ROWS",
            valueInputOption: "RAW",
            requestBody: {
                values: [[name, email, category, message, date]],
            },
        }).catch((error)=>{
            console.log(error)
            return res.status(400).json({success:false,message:"error"})
        });

        
        return res.status(201).json({
            success: true,
            message: "success",
        });
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                success: false,
                message: error.errors,
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
