import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResonse } from "@/types/apiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResonse> {

    try {

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Shadowtxt | Verification Code',
            react: VerificationEmail({username, otp:verifyCode}),

        });
        return { success: true, message: "Verification Email send successfully" }

    } catch (error) {
        console.error("Error sending verification email", error);
        return { success: false, message: "Failed to send verification email" }
    }
}