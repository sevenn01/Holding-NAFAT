import { NextApiRequest, NextApiResponse } from 'next'
import content from '../../../app/content' // Fixed: Remove the .tsx extension from the import path

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { BlogId } = req.query

    // Problem: req.query parameters can be a string or an array of strings (string[]).
    // Fix: Ensure BlogId is a single string before comparing.
    const id = Array.isArray(BlogId) ? BlogId[0] : BlogId

    if (!id) {
        return res.status(400).json({ message: 'Invalid BlogId' })
    }

    console.log("content->", content)
    const article = content.find((post: any) => post.id.toString() === id)
    if (!article) {
        return res.status(404).json({ message: 'Article not found' })
    }

    res.status(200).json(article)
}