import { z } from "zod";

export const TrainModelSchema = z.object({
    name: z.string(),
    type: z.enum(["Man", "Woman", "Other"]),
    age: z.number(),
    ethnicity: z.enum([
        "White",
        "Black",
        "AsianAmerican",
        "EastAsian",
        "SouthEastAsian",
        "SouthAsian",
        "MiddleEastern",
        "Pacific",
        "Hispanic"
    ]),
    eyeColor: z.enum([
        "Brown",
        "Blue",
        "Green",
        "Hazel",
        "Gray",
    ]),
    bald: z.boolean(),
    images: z.array(z.string()),
})

export const GenerateImage = z.object({
    prompt: z.string(),
    modelId: z.string(),
    num: z.number(),
})

export const GenerateImagesFromPack = z.object({
    modelId: z.string(),
    packId: z.string(),
})