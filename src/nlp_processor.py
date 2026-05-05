"""
Natural Language Processing module for intent recognition
"""
import re
from datetime import datetime, timedelta
from typing import Dict, Optional, List
from src.config import NLP_CONFIG

class NLPProcessor:
    """Processes natural language commands to extract booking intents"""
    
    def __init__(self):
        """Initialize the NLP processor"""
        self.intent_keywords = NLP_CONFIG['intent_keywords']
        self.cities = self.load_cities()
        self.date_patterns = self.setup_date_patterns()
    
    def load_cities(self) -> List[str]:
        """Load available cities for travel"""
        return [
            'bangalore', 'mumbai', 'delhi', 'chennai', 'kolkata', 'hyderabad',
            'pune', 'ahmedabad', 'jaipur', 'surat', 'lucknow', 'kanpur',
            'nagpur', 'indore', 'thane', 'bhopal', 'visakhapatnam', 'pimpri',
            'patna', 'vadodara', 'ghaziabad', 'ludhiana', 'agra', 'nashik',
            'faridabad', 'meerut', 'rajkot', 'kalyan', 'vasai', 'varanasi',
            'srinagar', 'aurangabad', 'dhanbad', 'amritsar', 'navi mumbai',
            'allahabad', 'ranchi', 'howrah', 'coimbatore', 'jabalpur', 'gwalior',
            'goa', 'cochin', 'kochi', 'thiruvananthapuram', 'madurai'
        ]
    
    def setup_date_patterns(self) -> Dict[str, re.Pattern]:
        """Setup regex patterns for date recognition"""
        return {
            'today': re.compile(r'\btoday\b', re.IGNORECASE),
            'tomorrow': re.compile(r'\btomorrow\b', re.IGNORECASE),
            'day_names': re.compile(r'\b(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b', re.IGNORECASE),
            'date_numeric': re.compile(r'\b(\d{1,2})[/-](\d{1,2})[/-](\d{2,4})\b'),
            'date_ordinal': re.compile(r'\b(\d{1,2})(st|nd|rd|th)\s+(january|february|march|april|may|june|july|august|september|october|november|december)\b', re.IGNORECASE),
            'next_week': re.compile(r'\bnext\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b', re.IGNORECASE),
        }
    
    def extract_intent(self, text: str) -> Dict[str, Optional[str]]:
        """
        Extract booking intent from natural language text
        
        Args:
            text (str): User input text
            
        Returns:
            dict: Extracted intent with booking details
        """
        text = text.lower().strip()
        
        intent = {
            'action': self.extract_action(text),
            'origin': self.extract_location(text, 'from'),
            'destination': self.extract_location(text, 'to'),
            'date': self.extract_date(text),
            'transport_type': self.extract_transport_type(text),
            'confidence': 0.0
        }
        
        # Calculate confidence score
        intent['confidence'] = self.calculate_confidence(intent, text)
        
        return intent
    
    def extract_action(self, text: str) -> Optional[str]:
        """Extract the main action from text"""
        book_keywords = self.intent_keywords['book']
        for keyword in book_keywords:
            if keyword in text:
                return 'book'
        return None
    
    def extract_location(self, text: str, location_type: str) -> Optional[str]:
        """
        Extract origin or destination from text
        
        Args:
            text (str): Input text
            location_type (str): 'from' or 'to'
            
        Returns:
            str: Extracted city name or None
        """
        keywords = self.intent_keywords[location_type]
        
        for keyword in keywords:
            pattern = rf'\b{keyword}\s+(\w+(?:\s+\w+)?)'
            match = re.search(pattern, text, re.IGNORECASE)
            if match:
                location = match.group(1).lower().strip()
                # Check if it's a valid city
                for city in self.cities:
                    if city in location or location in city:
                        return city.title()
        
        return None
    
    def extract_date(self, text: str) -> Optional[str]:
        """Extract travel date from text"""
        # Check for "today"
        if self.date_patterns['today'].search(text):
            return datetime.now().strftime('%Y-%m-%d')
        
        # Check for "tomorrow"
        if self.date_patterns['tomorrow'].search(text):
            return (datetime.now() + timedelta(days=1)).strftime('%Y-%m-%d')
        
        # Check for day names (this week)
        day_match = self.date_patterns['day_names'].search(text)
        if day_match:
            return self.get_next_weekday(day_match.group(1))
        
        # Check for "next [day]"
        next_day_match = self.date_patterns['next_week'].search(text)
        if next_day_match:
            return self.get_next_weekday(next_day_match.group(1), next_week=True)
        
        # Check for numeric dates
        date_match = self.date_patterns['date_numeric'].search(text)
        if date_match:
            day, month, year = date_match.groups()
            if len(year) == 2:
                year = '20' + year
            try:
                date_obj = datetime(int(year), int(month), int(day))
                return date_obj.strftime('%Y-%m-%d')
            except ValueError:
                pass
        
        return None
    
    def extract_transport_type(self, text: str) -> Optional[str]:
        """Extract transportation type from text"""
        transport_keywords = self.intent_keywords['transport']
        
        for transport in transport_keywords:
            if transport in text:
                if transport in ['plane', 'aircraft', 'flight']:
                    return 'flight'
                return transport
        
        # Default to train if no transport type specified
        return 'train'
    
    def get_next_weekday(self, day_name: str, next_week: bool = False) -> str:
        """
        Get the date of the next occurrence of a weekday
        
        Args:
            day_name (str): Name of the day
            next_week (bool): Whether to get next week's occurrence
            
        Returns:
            str: Date in YYYY-MM-DD format
        """
        days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
        target_day = days.index(day_name.lower())
        
        today = datetime.now()
        days_ahead = target_day - today.weekday()
        
        if days_ahead <= 0:  # Target day already happened this week
            days_ahead += 7
        
        if next_week:
            days_ahead += 7
        
        target_date = today + timedelta(days=days_ahead)
        return target_date.strftime('%Y-%m-%d')
    
    def calculate_confidence(self, intent: Dict, text: str) -> float:
        """
        Calculate confidence score for the extracted intent
        
        Args:
            intent (dict): Extracted intent
            text (str): Original text
            
        Returns:
            float: Confidence score between 0 and 1
        """
        score = 0.0
        max_score = 5.0
        
        # Check if action is identified
        if intent['action']:
            score += 1.0
        
        # Check if origin is identified
        if intent['origin']:
            score += 1.5
        
        # Check if destination is identified
        if intent['destination']:
            score += 1.5
        
        # Check if date is identified
        if intent['date']:
            score += 1.0
        
        # Bonus for identifying transport type
        if intent['transport_type']:
            score += 0.5
        
        return min(score / max_score, 1.0)
    
    def validate_booking_request(self, intent: Dict) -> tuple[bool, str]:
        """
        Validate if the booking request is complete
        
        Args:
            intent (dict): Extracted intent
            
        Returns:
            tuple: (is_valid, error_message)
        """
        if not intent['action'] or intent['action'] != 'book':
            return False, "I didn't understand that you want to book a ticket. Please try again."
        
        if not intent['origin']:
            return False, "I couldn't identify your departure city. Please specify where you're traveling from."
        
        if not intent['destination']:
            return False, "I couldn't identify your destination. Please specify where you're traveling to."
        
        if intent['origin'] == intent['destination']:
            return False, "Your departure and destination cities are the same. Please check and try again."
        
        if not intent['date']:
            return False, "I couldn't understand when you want to travel. Please specify a date."
        
        if intent['confidence'] < NLP_CONFIG['confidence_threshold']:
            return False, "I'm not confident about understanding your request. Could you please be more specific?"
        
        return True, "Booking request is valid."