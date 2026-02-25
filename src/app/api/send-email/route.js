import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const data = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      protectHome,
      financialProtection,
      protectedPeople,
      concerns,
    } = data;

    const msg = {
      to: process.env.EMAIL_TO,
      from: process.env.EMAIL_FROM,
      subject: "New Questionnaire Submission",
      text: `
NEW QUESTIONNAIRE SUBMISSION

Client Email: ${email || "Not provided"}

Name: ${firstName} ${lastName}
Phone: ${phone}

Trying to protect home: ${protectHome}
Wants financial protection: ${financialProtection}

People to protect:
${(protectedPeople || []).join(", ") || "None selected"}

Biggest concerns:
${(concerns || []).join(", ") || "None selected"}
      `,
      html: `
        <h2>New Questionnaire Submission</h2>

        <p><strong>Client Email:</strong> ${email || "Not provided"}</p>

        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Protect Home:</strong> ${protectHome}</p>
        <p><strong>Financial Protection:</strong> ${financialProtection}</p>

        <p><strong>People to Protect:</strong><br/>
        ${(protectedPeople || []).join("<br/>") || "None selected"}
        </p>

        <p><strong>Concerns:</strong><br/>
        ${(concerns || []).join("<br/>") || "None selected"}
        </p>
      `,
    };

    await sgMail.send(msg);

    return Response.json({ success: true });

  } catch (error) {
    console.error("Send email error:", error);

    return Response.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
