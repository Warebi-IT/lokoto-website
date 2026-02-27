import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface FormPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const handler = async (event: { httpMethod: string; body: string | null }) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  let payload: FormPayload;
  try {
    payload = JSON.parse(event.body ?? '{}');
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Payload invalide' }) };
  }

  const { name, email, phone, message } = payload;

  if (!name || !email || !phone) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Champs requis manquants' }) };
  }

  const { error } = await resend.emails.send({
    // Remplacez par votre domaine vérifié sur Resend une fois lokoto.sn configuré
    // Ex : from: 'Lokoto <noreply@lokoto.sn>'
    from: 'Lokoto <onboarding@resend.dev>',
    to: ['moussamarega8@gmail.com', 'furrer.yann@gmail.com'],
    replyTo: email,
    subject: `🚗 Nouvelle inscription — ${name}`,
    html: `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#F6F7F6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:560px;margin:32px auto;padding:0 16px;">

    <!-- Header -->
    <div style="background:#1a1f1b;border-radius:16px 16px 0 0;padding:28px 32px;">
      <span style="display:inline-block;background:#2ECC71;color:white;font-size:11px;font-weight:700;padding:4px 12px;border-radius:99px;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;">
        Nouvelle inscription
      </span>
      <h1 style="margin:0;color:white;font-size:22px;font-weight:800;letter-spacing:-.02em;line-height:1.2;">
        ${name} veut rejoindre la liste d'attente Lokoto
      </h1>
    </div>

    <!-- Body -->
    <div style="background:white;border-radius:0 0 16px 16px;padding:28px 32px;border:1px solid #e4e7e4;border-top:none;">
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:11px 0;color:#999;font-size:11px;text-transform:uppercase;letter-spacing:.06em;width:110px;border-bottom:1px solid #f2f4f2;">Nom</td>
          <td style="padding:11px 0;font-weight:600;color:#111;border-bottom:1px solid #f2f4f2;">${name}</td>
        </tr>
        <tr>
          <td style="padding:11px 0;color:#999;font-size:11px;text-transform:uppercase;letter-spacing:.06em;border-bottom:1px solid #f2f4f2;">Email</td>
          <td style="padding:11px 0;font-weight:600;border-bottom:1px solid #f2f4f2;">
            <a href="mailto:${email}" style="color:#2ECC71;text-decoration:none;">${email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:11px 0;color:#999;font-size:11px;text-transform:uppercase;letter-spacing:.06em;border-bottom:1px solid #f2f4f2;">WhatsApp</td>
          <td style="padding:11px 0;font-weight:600;border-bottom:1px solid #f2f4f2;">
            <a href="tel:${phone}" style="color:#2ECC71;text-decoration:none;">${phone}</a>
          </td>
        </tr>
        ${message ? `
        <tr>
          <td style="padding:11px 0;color:#999;font-size:11px;text-transform:uppercase;letter-spacing:.06em;vertical-align:top;">Flotte</td>
          <td style="padding:11px 0;font-weight:600;color:#111;">${message}</td>
        </tr>` : ''}
      </table>

      <div style="margin-top:20px;background:#F6F7F6;border-radius:10px;padding:14px 16px;">
        <p style="margin:0;font-size:12px;color:#888;line-height:1.5;">
          💡 <strong style="color:#333;">Répondez directement</strong> à cet email pour contacter ${name} — la réponse partira à <strong>${email}</strong>.
        </p>
      </div>
    </div>

    <!-- Footer -->
    <p style="text-align:center;color:#bbb;font-size:11px;margin-top:20px;">
      Lokoto · Plateforme de gestion de flotte 🇸🇳
    </p>

  </div>
</body>
</html>
    `.trim(),
  });

  if (error) {
    console.error('[send-email] Resend error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ success: true }),
  };
};
