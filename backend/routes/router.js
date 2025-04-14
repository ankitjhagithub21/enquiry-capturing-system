import express from "express"
import { enquiryController } from "../controllers/enquiryController.js"

const router = express.Router()

router.post("/enquiry",enquiryController)

export default router