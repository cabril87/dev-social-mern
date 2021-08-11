import Profile from "../models/Profile.js";
import User from "../models/User.js";
import { validationResult } from "express-validator";
import request from "request";
import config from "config";



export const profileGetOne = async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.user.id
        })
            .populate('user', ['name', 'avatar']);

        if (!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' })
        }

        res.json(profile)

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
}

export const profileCreateOne = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const {
        company,
        website,
        location,
        bio,
        status,
        githubusername,
        skills,
        youtube,
        facebook,
        twitter,
        instagram,
        linkedin
    } = req.body;

    //Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;
    if (githubusername) profileFields.githubusername = githubusername;
    if (skills) profileFields.skills = skills.split(',').map(skill => skill.trim());

    //Build social object
    profileFields.social = {}
    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (instagram) profileFields.social.instagram = instagram;

    try {
        let profile = await Profile.findOne({
            user: req.user.id
        });
        if (profile) {
            profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true }
            );
            return res.json(profile)
        }

        //Create
        profile = new Profile(profileFields);
        await profile.save()
        res.json(profile)

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
}

export const profileGetAll = async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'avatar']);
        res.json(profiles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
}

export const profileGetOneUser = async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', ['name', 'avatar']);

        if (!profile) {
            return res.status(400).json({ msg: 'Profile not found ' })
        }
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Profile not found' })
        }
        res.status(500).send('Server Error')
    }
}

export const profileDelete = async (req, res) => {
    try {
        //Remove user post

        //Remove profile
        await Profile.findOneAndRemove({ user: req.user.id })
        //Remove User
        await User.findOneAndRemove({ _id: req.user.id })
        res.json({ msg: 'User deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
}

export const profileAddExperience = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    } = req.body;

    const newExp = {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    }

    const profileFields = {};
    profileFields.experience = {}
    if (current) profileFields.experience.current = current;
    if (title) profileFields.experience.title = title;
    if (company) profileFields.experience.company = company;
    if (location) profileFields.experience.location = location;
    if (from) profileFields.experience.from = from;
    if (description) profileFields.experience.description = description;

    try {
        let profile = await Profile.findOne({ user: req.user.id })

        if (profile) {
            profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true }
            );
            return res.json(profile)
        }

        profile.experience.unshift(newExp)

        await profile.save()

        res.json(profile)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }


}

export const profileDeleteExperience = async (req, res) => {
    try {
        const foundProfile = await Profile.findOne({ user: req.user.id });

        foundProfile.experience = foundProfile.experience.filter(
            (exp) => exp._id.toString() !== req.params.exp_id
        );

        await foundProfile.save();
        return res.status(200).json(foundProfile);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: 'Server error' });
    }
}

export const profileAddEducation = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description
    } = req.body;

    const newEdu = {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description
    }

    const profileFields = {};
    profileFields.education = {}
    if (current) profileFields.education.current = current;
    if (school) profileFields.education.school = school;
    if (degree) profileFields.education.degree = degree;
    if (fieldofstudy) profileFields.education.fieldofstudy = fieldofstudy;
    if (from) profileFields.education.from = from;
    if (description) profileFields.education.description = description;

    try {
        let profile = await Profile.findOne({ user: req.user.id })

        if (profile) {
            profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true }
            );
            return res.json(profile)
        }

        profile.education.unshift(newEdu)

        await profile.save()

        res.json(profile)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }


}

export const profileDeleteEducation = async (req, res) => {
    try {
        const foundProfile = await Profile.findOne({ user: req.user.id });

        foundProfile.education = foundProfile.education.filter(
            (edu) => edu._id.toString() !== req.params.edu_id
        );

        await foundProfile.save();
        return res.status(200).json(foundProfile);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: 'Server error' });
    }
}

export const profileGithub = async (req, res) => {
    try {
        const options = {
            uri: `https://api.github.com/users/${req.params.username}/repos?per_page=5&
            sort=created:asc&client_id=${config.get('githubClientId')}&client_secret=${config.get('githubSecret')}`,
            method: 'GET',
            headers: { 'user-agent': 'node.js' }
        };

        request(options, (error, response, body) => {
            if (error) console.error(error);
            if (response.statusCode !== 200) {
                return res.status(404).json({ msg: 'No github profile found' })
            }
            res.json(JSON.parse(body))
        })

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
}

