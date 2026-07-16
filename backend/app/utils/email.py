import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

ADMIN_EMAIL = os.getenv('ADMIN_EMAIL', 'admin@sawariyasolar.com')
SMTP_HOST = os.getenv('SMTP_HOST', '')
SMTP_PORT = int(os.getenv('SMTP_PORT', '587'))
SMTP_USER = os.getenv('SMTP_USER', '')
SMTP_PASSWORD = os.getenv('SMTP_PASSWORD', '')
SMTP_USE_TLS = os.getenv('SMTP_USE_TLS', 'true').lower() in ('true', '1', 'yes')


def send_lead_notification(lead: dict) -> None:
    if not SMTP_HOST or not SMTP_USER or not SMTP_PASSWORD:
        return

    message = MIMEMultipart('alternative')
    message['Subject'] = 'New Quote Request from Sawariya Solar'
    message['From'] = SMTP_USER
    message['To'] = ADMIN_EMAIL

    html = f"""
    <html>
      <body>
        <p>A new quote request has been submitted.</p>
        <p><strong>Name:</strong> {lead['name']}</p>
        <p><strong>Email:</strong> {lead['email']}</p>
        <p><strong>Phone:</strong> {lead['phone']}</p>
        <p><strong>Property type:</strong> {lead['property_type']}</p>
        <p><strong>Monthly bill:</strong> {lead['monthly_bill']}</p>
        <p><strong>Address:</strong> {lead['address']}</p>
        <p><strong>Message:</strong> {lead.get('message') or '—'}</p>
      </body>
    </html>
    """

    message.attach(MIMEText(html, 'html'))

    with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=10) as smtp:
        if SMTP_USE_TLS:
            smtp.starttls()
        smtp.login(SMTP_USER, SMTP_PASSWORD)
        smtp.send_message(message)
