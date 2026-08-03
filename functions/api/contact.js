// Cloudflare Pages Function: handles POST /api/contact from the contact form.
// Sends an email via Resend (https://resend.com). Configure these in the
// Cloudflare Pages project's environment variables:
//   RESEND_API_KEY     (required)  API key from your Resend account
//   CONTACT_TO_EMAIL    (optional) defaults to alex@colwelllawoffice.com
//   CONTACT_FROM_EMAIL  (optional) defaults to Resend's shared test sender
export async function onRequestPost(context) {
  const { request, env } = context;
  const formData = await request.formData();

  // Honeypot: bots that blindly fill every field trip this hidden input.
  // Real users never see or fill it. Pretend success without sending mail.
  if (formData.get("company")) {
    return Response.redirect(new URL("/contact/thank-you/", request.url), 303);
  }

  const name = (formData.get("name") || "").toString().trim();
  const email = (formData.get("email") || "").toString().trim();
  const phone = (formData.get("phone") || "").toString().trim();
  const message = (formData.get("message") || "").toString().trim();

  if (!name || !email || !message) {
    return redirectWithError(request, "missing");
  }

  if (!env.RESEND_API_KEY) {
    console.error("Contact form: RESEND_API_KEY is not configured in this environment.");
    return redirectWithError(request, "config");
  }

  const toEmail = env.CONTACT_TO_EMAIL || "alex@colwelllawoffice.com";
  const fromEmail = env.CONTACT_FROM_EMAIL || "Colwell Law Office Website <onboarding@resend.dev>";

  const emailText = [
    "New consultation request from the website contact form:",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "(not provided)"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `New website inquiry from ${name}`,
        text: emailText,
      }),
    });

    if (!resendResponse.ok) {
      const detail = await resendResponse.text();
      console.error("Contact form: Resend API error", resendResponse.status, detail);
      return redirectWithError(request, "send");
    }
  } catch (err) {
    console.error("Contact form: failed to reach Resend API", err);
    return redirectWithError(request, "send");
  }

  return Response.redirect(new URL("/contact/thank-you/", request.url), 303);
}

function redirectWithError(request, code) {
  const url = new URL("/contact/", request.url);
  url.searchParams.set("error", code);
  return Response.redirect(url, 303);
}
