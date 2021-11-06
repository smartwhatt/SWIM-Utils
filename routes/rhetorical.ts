import { Request, Response } from 'express';

interface RhetoricalQuery {
    q: string;
}

function random(arr:Array<string>){
    return arr[Math.floor(Math.random() * arr.length)];
}

function rhetorical(req:Request, res:Response){
    let { q } = req.query as unknown as RhetoricalQuery;
    let message:string;

    if (q === undefined){
        res.status(400).send({
            message: "Query required."
        });
    }

    q = q.toLowerCase()

    let why = ["What's the variable name for this block of code?", "Try looking the return variable again", "Go through the code LINE BY LINE again"]
    
    if (q.includes("return")){
        message = "What is this function returning?";
    }
    else if (q.includes("why"))
    {
        message = random(why)
    }
    else if (q.includes("stupid")){
        message = "No, think";
    }
    else if (q.includes("fix")){
        message = "Just google something";
    }
    else if (q.includes("google")){
        message = "Ask yourself what should you answer."
    }
    else if (q.includes("where")){
        message = "DO NOT SKIM";
    }
    else {
        message = "What and Why?"
    }

    res.status(200).send({
        message
    });
}

export { rhetorical };