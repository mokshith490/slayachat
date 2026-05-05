"""
Main application runner for the Voice-Based Ticket Booking Assistant
"""
import sys
import os
from typing import Dict, Optional

# Add src directory to Python path
sys.path.append(os.path.join(os.path.dirname(__file__), 'src'))

from src.voice_input import VoiceInput
from src.voice_output import VoiceOutput
from src.nlp_processor import NLPProcessor
from src.booking_system import BookingSystem
from src.email_sender import EmailSender

class VoiceBookingAssistant:
    """Main application class for the voice-based ticket booking assistant"""
    
    def __init__(self):
        """Initialize all components of the assistant"""
        print("🚀 Initializing Voice Booking Assistant...")
        
        # Initialize components
        self.voice_input = VoiceInput()
        self.voice_output = VoiceOutput()
        self.nlp_processor = NLPProcessor()
        self.booking_system = BookingSystem()
        self.email_sender = EmailSender()
        
        # Application state
        self.running = True
        self.current_session = {}
        
        print("✅ Assistant initialized successfully!")
    
    def run(self):
        """Main application loop"""
        print("\n" + "="*60)
        print("🎤 VOICE-BASED TICKET BOOKING ASSISTANT")
        print("="*60)
        
        # Welcome message
        self.voice_output.welcome_message()
        
        # Test microphone
        if not self.voice_input.test_microphone():
            print("⚠️  Microphone test failed. Running in text-only mode.")
        
        # Main interaction loop
        while self.running:
            try:
                self.handle_user_interaction()
            except KeyboardInterrupt:
                print("\n👋 Goodbye!")
                break
            except Exception as e:
                print(f"❌ An error occurred: {e}")
                self.voice_output.error_message("general")
        
        # Farewell message
        self.voice_output.goodbye_message()
    
    def handle_user_interaction(self):
        """Handle a single user interaction"""
        # Get voice input
        user_input = self.voice_input.listen_for_command()
        
        if not user_input:
            self.voice_output.error_message("speech")
            return
        
        # Check for exit commands
        if self.is_exit_command(user_input):
            self.running = False
            return
        
        # Check for greeting
        if self.is_greeting(user_input):
            self.voice_output.speak("Hello! How can I help you with your travel booking today?")
            return
        
        # Process booking request
        self.process_booking_request(user_input)
    
    def process_booking_request(self, user_input: str):
        """
        Process a booking request from the user
        
        Args:
            user_input (str): User's voice input
        """
        print(f"\n🔄 Processing request: '{user_input}'")
        
        # Extract intent using NLP
        intent = self.nlp_processor.extract_intent(user_input)
        print(f"🧠 Extracted intent: {intent}")
        
        # Validate the booking request
        is_valid, error_message = self.nlp_processor.validate_booking_request(intent)
        
        if not is_valid:
            self.voice_output.speak(f"I'm sorry, but {error_message}")
            return
        
        # Search for available routes
        routes = self.booking_system.search_routes(
            intent['origin'],
            intent['destination'],
            intent['transport_type'],
            intent['date']
        )
        
        if not routes:
            message = f"Sorry, I couldn't find any {intent['transport_type']} options from {intent['origin']} to {intent['destination']} on {intent['date']}."
            self.voice_output.speak(message)
            return
        
        # Present options to user
        self.present_booking_options(intent, routes)
    
    def present_booking_options(self, intent: Dict, routes: list):
        """
        Present booking options to the user
        
        Args:
            intent (dict): User's booking intent
            routes (list): Available route options
        """
        # Select best route (for simplicity, take the first one)
        selected_route = routes[0]
        
        # Create booking details
        booking_details = {
            'origin': intent['origin'],
            'destination': intent['destination'],
            'transport_type': intent['transport_type'],
            'date': intent['date'],
            'price': selected_route['price'],
            'schedule': selected_route['schedule']
        }
        
        # Present the option to user
        message = f"""
        I found a {intent['transport_type']} from {intent['origin']} to {intent['destination']} on {intent['date']}.
        
        Details:
        - Departure: {selected_route['schedule']['departure_time']}
        - Arrival: {selected_route['schedule']['arrival_time']}
        - Price: ₹{selected_route['price']}
        - Seats available: {selected_route['seats_available']}
        
        Would you like me to book this ticket for you?
        """
        
        self.voice_output.speak(message)
        
        # Get confirmation
        if self.voice_input.get_confirmation("Shall I proceed with this booking? "):
            self.confirm_booking(booking_details)
        else:
            self.voice_output.speak("No problem. Let me know if you'd like to search for other options.")
    
    def confirm_booking(self, booking_details: Dict):
        """
        Confirm and process the booking
        
        Args:
            booking_details (dict): Booking information
        """
        # Get user email
        email = self.get_user_email()
        if not email:
            return
        
        # Validate booking data
        is_valid, error_message = self.booking_system.validate_booking_data(booking_details)
        if not is_valid:
            self.voice_output.speak(f"Sorry, there's an issue with the booking: {error_message}")
            return
        
        # Create booking
        try:
            booking = self.booking_system.create_booking(booking_details, email)
            
            # Send confirmation email
            email_sent = self.email_sender.send_booking_confirmation(booking, email)
            
            # Provide confirmation message
            if email_sent:
                message = f"""
                Perfect! Your ticket has been booked successfully. 
                Your booking reference is {booking['booking_id']}.
                I've sent the complete details to your email address {email}.
                Have a wonderful journey!
                """
            else:
                message = f"""
                Your ticket has been booked successfully with booking reference {booking['booking_id']}.
                I couldn't send the email confirmation, but your booking is confirmed.
                Please note down your booking reference: {booking['booking_id']}
                """
            
            self.voice_output.speak(message)
            
            # Show booking summary
            print("\n" + self.booking_system.get_booking_summary(booking))
            
        except Exception as e:
            self.voice_output.speak(f"I'm sorry, there was an error processing your booking: {str(e)}")
    
    def get_user_email(self) -> Optional[str]:
        """
        Get user's email address for confirmation
        
        Returns:
            str: User's email address or None if not provided
        """
        self.voice_output.speak("I'll need your email address to send the booking confirmation.")
        print("\n📧 Please provide your email address:")
        
        email = self.voice_input.listen_for_command()
        
        if email and '@' in email and '.' in email:
            return email.strip()
        else:
            self.voice_output.speak("I didn't get a valid email address. Please try booking again with your email.")
            return None
    
    def is_exit_command(self, text: str) -> bool:
        """Check if the input is an exit command"""
        exit_commands = ['exit', 'quit', 'goodbye', 'bye', 'stop', 'end']
        return any(cmd in text.lower() for cmd in exit_commands)
    
    def is_greeting(self, text: str) -> bool:
        """Check if the input is a greeting"""
        greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening']
        return any(greeting in text.lower() for greeting in greetings)

def main():
    """Main entry point of the application"""
    try:
        # Create and run the assistant
        assistant = VoiceBookingAssistant()
        assistant.run()
        
    except Exception as e:
        print(f"❌ Failed to start the assistant: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()