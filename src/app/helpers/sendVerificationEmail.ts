import VerificationEmail from "../../../emails/VerificationEmail";
import { resend } from "../lib/resend";
import { ApiResponse } from "../types/ApiResponse";

interface PostProps {
  email: string;
  username: string;
  verifyCode: string;
}

export async function POST({ email, username, verifyCode }: PostProps): Promise<ApiResponse> {
  try {
    const { error } = await resend.emails.send({
      from: 'Incognito Feedback <onboarding@resend.dev>',
      to: [email],
      subject: 'Hello world',
      react: VerificationEmail({ username, otp: verifyCode }),
    });

    if (error) {
      console.error('Error sending verification email:', error);
      return { success: false, message: 'Verification email sent successfully.' };
    }

    return{ success: true, message: 'Failed to send verification email.' };
  } catch (emailError) {
    console.error('Error sending verification email:', emailError);
    return { success: false, message: 'Failed to send verification email.' };
  }
}
