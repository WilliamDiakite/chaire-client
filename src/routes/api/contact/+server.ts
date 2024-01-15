import * as nodemailer from 'nodemailer';
import { NODEMAILER_TOKEN, NODEMAILER_USER, NODEMAILER_SENDTO } from '$env/static/private';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const { name, firstname, email, subject, message } = await request.json();

	const transporter = nodemailer.createTransport({
		host: 'smtp-relay.sendinblue.com',
		port: 587,
		secure: false,
		auth: {
			user: NODEMAILER_USER,
			pass: NODEMAILER_TOKEN
		}
	});

	// send mail with defined transport object
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	try {
		transporter.sendMail({
			from: `${firstname} ${name} <${email}>`,
			to: NODEMAILER_SENDTO as string,
			subject,
			text: message
		});
	} catch (err) {
		console.log(err);
		return new Response('Internal Server Error', { status: 500 });
	}

	return new Response('ok', { status: 200 });
};
