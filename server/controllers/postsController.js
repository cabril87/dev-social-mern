import { validationResult } from "express-validator";
import Profile from "../models/Profile.js";
import User from "../models/User.js";
import Posts from "../models/Posts.js";

export const postCreate = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const user = await User.findById(req.user.id).select('-password')

        const newPost = new Posts({
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        })

        const post = await newPost.save()
        res.json(post)

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }

}

export const postGetAll = async (req, res) => {
    try {
        const posts = await Posts.find().sort({ date: -1 })
        res.json(posts)

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
}

export const postGetOne = async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id)
        if(!post) {
            return res.status(404).json({ msg: 'Post not found' })
        }

        res.json(post)

    } catch (err) {
        console.error(err.message);

        if(err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Post not found' })
        }
        res.status(500).send('Server Error')
    }
}

export const postDelete = async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id)

        if(!post) {
            return res.status(404).json({ msg: 'Post not found' })
        }

        if(post.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' })
        }
        
        await post.remove()

        res.json({ msg: ' Post removed'})

    } catch (err) {
        console.error(err.message);
        if(err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Post not found' })
        }
        res.status(500).send('Server Error')
    }
}