# Voice-Based Ticket Booking Assistant

A Python-based voice assistant that helps users book tickets through natural language voice commands.

## Features

- 🎤 **Voice Input**: Speech recognition for natural language commands
- 🧠 **NLP Processing**: Intent recognition for booking requests
- 🎫 **Ticket Booking**: Simulated booking system with confirmation
- 📧 **Email Notifications**: Automated booking confirmations via email
- 🔊 **Voice Responses**: Text-to-speech feedback to users

## Project Structure

```
voice-ticket-assistant/
├── src/
│   ├── voice_input.py          # Speech recognition and input handling
│   ├── nlp_processor.py        # Natural language processing and intent extraction
│   ├── booking_system.py       # Ticket booking logic and simulation
│   ├── email_sender.py         # Email notification system
│   ├── voice_output.py         # Text-to-speech output
│   └── config.py              # Configuration settings
├── data/
│   ├── bookings.json          # Mock booking database
│   └── routes.json            # Available routes data
├── main.py                    # Main application runner
├── requirements.txt           # Python dependencies
└── README.md                  # This file
```

## Setup Instructions

### 1. Install Dependencies

**Note**: This project requires third-party Python libraries that are not available in WebContainer. To run locally:

```bash
pip install -r requirements.txt
```

### 2. Email Configuration

Create a `.env` file with your email credentials:

```bash
EMAIL_ADDRESS=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
```

### 3. Initial Setup

Download NLTK data (required for NLP processing):

```bash
python -c "import nltk; nltk.download('punkt'); nltk.download('stopwords')"
```

### 4. Run the Application

```bash
python main.py
```

## Usage Examples

The assistant understands natural language commands like:

- "Book me a train ticket from Bangalore to Delhi on Monday"
- "I need a flight from Mumbai to Chennai tomorrow"
- "Reserve a bus ticket from Pune to Goa next Friday"

## Voice Commands

1. **Start**: Say "Hello" or "Hi" to activate the assistant
2. **Book**: Describe your travel requirements naturally
3. **Confirm**: Say "Yes" to confirm booking details
4. **Exit**: Say "Exit", "Quit", or "Goodbye" to end

## WebContainer Limitations

This project is designed to run in a full Python environment with pip support. The current WebContainer environment has limitations:

- No third-party library installation (no pip)
- Limited to Python standard library only
- Speech recognition and text-to-speech require external libraries

To run this project fully, use a local Python environment or a cloud platform that supports pip installations.

## Contributing

Feel free to enhance the NLP processing, add more booking providers, or improve the voice recognition accuracy.