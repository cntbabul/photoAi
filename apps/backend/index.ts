import express from "express";
import { TrainModelSchema, GenerateImage, GenerateImagesFromPack } from "common/types";
import { prismaClient } from "db";

const app = express();
app.use(express.json())
const PORT = process.env.PORT || 3000


app.post("/ai/training", async (req, res) => {
    const parsedBody = TrainModelSchema.safeParse(req.body)

    if (!parsedBody.success) {
        return res.status(411).json({ message: "Invalid input" })
    }
    await prismaClient.model.create({
        data: {
            name: parsedBody.data.name,
            type: parsedBody.data.type,
            age: parsedBody.data.age,
            ethnicity: parsedBody.data.ethnicity,
            eyeColor: parsedBody.data.eyeColor,
            bald: parsedBody.data.bald,



        }

    })
})
app.post("/ai/generate", (req, res) => {
    console.log("Generation request received");
})
app.post("/pack/generate", (req, res) => {
    console.log("Pack generation request received");
})
app.get("/pack/bulk", (req, res) => {
    console.log("Pack bulk request received");
})
app.get("/image", (req, res) => {
    console.log("Image request received");
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});