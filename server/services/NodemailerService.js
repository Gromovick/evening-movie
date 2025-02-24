import transporter from "../config/mailer.js";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import path from "path";

class MailerService {
  static async sendMail(to, subject, html) {
    try {
      const mailOptions = {
        from: process.env.SMTP_FROM,
        to,
        subject,
        html,
      };
      const info = await transporter.sendMail(mailOptions);
      console.log(`📩 Email sent to ${to}: ${info.response}`);
      return { success: true, message: `Email sent to ${to}` };
    } catch (error) {
      console.error("❌ Email send error:", error);
      return { success: false, message: "Failed to send email" };
    }
  }

  static async sendVerificationEmail(to) {
    const code = uuidv4().slice(0, 15);
    const link = `${process.env.SERVER_URL}/api/auth/activation/${code}`;
    const templatePath = path.join(process.cwd(), "templates", "verify.html");
    let html = fs.readFileSync(templatePath, "utf8");
    html = html.replace("{{ verification_link }}", link);
    await this.sendMail(to, "Verify your email", html);
    return code;
  }
}

export default MailerService;
