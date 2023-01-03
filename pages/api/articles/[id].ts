import {articles} from '../../../data'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req:NextApiRequest, res:NextApiResponse) {
    const {id} = req.query
    const filtered = articles.filter(article => {
        return article.id === id;
    })
    if(filtered.length > 0){
        res.status(200).json(filtered[0])
    }else{
        res.status(404).json({message: `Article with the id of ${id} is not found`})
    }
}