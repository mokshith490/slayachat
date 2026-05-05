# SlayChat

A group chat platform built for people who own networks and want to stay in control — coordinate without exposing contact details.

## Stack

- **Frontend**: Next.js 15, React, Tailwind CSS
- **Backend**: Python voice/booking assistant
- **Tooling**: TypeScript, Vite, PostCSS

## Project Structure

```
slayachat/
├── src/
│   ├── app/                    # Next.js App Router pages
│   ├── components/             # React UI components
│   ├── booking_system.py       # Ticket booking logic
│   ├── nlp_processor.py        # Natural language processing
│   ├── email_sender.py         # Email notifications
│   ├── voice_input.py          # Speech recognition
│   ├── voice_output.py         # Text-to-speech output
│   └── config.py               # Configuration settings
├── data/
│   ├── bookings.json           # Mock booking database
│   └── routes.json             # Available routes
├── public/                     # Static assets
├── main.py                     # Python app entry point
└── requirements.txt            # Python dependencies
```

## Getting Started

### Frontend

```bash
npm install
npm run dev
```

### Python Backend

```bash
pip install -r requirements.txt
python main.py
```
