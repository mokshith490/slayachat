"""
Email notification system for booking confirmations
"""
try:
    import smtplib
    from email.mime.text import MIMEText
    from email.mime.multipart import MIMEMultipart
    SMTP_AVAILABLE = True
except ImportError:
    SMTP_AVAILABLE = False
    # Mock classes for when smtplib is not available
    class MIMEText:
        def __init__(self, *args, **kwargs):
            pass
    
    class MIMEMultipart:
        def __init__(self, *args, **kwargs):
            pass
        
        def attach(self, *args, **kwargs):
            pass
        
        def __setitem__(self, key, value):
            pass
    
    class smtplib:
        class SMTP:
            def __init__(self, *args, **kwargs):
                pass
            
            def __enter__(self):
                return self
            
            def __exit__(self, *args):
                pass
            
            def starttls(self):
                pass
            
            def login(self, *args):
                pass
            
            def send_message(self, *args):
                pass

from typing import Dict, Optional
from src.config import EMAIL_CONFIG

class EmailSender:
    """Handles email notifications for booking confirmations"""
    
    def __init__(self):
        """Initialize the email sender"""
        self.smtp_available = SMTP_AVAILABLE
        self.smtp_server = EMAIL_CONFIG['smtp_server']
        self.smtp_port = EMAIL_CONFIG['smtp_port']
        self.email_address = EMAIL_CONFIG['email_address']
        self.email_password = EMAIL_CONFIG['email_password']
    
    def send_booking_confirmation(self, booking: Dict, recipient_email: str) -> bool:
        """
        Send booking confirmation email
        
        Args:
            booking (dict): Booking details
            recipient_email (str): Recipient's email address
            
        Returns:
            bool: True if email sent successfully, False otherwise
        """
        try:
            # Check if email configuration is available
            if not self.smtp_available:
                print("❌ SMTP functionality not available in this environment.")
                print("📄 Booking confirmation (would be sent via email):")
                print(self.format_booking_email_content(booking))
                return False
            
            if not all([self.email_address, self.email_password]):
                print("❌ Email configuration not available. Cannot send confirmation email.")
                print("📄 Booking confirmation (would be sent via email):")
                print(self.format_booking_email_content(booking))
                return False
            
            # Create email message
            message = self.create_booking_email(booking, recipient_email)
            
            # Send email
            with smtplib.SMTP(self.smtp_server, self.smtp_port) as server:
                server.starttls()
                server.login(self.email_address, self.email_password)
                server.send_message(message)
            
            print(f"✅ Booking confirmation sent to {recipient_email}")
            return True
            
        except Exception as e:
            print(f"❌ Failed to send email: {e}")
            print("📄 Booking confirmation (email failed, showing content):")
            print(self.format_booking_email_content(booking))
            return False
    
    def create_booking_email(self, booking: Dict, recipient_email: str) -> MIMEMultipart:
        """
        Create email message with booking confirmation
        
        Args:
            booking (dict): Booking details
            recipient_email (str): Recipient's email address
            
        Returns:
            MIMEMultipart: Email message
        """
        message = MIMEMultipart('alternative')
        message['Subject'] = f"Booking Confirmed - {booking['booking_id']}"
        message['From'] = self.email_address
        message['To'] = recipient_email
        
        # Create text and HTML versions
        text_content = self.format_booking_email_content(booking)
        html_content = self.format_booking_email_html(booking)
        
        # Attach parts
        text_part = MIMEText(text_content, 'plain')
        html_part = MIMEText(html_content, 'html')
        
        message.attach(text_part)
        message.attach(html_part)
        
        return message
    
    def format_booking_email_content(self, booking: Dict) -> str:
        """
        Format booking details as plain text email content
        
        Args:
            booking (dict): Booking details
            
        Returns:
            str: Formatted email content
        """
        return f"""
Dear Valued Customer,

Your ticket booking has been confirmed! Here are your travel details:

🎫 BOOKING CONFIRMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Booking Reference: {booking['booking_id']}
Status: CONFIRMED

📍 JOURNEY DETAILS
From: {booking['origin']}
To: {booking['destination']}
Travel Date: {booking['travel_date']}
Transport Type: {booking['transport_type'].title()}

⏰ SCHEDULE
Departure Time: {booking['schedule']['departure_time']}
Arrival Time: {booking['schedule']['arrival_time']}

💰 PAYMENT DETAILS
Total Amount Paid: ₹{booking['price']}

📱 IMPORTANT INFORMATION
• Please arrive at least 30 minutes before departure
• Carry a valid ID proof during your journey
• Keep this booking confirmation for your records

For any queries or changes, please contact our customer support.

Thank you for choosing our booking service!

Best regards,
Voice Ticket Booking Assistant Team
"""
    
    def format_booking_email_html(self, booking: Dict) -> str:
        """
        Format booking details as HTML email content
        
        Args:
            booking (dict): Booking details
            
        Returns:
            str: Formatted HTML email content
        """
        return f"""
<!DOCTYPE html>
<html>
<head>
    <style>
        body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
        .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
        .header {{ background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }}
        .content {{ background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }}
        .booking-details {{ background: white; padding: 15px; border-radius: 5px; margin: 10px 0; }}
        .detail-row {{ display: flex; justify-content: space-between; margin: 5px 0; }}
        .label {{ font-weight: bold; color: #555; }}
        .value {{ color: #333; }}
        .highlight {{ background: #e3f2fd; padding: 10px; border-radius: 5px; margin: 10px 0; }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎫 Booking Confirmed!</h1>
            <p>Your journey is all set</p>
        </div>
        
        <div class="content">
            <div class="highlight">
                <h2>Booking Reference: {booking['booking_id']}</h2>
                <p><strong>Status:</strong> <span style="color: green;">CONFIRMED</span></p>
            </div>
            
            <div class="booking-details">
                <h3>📍 Journey Details</h3>
                <div class="detail-row">
                    <span class="label">From:</span>
                    <span class="value">{booking['origin']}</span>
                </div>
                <div class="detail-row">
                    <span class="label">To:</span>
                    <span class="value">{booking['destination']}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Travel Date:</span>
                    <span class="value">{booking['travel_date']}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Transport:</span>
                    <span class="value">{booking['transport_type'].title()}</span>
                </div>
            </div>
            
            <div class="booking-details">
                <h3>⏰ Schedule</h3>
                <div class="detail-row">
                    <span class="label">Departure:</span>
                    <span class="value">{booking['schedule']['departure_time']}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Arrival:</span>
                    <span class="value">{booking['schedule']['arrival_time']}</span>
                </div>
            </div>
            
            <div class="booking-details">
                <h3>💰 Payment Details</h3>
                <div class="detail-row">
                    <span class="label">Total Amount:</span>
                    <span class="value"><strong>₹{booking['price']}</strong></span>
                </div>
            </div>
            
            <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin-top: 20px;">
                <h4>📱 Important Reminders</h4>
                <ul>
                    <li>Arrive at least 30 minutes before departure</li>
                    <li>Carry valid ID proof during your journey</li>
                    <li>Keep this confirmation for your records</li>
                </ul>
            </div>
            
            <p style="text-align: center; margin-top: 30px;">
                Thank you for choosing our booking service!<br>
                <strong>Voice Ticket Booking Assistant Team</strong>
            </p>
        </div>
    </div>
</body>
</html>
"""
    
    def test_email_configuration(self) -> bool:
        """
        Test email configuration
        
        Returns:
            bool: True if configuration is valid, False otherwise
        """
        if not self.smtp_available:
            print("❌ SMTP functionality not available in this environment.")
            return False
        
        if not all([self.email_address, self.email_password, self.smtp_server, self.smtp_port]):
            return False
        
        try:
            with smtplib.SMTP(self.smtp_server, self.smtp_port) as server:
                server.starttls()
                server.login(self.email_address, self.email_password)
            return True
        except Exception as e:
            print(f"❌ Email configuration test failed: {e}")
            return False
    
    def send_test_email(self, recipient_email: str) -> bool:
        """
        Send a test email
        
        Args:
            recipient_email (str): Test recipient email
            
        Returns:
            bool: True if test email sent successfully
        """
        try:
            if not self.smtp_available:
                print("❌ SMTP functionality not available in this environment.")
                return False
            
            message = MIMEText("This is a test email from the Voice Ticket Booking Assistant.")
            message['Subject'] = "Test Email - Voice Booking Assistant"
            message['From'] = self.email_address
            message['To'] = recipient_email
            
            with smtplib.SMTP(self.smtp_server, self.smtp_port) as server:
                server.starttls()
                server.login(self.email_address, self.email_password)
                server.send_message(message)
            
            print(f"✅ Test email sent successfully to {recipient_email}")
            return True
            
        except Exception as e:
            print(f"❌ Test email failed: {e}")
            return False