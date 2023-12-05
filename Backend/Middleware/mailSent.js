import nodemailer from "nodemailer";

export default function mailSent(userMail,mailSubject, mailBody) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'lauren.conroy83@ethereal.email',
        pass: 'rSGprQHJkEJY8vdWcr'
    }
  });

  const mailData = {
    from: "ephraim.west26@ethereal.email",
    to: `${userMail}`,
    subject: `${mailSubject}`,
    text: `${mailBody}`,
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      throw new Error("OTP not sent for internal error");
    }
  });
}
