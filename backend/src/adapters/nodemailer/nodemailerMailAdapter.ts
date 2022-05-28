import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mailAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "70f20217b93e6f",
    pass: "ff040b87cade59",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Feedget Team <team@feedget.com>",
      to: "Bruno Vasconcellos <bbcvasconcellos@gmail.com>",
      subject,
      html: body,
    });
  }
}
