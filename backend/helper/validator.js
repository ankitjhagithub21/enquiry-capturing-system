import { z } from "zod";

export const enquirySchema = z.object({
    name:z.string().min(3).max(60),
    email:z.string().email(),
    category:z.enum(["Complain","Feedback","Service Request"],{message:"Invalid inquiry category."}),
    message:z.string().min(3).max(200)
}).required();

