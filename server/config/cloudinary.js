import config from 'config'
import cloudinary from 'cloudinary'

const pkg = cloudinary.v2
const name = config.get("CLOUDINARY_NAME")
const key = config.get("CLOUDINARY_API_KEY")
const secret = config.get("CLOUDINARY_API_SECRET")

pkg.config({
    cloud_name: name,
    api_key: key,
    api_secret: secret,
})

export default pkg;