import { Request, Response } from 'express';

interface RhetoricalQuery {
    q: string;
}

async function rhetorical(req:Request, res:Response){
    const { q } = req.query as unknown as RhetoricalQuery;
    
    res.status(200).send({
        message: q
    });
}

export { rhetorical };