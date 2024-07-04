import {asyncHandler} from "../utils/asyncHandler.js";
import ImageKit from "imagekit";
import * as fs from "node:fs";
import {uploadOnCloudinary} from "../utils/Cloudinary.js";
import {ApiResponse} from "../utils/ApiResponse.js";

const uploadSites = asyncHandler( async (req,res) => {
    const {name, url} = req.body;
    if ([name, url].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const imgpath = req.file?.path
    if (!imgpath) {
        throw new ApiError(400, "Image not found")
    }

    const image = await uploadOnCloudinary(imgpath)

    const site = await Site.create({
        name: name,
        url: url,
        img: image.url
    })

    if(!site){
        throw new ApiError(500, "Something went wrong while registering the sites");
    }

    console.log(site);

    return res.status(200).json(
            new ApiResponse(200, {site}, "Site registered Successfully")
    )

})

export {
    uploadSites
}