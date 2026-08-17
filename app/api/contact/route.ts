import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_EMAIL = process.env.CONTACT_EMAIL;

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");
      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 },
      );
    }

    if (!CONTACT_EMAIL) {
      console.error("CONTACT_EMAIL is missing");
      return NextResponse.json(
        {
          success: false,
          message: "Contact email is not configured.",
        },
        { status: 500 },
      );
    }

    const body = await request.json();

    const name = typeof body.name === "string" ? body.name.trim() : "";

    const email = typeof body.email === "string" ? body.email.trim() : "";

    const subject = typeof body.subject === "string" ? body.subject.trim() : "";

    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 },
      );
    }

    if (name.length > 100) {
      return NextResponse.json(
        {
          success: false,
          message: "Name is too long.",
        },
        { status: 400 },
      );
    }

    if (email.length > 200) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is too long.",
        },
        { status: 400 },
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        {
          success: false,
          message: "Message is too long.",
        },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 },
      );
    }

    const finalSubject = subject || `New portfolio inquiry from ${name}`;

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: finalSubject,

      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>

          <body
            style="
              margin: 0;
              padding: 40px 20px;
              background: #0a0a0a;
              font-family: Arial, Helvetica, sans-serif;
              color: #ffffff;
            "
          >
            <div
              style="
                max-width: 640px;
                margin: 0 auto;
                background: #111111;
                border: 1px solid #292929;
                border-radius: 12px;
                overflow: hidden;
              "
            >
              <div
                style="
                  padding: 28px 32px;
                  border-bottom: 1px solid #292929;
                  background: #151515;
                "
              >
                <p
                  style="
                    margin: 0 0 8px;
                    color: #ef4444;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 3px;
                  "
                >
                  PORTFOLIO INQUIRY
                </p>

                <h1
                  style="
                    margin: 0;
                    font-size: 26px;
                    line-height: 1.3;
                    color: #ffffff;
                  "
                >
                  New message received
                </h1>
              </div>

              <div style="padding: 32px;">
                <div style="margin-bottom: 24px;">
                  <p
                    style="
                      margin: 0 0 6px;
                      color: #888888;
                      font-size: 11px;
                      font-weight: 700;
                      letter-spacing: 1.5px;
                    "
                  >
                    FROM
                  </p>

                  <p
                    style="
                      margin: 0;
                      font-size: 16px;
                      color: #ffffff;
                    "
                  >
                    ${escapeHtml(name)}
                  </p>

                  <p
                    style="
                      margin: 5px 0 0;
                      font-size: 14px;
                      color: #aaaaaa;
                    "
                  >
                    ${escapeHtml(email)}
                  </p>
                </div>

                <div style="margin-bottom: 24px;">
                  <p
                    style="
                      margin: 0 0 6px;
                      color: #888888;
                      font-size: 11px;
                      font-weight: 700;
                      letter-spacing: 1.5px;
                    "
                  >
                    SUBJECT
                  </p>

                  <p
                    style="
                      margin: 0;
                      font-size: 16px;
                      color: #ffffff;
                    "
                  >
                    ${escapeHtml(finalSubject)}
                  </p>
                </div>

                <div>
                  <p
                    style="
                      margin: 0 0 10px;
                      color: #888888;
                      font-size: 11px;
                      font-weight: 700;
                      letter-spacing: 1.5px;
                    "
                  >
                    MESSAGE
                  </p>

                  <div
                    style="
                      padding: 18px;
                      background: #0a0a0a;
                      border: 1px solid #292929;
                      border-radius: 8px;
                      color: #dddddd;
                      font-size: 15px;
                      line-height: 1.7;
                      white-space: pre-wrap;
                    "
                  >
                    ${escapeHtml(message)}
                  </div>
                </div>
              </div>

              <div
                style="
                  padding: 20px 32px;
                  border-top: 1px solid #292929;
                  background: #0d0d0d;
                "
              >
                <p
                  style="
                    margin: 0;
                    color: #666666;
                    font-size: 12px;
                  "
                >
                  Sent from your portfolio contact form.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your message right now.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
