import os
import smtplib
import ssl
from email.message import EmailMessage
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, EmailStr, Field
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Selvakumar Portfolio API", version="1.0.0")


class ContactMessage(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    message: str = Field(min_length=10, max_length=5000)


@app.get("/api/health")
def health_check():
    return {"status": "ok"}


@app.post("/api/contact")
def send_contact_message(payload: ContactMessage):
    smtp_host = os.getenv("SMTP_HOST")
    smtp_username = os.getenv("SMTP_USERNAME")
    smtp_password = os.getenv("SMTP_PASSWORD")
    recipient = os.getenv("CONTACT_TO_EMAIL")

    if not all((smtp_host, smtp_username, smtp_password, recipient)):
        raise HTTPException(
            status_code=503,
            detail="Contact form email is not configured yet. Please email me directly.",
        )

    email = EmailMessage()
    email["Subject"] = "New portfolio contact message"
    email["From"] = os.getenv("SMTP_FROM_EMAIL", smtp_username)
    email["To"] = recipient
    email["Reply-To"] = str(payload.email)
    email.set_content(
        f"Name: {payload.name}\nEmail: {payload.email}\n\nMessage:\n{payload.message}"
    )

    try:
        smtp_port = int(os.getenv("SMTP_PORT", "587"))
        with smtplib.SMTP(smtp_host, smtp_port, timeout=12) as server:
            server.starttls(context=ssl.create_default_context())
            server.login(smtp_username, smtp_password)
            server.send_message(email)
    except (OSError, smtplib.SMTPException, ValueError) as error:
        print(f"Contact email delivery failed: {type(error).__name__}")
        raise HTTPException(
            status_code=502,
            detail="The message could not be delivered right now. Please try again later.",
        ) from error

    return {"message": "Message sent successfully. I'll get back to you soon!"}


# Vercel builds the Vite site into dist and serves these assets through its CDN.
frontend_dist = Path(__file__).parent / "dist"
if frontend_dist.is_dir():
    app.mount("/", StaticFiles(directory=frontend_dist, html=True), name="frontend")
