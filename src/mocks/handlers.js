/* istanbul ignore file */
import { rest } from 'msw'

export const handlers = [
    rest.post(`/api/v1/account/login`, (req, res, ctx) => {
        switch(req.body.email){
            case "unknownerror@gmail.com":
                return res(
                    ctx.delay(1000),
                    ctx.status(500),
                    ctx.json({error_message:"test"})
                )
            case "badrequest@gmail.com":
                return res(
                    ctx.delay(1000),
                    ctx.status(400),
                    ctx.json({error_message:"E-mail or password are incorrect"})
                )
            default:
                return res(
                    ctx.delay(1000),
                    ctx.status(200),
                    ctx.json({id:"test_id"})
                )
        }
    }),
    rest.post(`/api/v1/account/signup`, (req, res, ctx) => {
        console.log("REQemail", req.body)
        switch(req.body.email){
            case "unknownerror@gmail.com":
                return res(
                    ctx.delay(1000),
                    ctx.status(500),
                    ctx.json({error_message:"test"})
                )
            case "alreadyexist@gmail.com":
                console.log("INSIDE ALREADY")
                return res(
                    ctx.delay(1000),
                    ctx.status(409),
                    ctx.json({error_message:"That username is already registered. If you forgot your password, click on recovery."})
                )
            default:
                return res(
                    ctx.delay(1000),
                    ctx.status(200),
                    ctx.json({id:"test_id"})
                )
        }
    }),
    
]