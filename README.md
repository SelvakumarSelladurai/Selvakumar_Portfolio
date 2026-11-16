# Selvakumar Portfolio

Responsive React and Vite portfolio with a FastAPI contact endpoint.

## Run locally

1. Install frontend packages with `npm ci`.
2. Create and activate a Python virtual environment, then install backend packages with `pip install -r requirements.txt`.
3. Copy `.env.example` to `.env` and set SMTP credentials. For Gmail, use an app password.
4. Start the API in one terminal with `uvicorn app:app --reload --port 8000`.
5. Start the frontend in another terminal with `npm run dev`.

Vite forwards `/api` requests to `http://127.0.0.1:8000`. Check the backend at `/api/health`; the contact form posts to `/api/contact`.

## Deploy to Vercel

Import this repository into Vercel. The configured build runs `npm ci && npm run build`; Vercel serves the Vite `dist` assets and runs the FastAPI app from `app.py`.

Add these environment variables in Vercel Project Settings → Environment Variables:

- `SMTP_HOST`
- `SMTP_PORT` (usually `587`)
- `SMTP_USERNAME`
- `SMTP_PASSWORD`
- `SMTP_FROM_EMAIL`
- `CONTACT_TO_EMAIL`

Deploy after adding the variables. The contact form returns a setup message until SMTP is configured.
