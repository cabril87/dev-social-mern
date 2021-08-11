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

export const postLike = async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id);

        if(post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            return res.status(400).json({ msg: 'Post already liked'})
        }
        post.likes.unshift({ user: req.user.id});

        await post.save();
        res.json(post.likes)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
}

export const postUnLike = async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id);

        if(post.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
            return res.status(400).json({ msg: 'Post has not yet been liked'})
        }
        const removeIndex = post.likes.map(like => like.user.toString()).indexOf(req.user.id);

        post.likes.splice(removeIndex, 1)

        await post.save();
        res.json(post.likes)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
}

export const postCommentCreate = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const user = await User.findById(req.user.id).select('-password');
        const post = await Posts.findById(req.params.id);

        const newComment = new Posts({
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        })

        post.comments.unshift(newComment)

        await post.save()
        res.json(post.comments)

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }

}

export const postCommentDelete = async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id);
        //Pull out comment
        const comment = post.comments.find(comment => comment.id === req.params.comment_id);
        //Make sure comments exist
        if(!comment) {
            return res.status(404).json({ msg: 'Comment does not exist' })
        }
        //check user
        if(comment.user.toString() !== req.user.id ) {
            return res.status(401).json({ msg: 'User not authorized' })
        }

        const removeIndex = post.comments.map(comment => comment.user.toString()).indexOf(req.user.id);

        post.comments.splice(removeIndex, 1)

        await post.save();
        res.json(post.comments)

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}