"""
Ticket booking system with mock API simulation
"""
import json
import os
import random
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from src.config import BOOKING_CONFIG

class BookingSystem:
    """Handles ticket booking logic and simulation"""
    
    def __init__(self):
        """Initialize the booking system"""
        self.bookings_file = BOOKING_CONFIG['booking_database']
        self.routes_file = BOOKING_CONFIG['routes_database']
        self.setup_data_files()
    
    def setup_data_files(self):
        """Setup data files if they don't exist"""
        os.makedirs('data', exist_ok=True)
        
        # Initialize bookings file
        if not os.path.exists(self.bookings_file):
            with open(self.bookings_file, 'w') as f:
                json.dump([], f, indent=2)
        
        # Initialize routes file with sample data
        if not os.path.exists(self.routes_file):
            sample_routes = self.generate_sample_routes()
            with open(self.routes_file, 'w') as f:
                json.dump(sample_routes, f, indent=2)
    
    def generate_sample_routes(self) -> List[Dict]:
        """Generate sample route data"""
        cities = ['Bangalore', 'Mumbai', 'Delhi', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad']
        transport_types = ['train', 'flight', 'bus']
        routes = []
        
        for origin in cities:
            for destination in cities:
                if origin != destination:
                    for transport in transport_types:
                        route = {
                            'origin': origin,
                            'destination': destination,
                            'transport_type': transport,
                            'base_price': random.randint(500, 5000),
                            'duration': f"{random.randint(2, 24)} hours",
                            'available': True
                        }
                        routes.append(route)
        
        return routes
    
    def search_routes(self, origin: str, destination: str, transport_type: str, date: str) -> List[Dict]:
        """
        Search for available routes
        
        Args:
            origin (str): Departure city
            destination (str): Arrival city
            transport_type (str): Type of transport
            date (str): Travel date
            
        Returns:
            list: Available route options
        """
        try:
            with open(self.routes_file, 'r') as f:
                all_routes = json.load(f)
            
            # Filter routes based on criteria
            matching_routes = [
                route for route in all_routes
                if (route['origin'].lower() == origin.lower() and
                    route['destination'].lower() == destination.lower() and
                    route['transport_type'].lower() == transport_type.lower() and
                    route['available'])
            ]
            
            # Add dynamic pricing and schedule information
            for route in matching_routes:
                route['price'] = self.calculate_dynamic_price(route['base_price'], date)
                route['schedule'] = self.generate_schedule(transport_type)
                route['seats_available'] = random.randint(5, 50)
            
            return matching_routes
            
        except FileNotFoundError:
            return []
    
    def calculate_dynamic_price(self, base_price: int, date: str) -> int:
        """
        Calculate dynamic pricing based on date and demand
        
        Args:
            base_price (int): Base ticket price
            date (str): Travel date
            
        Returns:
            int: Final ticket price
        """
        try:
            travel_date = datetime.strptime(date, '%Y-%m-%d')
            days_ahead = (travel_date - datetime.now()).days
            
            # Price multiplier based on advance booking
            if days_ahead <= 1:
                multiplier = 1.5  # Last minute booking
            elif days_ahead <= 7:
                multiplier = 1.2  # Short notice
            elif days_ahead <= 30:
                multiplier = 1.0  # Normal booking
            else:
                multiplier = 0.9  # Early bird discount
            
            # Add random fluctuation
            multiplier += random.uniform(-0.1, 0.1)
            
            return int(base_price * multiplier)
            
        except ValueError:
            return base_price
    
    def generate_schedule(self, transport_type: str) -> Dict:
        """
        Generate schedule information for the transport type
        
        Args:
            transport_type (str): Type of transport
            
        Returns:
            dict: Schedule information
        """
        if transport_type == 'flight':
            return {
                'departure_time': f"{random.randint(6, 22):02d}:{random.choice(['00', '30'])}",
                'arrival_time': f"{random.randint(8, 23):02d}:{random.choice(['00', '30'])}",
                'frequency': 'Multiple flights daily'
            }
        elif transport_type == 'train':
            return {
                'departure_time': f"{random.randint(5, 23):02d}:{random.choice(['00', '15', '30', '45'])}",
                'arrival_time': f"{random.randint(6, 23):02d}:{random.choice(['00', '15', '30', '45'])}",
                'frequency': 'Daily service'
            }
        else:  # bus
            return {
                'departure_time': f"{random.randint(6, 22):02d}:{random.choice(['00', '30'])}",
                'arrival_time': f"{random.randint(8, 23):02d}:{random.choice(['00', '30'])}",
                'frequency': 'Multiple buses daily'
            }
    
    def create_booking(self, booking_details: Dict, user_email: str) -> Dict:
        """
        Create a new booking
        
        Args:
            booking_details (dict): Booking information
            user_email (str): User's email address
            
        Returns:
            dict: Booking confirmation details
        """
        # Generate booking confirmation
        booking_id = self.generate_booking_id()
        
        booking = {
            'booking_id': booking_id,
            'user_email': user_email,
            'origin': booking_details['origin'],
            'destination': booking_details['destination'],
            'transport_type': booking_details['transport_type'],
            'travel_date': booking_details['date'],
            'price': booking_details['price'],
            'schedule': booking_details['schedule'],
            'booking_date': datetime.now().isoformat(),
            'status': 'confirmed',
            'passenger_name': booking_details.get('passenger_name', 'Passenger'),
        }
        
        # Save booking to file
        try:
            with open(self.bookings_file, 'r') as f:
                bookings = json.load(f)
        except FileNotFoundError:
            bookings = []
        
        bookings.append(booking)
        
        with open(self.bookings_file, 'w') as f:
            json.dump(bookings, f, indent=2)
        
        return booking
    
    def generate_booking_id(self) -> str:
        """Generate a unique booking ID"""
        prefix = BOOKING_CONFIG['confirmation_prefix']
        timestamp = datetime.now().strftime('%Y%m%d%H%M')
        random_suffix = random.randint(1000, 9999)
        return f"{prefix}{timestamp}{random_suffix}"
    
    def get_booking_summary(self, booking: Dict) -> str:
        """
        Generate a human-readable booking summary
        
        Args:
            booking (dict): Booking information
            
        Returns:
            str: Formatted booking summary
        """
        summary = f"""
🎫 BOOKING CONFIRMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Booking ID: {booking['booking_id']}
Status: {booking['status'].upper()}

📍 TRAVEL DETAILS
From: {booking['origin']}
To: {booking['destination']}
Date: {booking['travel_date']}
Transport: {booking['transport_type'].title()}

⏰ SCHEDULE
Departure: {booking['schedule']['departure_time']}
Arrival: {booking['schedule']['arrival_time']}

💰 PRICING
Total Amount: ₹{booking['price']}

👤 PASSENGER
Email: {booking['user_email']}

📅 BOOKED ON
{datetime.fromisoformat(booking['booking_date']).strftime('%B %d, %Y at %I:%M %p')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Thank you for choosing our booking service!
"""
        return summary
    
    def validate_booking_data(self, booking_details: Dict) -> tuple[bool, str]:
        """
        Validate booking data before processing
        
        Args:
            booking_details (dict): Booking information to validate
            
        Returns:
            tuple: (is_valid, error_message)
        """
        required_fields = ['origin', 'destination', 'transport_type', 'date']
        
        for field in required_fields:
            if field not in booking_details or not booking_details[field]:
                return False, f"Missing required field: {field}"
        
        # Validate date is not in the past
        try:
            travel_date = datetime.strptime(booking_details['date'], '%Y-%m-%d')
            if travel_date.date() < datetime.now().date():
                return False, "Travel date cannot be in the past"
        except ValueError:
            return False, "Invalid date format"
        
        return True, "Booking data is valid"