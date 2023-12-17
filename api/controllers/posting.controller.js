import Posting from "../models/posting.model.js";
import { errorHandler } from "../utils/error.js";

export const createPosting = async (req, res, next) => {

    try{
        const posting = await Posting.create(req.body);
        return res.status(201).json(posting);
    } catch (error) {
        next(error);
    }

};

export const deletePosting = async (req, res, next) => {
    const posting = await Posting.findById(req.params.id);

    if (!posting){
        return next(errorHandler(404, 'posting not found!'));
    }

    if (req.user.id !== posting.userRef){
        return next(errorHandler(401, 'You can only delete your own posts!'));
    }

    try {
        await Posting.findByIdAndDelete(req.params.id);
        res.status(200).json('post is deleted');
    }catch (error){
        next(error);
    }

};

export const updatePosting = async (req, res, next) => {
    const posting = await  Posting.findById(req.params.id);
    if(!posting) {
        return next(errorHandler(404, 'Posting not found!'));
    }
    if(req.user.id != posting.userRef) {
        return next(errorHandler(401, 'You can only update your own postings!'));
    }

    try {
        const updatedPosting = await Posting.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true}
        );
        res.status(200).json(updatedPosting);
    } catch (error) {
        next(error);
    }
}

export const getPosting = async (req, res, next) => {
    try {
        const posting = await Posting.findById(req.params.id);
        if (!posting){
            return next(errorHandler(404, 'Posting not found!'));
        }
        res.status(200).json(posting);
    } catch(error){
        next(error);
    }
};

export const getPostings = async (req, res, next) => {
    try {
        // Use populate to get user details along with posting details
        const postings = await Posting.find().populate('userRef', 'username');

        if (!postings || postings.length === 0) {
            return res.status(404).json({ message: 'No postings found' });
        }

        // Extract relevant details for response
        const postingsWithUsername = postings.map(posting => {
            return {
                _id: posting._id,
                description: posting.description,
                location: posting.location,
                // Add other posting details as needed
                user: {
                    _id: posting.userRef._id,
                    username: posting.userRef.username,
                    // Add other user details as needed
                },
            };
        });

        res.status(200).json(postings);
    } catch (error) {
        next(error);
    }
};