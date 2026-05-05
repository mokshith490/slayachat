"""
Configuration settings for the voice ticket booking assistant
"""
import os

# Email configuration
EMAIL_CONFIG = {
    'smtp_server': os.getenv('SMTP_SERVER', 'smtp.gmail.com'),
    'smtp_port': int(os.getenv('SMTP_PORT', '587')),
    'email_address': os.getenv('EMAIL_ADDRESS', ''),
    'email_password': os.getenv('EMAIL_PASSWORD', ''),
}

# Voice settings
VOICE_CONFIG = {
    'recognition_timeout': 5,
    'phrase_timeout': 2,
    'energy_threshold': 4000,
    'tts_rate': 200,
    'tts_volume': 0.9,
}

# Booking settings
BOOKING_CONFIG = {
    'booking_database': 'data/bookings.json',
    'routes_database': 'data/routes.json',
    'confirmation_prefix': 'TKT',
}

# NLP settings
NLP_CONFIG = {
    'confidence_threshold': 0.7,
    'intent_keywords': {
        'book': ['book', 'reserve', 'ticket', 'travel', 'journey'],
        'from': ['from', 'starting', 'departure'],
        'to': ['to', 'destination', 'going', 'arriving'],
        'date': ['on', 'date', 'day', 'when', 'tomorrow', 'today'],
        'transport': ['train', 'flight', 'bus', 'plane', 'aircraft'],
    }
}