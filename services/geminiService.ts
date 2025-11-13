
import { GoogleGenAI } from "@google/genai";
import type { AppointmentData } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateConfirmationMessage = async (details: AppointmentData): Promise<string> => {
  const { name, date, time, reason } = details;

  const prompt = `
    Generate a friendly and professional confirmation message for a doctor's appointment request with the following details:
    - Name: ${name}
    - Preferred Date: ${date}
    - Preferred Time: ${time}
    - Reason for Visit: "${reason}"

    The message should:
    1. Acknowledge the receipt of the appointment request.
    2. Mention the patient's name and preferred date/time.
    3. Clearly state that this is a REQUEST and not a final booking.
    4. Inform the patient that the clinic staff will contact them shortly via phone or email to confirm the final appointment details.
    5. Maintain a warm, reassuring, and professional tone.
    6. Do not use markdown formatting.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating confirmation message:", error);
    return "Thank you for your request. We have received your details and will contact you shortly to confirm your appointment. If you don't hear from us within 24 hours, please call our office.";
  }
};
