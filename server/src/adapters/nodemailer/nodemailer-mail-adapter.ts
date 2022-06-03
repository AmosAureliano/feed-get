import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3c903befa1d6e3",
      pass: "6fd170720562f1"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData){

    await transport.sendMail({
        from: "Equipe Feedget <contato@feedget.com>",
        to: "Amós Aureliano <contato@amosaureliano.com.br>",
        subject,
        html: body
    })

    }
}