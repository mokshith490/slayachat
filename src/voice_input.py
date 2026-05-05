"""
Voice input and speech recognition module
"""
import sys
from typing import Optional

class VoiceInput:
    """Handles speech recognition and voice input processing"""
    
    def __init__(self):
        """Initialize the voice recognition system"""
        self.recognizer = None
        self.microphone = None
        self.setup_recognition()
    
    def setup_recognition(self):
        """Setup speech recognition components"""
        try:
            # In a full environment, this would import speech_recognition
            # import speech_recognition as sr
            # self.recognizer = sr.Recognizer()
            # self.microphone = sr.Microphone()
            print("Voice recognition initialized (mock mode)")
        except ImportError:
            print("Speech recognition library not available. Running in simulation mode.")
    
    def listen_for_command(self) -> Optional[str]:
        """
        Listen for voice input and convert to text
        
        Returns:
            str: Recognized speech text or None if recognition failed
        """
        try:
            if self.recognizer is None:
                # Simulation mode - get text input instead
                print("\n🎤 Voice Recognition (Simulation Mode)")
                print("Please type your command (or say it aloud if you have speech recognition setup):")
                user_input = input("You: ").strip()
                return user_input if user_input else None
            
            # Real speech recognition would happen here
            # with self.microphone as source:
            #     print("🎤 Listening...")
            #     self.recognizer.adjust_for_ambient_noise(source)
            #     audio = self.recognizer.listen(source, timeout=5)
            # 
            # print("🔄 Processing speech...")
            # text = self.recognizer.recognize_google(audio)
            # return text.lower()
            
        except Exception as e:
            print(f"❌ Error in speech recognition: {e}")
            return None
    
    def test_microphone(self) -> bool:
        """
        Test if microphone is working properly
        
        Returns:
            bool: True if microphone is accessible
        """
        try:
            if self.microphone is None:
                print("📝 Running in text simulation mode")
                return True
            
            # Real microphone test would happen here
            # with self.microphone as source:
            #     self.recognizer.adjust_for_ambient_noise(source, duration=1)
            # return True
            
        except Exception as e:
            print(f"❌ Microphone test failed: {e}")
            return False
    
    def get_confirmation(self, prompt: str = "Please confirm (yes/no): ") -> bool:
        """
        Get yes/no confirmation from user
        
        Args:
            prompt (str): Confirmation prompt to display
            
        Returns:
            bool: True if user confirms, False otherwise
        """
        print(f"\n❓ {prompt}")
        response = self.listen_for_command()
        
        if response:
            response = response.lower().strip()
            return response in ['yes', 'y', 'yeah', 'yep', 'confirm', 'ok', 'okay']
        
        return False