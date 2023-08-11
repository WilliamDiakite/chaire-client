import * as nodemailer from 'nodemailer'
import type { Actions } from './$types';
import { NODEMAILER_TOKEN, NODEMAILER_USER, NODEMAILER_SENDTO } from '$env/static/private'

export const prerender = false;

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData()
        const firstname = data.get('firstname')
        const name = data.get('name')
        const email = data.get('email')
        const subject = data.get('subject') as string
        const message = data.get('message')

        const transporter = nodemailer.createTransport({
            host: "smtp-relay.sendinblue.com",
            port: 587,
            secure: false,
            auth: {
                user: NODEMAILER_USER,
                pass: NODEMAILER_TOKEN,
            },
        });

        // send mail with defined transport object
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const info = await transporter.sendMail({
            from: `${firstname} ${name} <${email}>`,
            to: NODEMAILER_SENDTO as string,
            subject,
            message,
        });
    }
} satisfies Actions;