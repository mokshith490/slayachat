"""
Text-to-speech output module
"""
import sys
from typing import Optional

class VoiceOutput:
    """Handles text-to-speech output"""
    
    def __init__(self):
        """Initialize the text-to-speech engine"""
        self.engine = None
        self.setup_tts()
    
    def setup_tts(self):
        """Setup text-to-speech engine"""
        try:
            # In a full environment, this would import pyttsx3
            # import pyttsx3
            # self.engine = pyttsx3.init()
            # self.configure_voice()
            print("Text-to-speech initialized (mock mode)")
        except ImportError:
            print("Text-to-speech library not available. Using text output only.")
    
    def configure_voice(self):
        """Configure voice properties"""
        if self.engine:
            # voices = self.engine.getProperty('voices')
            # self.engine.setProperty('voice', voices[0].id)  # Female voice
            # self.engine.setProperty('rate', 200)  # Speed
            # self.engine.setProperty('volume', 0.9)  # Volume
            pass
    
    def speak(self, text: str, print_text: bool = True):
        """
        Convert text to speech and optionally print it
        
        Args:
            text (str): Text to convert to speech
            print_text (bool): Whether to also print the text
        """
        if print_text:
            print(f"🤖 Assistant: {text}")
        
        try:
            if self.engine:
                # self.engine.say(text)
                # self.engine.runAndWait()
                pass
            else:
                # In simulation mode, we just print
                pass
                
        except Exception as e:
            print(f"❌ Error in text-to-speech: {e}")
    
    def welcome_message(self):
        """Speak the welcome message"""
        message = """
        Hello! I'm your voice-based ticket booking assistant. 
        I can help you book train, flight, or bus tickets. 
        Just tell me where you want to go, when you want to travel, and I'll take care of the rest!
        
        Try saying something like: 'Book me a train ticket from Bangalore to Delhi on Monday'
        """
        self.speak(message)
    
    def goodbye_message(self):
        """Speak the goodbye message"""
        message = "Thank you for using the ticket booking assistant. Have a great journey!"
        self.speak(message)
    
    def error_message(self, error_type: str = "general"):
        """
        Speak appropriate error messages
        
        Args:
            error_type (str): Type of error (speech, booking, email, etc.)
        """
        messages = {
            "speech": "I'm sorry, I couldn't understand what you said. Could you please repeat?",
            "booking": "I'm having trouble processing your booking request. Please try again with clear details.",
            "email": "There was an issue sending your confirmation email, but your ticket is booked.",
            "general": "I'm sorry, something went wrong. Please try again."
        }
        
        self.speak(messages.get(error_type, messages["general"]))