import { Router } from "express";
import BirthInfo from "../models/BirthInfo.js";

const router = Router();

// create
router.post("/", async (request, response) => {
  try {
    const newBirthInfo = new BirthInfo(request.body);

    const data = await newBirthInfo.save();

    response.json(data);
  } catch (error) {
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

router.get("/", async (request, response) => {
  try {
    const query = request.query;

    const data = await BirthInfo.find(query);

    response.json(data);
  } catch (error) {
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

router.get("/:id", async (request, response) => {
  try {
    const data = await BirthInfo.findById(request.params.id);

    response.json(data);
  } catch (error) {
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await BirthInfo.findByIdAndUpdate(
      request.params.id,

      {
        // if you update stuff in BirthInfo.js, update it here too
        $set: {
          name: body.name,
          birthDate: body.birthDate,
          birthTime: body.birthTime,
          location: body.location
        }
      },

      {
        new: true,
        runValidators: true
      }
    );
    response.json(data);
  } catch (error) {
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const data = await BirthInfo.findByIdAndDelete(request.params.id);

    response.json(data);
  } catch (error) {
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// keep export default router; at the end
export default router;
