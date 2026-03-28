import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, message } = body as { name?: string; email?: string; message?: string }

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Все поля обязательны' }, { status: 400 })
    }

    // Forward to CRMPRO webchat endpoint if configured
    const crmpUrl = process.env.CRMPRO_API_URL
    if (crmpUrl) {
      const sessionId = `web-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
      await fetch(`${crmpUrl}/webhooks/webchat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          name: name.trim(),
          email: email.trim(),
          text: message.trim(),
        }),
      }).catch(() => {
        // Don't fail the request if CRM is unreachable
      })
    }

    // Send notification to Telegram bot owner
    const tgToken = process.env.TELEGRAM_NOTIFY_BOT_TOKEN
    const tgChatId = process.env.TELEGRAM_NOTIFY_CHAT_ID
    if (tgToken && tgChatId) {
      const text = `📩 Новая заявка с сайта\n\nИмя: ${name.trim()}\nEmail: ${email.trim()}\nСообщение: ${message.trim()}`
      await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: tgChatId, text }),
      }).catch(() => {})
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
