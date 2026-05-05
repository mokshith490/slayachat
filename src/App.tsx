import React, { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Send, Ticket, MapPin, Calendar, CreditCard, Mail, CheckCircle, AlertCircle } from 'lucide-react';

interface BookingDetails {
  origin: string;
  destination: string;
  date: string;
  transportType: string;
  price: number;
  bookingId: string;
}

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

function App() {
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "Hello! I'm your voice-based ticket booking assistant. I can help you book train, flight, or bus tickets. Just tell me where you want to go, when you want to travel, and I'll take care of the rest! Try saying something like: 'Book me a train ticket from Bangalore to Delhi on Monday'",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [currentBooking, setCurrentBooking] = useState<BookingDetails | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (content: string, type: 'user' | 'assistant') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const extractBookingIntent = (text: string) => {
    const lowerText = text.toLowerCase();
    
    // Simple NLP extraction
    const cities = ['bangalore', 'mumbai', 'delhi', 'chennai', 'kolkata', 'hyderabad', 'pune', 'goa', 'cochin', 'jaipur'];
    const transports = ['train', 'flight', 'bus', 'plane'];
    const dates = ['today', 'tomorrow', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    
    let origin = '';
    let destination = '';
    let transportType = 'train';
    let date = '';
    
    // Extract origin (from)
    const fromMatch = lowerText.match(/from\s+(\w+)/);
    if (fromMatch) {
      const city = cities.find(c => fromMatch[1].includes(c) || c.includes(fromMatch[1]));
      if (city) origin = city.charAt(0).toUpperCase() + city.slice(1);
    }
    
    // Extract destination (to)
    const toMatch = lowerText.match(/to\s+(\w+)/);
    if (toMatch) {
      const city = cities.find(c => toMatch[1].includes(c) || c.includes(toMatch[1]));
      if (city) destination = city.charAt(0).toUpperCase() + city.slice(1);
    }
    
    // Extract transport type
    const transport = transports.find(t => lowerText.includes(t));
    if (transport) {
      transportType = transport === 'plane' ? 'flight' : transport;
    }
    
    // Extract date
    const dateFound = dates.find(d => lowerText.includes(d));
    if (dateFound) {
      if (dateFound === 'today') {
        date = new Date().toISOString().split('T')[0];
      } else if (dateFound === 'tomorrow') {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        date = tomorrow.toISOString().split('T')[0];
      } else {
        // For day names, assume next occurrence
        const today = new Date();
        const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        const targetDay = dayNames.indexOf(dateFound);
        const daysUntilTarget = (targetDay - today.getDay() + 7) % 7 || 7;
        const targetDate = new Date(today);
        targetDate.setDate(today.getDate() + daysUntilTarget);
        date = targetDate.toISOString().split('T')[0];
      }
    }
    
    return { origin, destination, transportType, date };
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    
    addMessage(inputText, 'user');
    
    // Check if it's a booking request
    if (inputText.toLowerCase().includes('book') || inputText.toLowerCase().includes('ticket')) {
      const intent = extractBookingIntent(inputText);
      
      if (intent.origin && intent.destination && intent.date) {
        const price = Math.floor(Math.random() * 3000) + 500;
        const bookingId = `TKT${Date.now()}`;
        
        const booking: BookingDetails = {
          origin: intent.origin,
          destination: intent.destination,
          date: intent.date,
          transportType: intent.transportType,
          price,
          bookingId
        };
        
        setCurrentBooking(booking);
        
        setTimeout(() => {
          addMessage(
            `I found a ${intent.transportType} from ${intent.origin} to ${intent.destination} on ${intent.date}. 
            
Details:
• Departure: ${Math.floor(Math.random() * 12) + 6}:${Math.random() > 0.5 ? '00' : '30'}
• Price: ₹${price}
• Seats available: ${Math.floor(Math.random() * 30) + 10}

Would you like me to book this ticket for you?`,
            'assistant'
          );
          setShowBookingForm(true);
        }, 1000);
      } else {
        setTimeout(() => {
          addMessage(
            "I couldn't understand all the details for your booking. Please specify your departure city, destination, and travel date. For example: 'Book me a train ticket from Bangalore to Delhi on Monday'",
            'assistant'
          );
        }, 1000);
      }
    } else if (inputText.toLowerCase().includes('hello') || inputText.toLowerCase().includes('hi')) {
      setTimeout(() => {
        addMessage("Hello! How can I help you with your travel booking today?", 'assistant');
      }, 500);
    } else {
      setTimeout(() => {
        addMessage("I can help you book tickets. Try saying something like 'Book me a train ticket from Mumbai to Delhi tomorrow'", 'assistant');
      }, 500);
    }
    
    setInputText('');
  };

  const handleConfirmBooking = () => {
    if (!userEmail || !currentBooking) return;
    
    addMessage(`Perfect! Your ticket has been booked successfully. Your booking reference is ${currentBooking.bookingId}. I've sent the complete details to your email address ${userEmail}. Have a wonderful journey!`, 'assistant');
    
    setShowBookingForm(false);
    setCurrentBooking(null);
    setUserEmail('');
  };

  const handleCancelBooking = () => {
    addMessage("No problem. Let me know if you'd like to search for other options.", 'assistant');
    setShowBookingForm(false);
    setCurrentBooking(null);
    setUserEmail('');
  };

  const startListening = () => {
    setIsListening(true);
    // Simulate voice recognition
    setTimeout(() => {
      setIsListening(false);
      setInputText("Book me a train ticket from Bangalore to Delhi on Monday");
    }, 3000);
  };

  const stopListening = () => {
    setIsListening(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Ticket className="w-12 h-12 text-indigo-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">Voice Ticket Assistant</h1>
          </div>
          <p className="text-gray-600 text-lg">Book your tickets using voice commands or text</p>
        </div>

        {/* Chat Interface */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="whitespace-pre-line">{message.content}</p>
                  <p className={`text-xs mt-2 ${
                    message.type === 'user' ? 'text-indigo-200' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Booking Confirmation Form */}
          {showBookingForm && currentBooking && (
            <div className="border-t bg-blue-50 p-6">
              <div className="bg-white rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Booking Details
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                    <span>{currentBooking.origin} → {currentBooking.destination}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                    <span>{currentBooking.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Ticket className="w-4 h-4 text-gray-500 mr-2" />
                    <span>{currentBooking.transportType.charAt(0).toUpperCase() + currentBooking.transportType.slice(1)}</span>
                  </div>
                  <div className="flex items-center">
                    <CreditCard className="w-4 h-4 text-gray-500 mr-2" />
                    <span>₹{currentBooking.price}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-1" />
                  Email Address for Confirmation
                </label>
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={handleConfirmBooking}
                  disabled={!userEmail}
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Confirm Booking
                </button>
                <button
                  onClick={handleCancelBooking}
                  className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="border-t p-6">
            <div className="flex items-center space-x-3">
              {/* Voice Button */}
              <button
                onClick={isListening ? stopListening : startListening}
                className={`p-3 rounded-full transition-all duration-200 ${
                  isListening
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {isListening ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
              </button>

              {/* Text Input */}
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={isListening ? "Listening..." : "Type your message or use voice..."}
                  disabled={isListening}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-100"
                />
                {isListening && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Send Button */}
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isListening}
                className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-6 h-6" />
              </button>
            </div>

            {/* Voice Status */}
            {isListening && (
              <div className="mt-3 flex items-center justify-center text-red-600">
                <AlertCircle className="w-4 h-4 mr-2" />
                <span className="text-sm">Listening... (Demo mode - will auto-fill sample text)</span>
              </div>
            )}

            {/* Quick Examples */}
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Try these examples:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Book me a train ticket from Bangalore to Delhi on Monday",
                  "I need a flight from Mumbai to Chennai tomorrow",
                  "Reserve a bus ticket from Pune to Goa next Friday"
                ].map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setInputText(example)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Mic className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Voice Recognition</h3>
            <p className="text-gray-600 text-sm">Speak naturally to book your tickets</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Ticket className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Smart Booking</h3>
            <p className="text-gray-600 text-sm">AI understands your travel requirements</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Email Confirmation</h3>
            <p className="text-gray-600 text-sm">Get booking details sent to your email</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;