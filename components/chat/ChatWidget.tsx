"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  X, 
  Send, 
  ChevronDown, 
  Paperclip, 
  Image as ImageIcon, 
  Smile,
  User,
  Bot
} from "lucide-react";

// Mock data for chat messages
const initialMessages = [
  {
    id: 1,
    sender: "bot",
    message: "👋 Hi there! Welcome to Udemy. How can I help you today?",
    timestamp: new Date(Date.now() - 1000 * 60 * 2) // 2 minutes ago
  },
  {
    id: 2,
    sender: "bot",
    message: "I can help you find courses, answer questions about our platform, or assist with any technical issues you might be experiencing.",
    timestamp: new Date(Date.now() - 1000 * 60 * 1) // 1 minute ago
  }
];

// Quick reply suggestions
const quickReplies = [
  "How do I find the right course?",
  "Tell me about subscription options",
  "How do refunds work?",
  "I need technical support"
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom of messages when new ones are added
  useEffect(() => {
    if (messagesEndRef.current && isOpen) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Focus input when chat is opened
  useEffect(() => {
    if (isOpen && inputRef.current && !isMinimized) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen, isMinimized]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      sender: "user",
      message: newMessage,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage("");
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      setIsTyping(false);
      
      // Generate a response based on the user's message
      let botResponse = "";
      const userMsg = newMessage.toLowerCase();
      
      if (userMsg.includes("course") || userMsg.includes("find")) {
        botResponse = "To find the right course, you can use our search bar at the top of the page. You can also browse by category or check out our trending courses section. Would you like me to suggest some popular topics?";
      } else if (userMsg.includes("subscription") || userMsg.includes("price") || userMsg.includes("cost")) {
        botResponse = "We offer individual courses for purchase as well as Udemy Business subscriptions for teams and organizations. Would you like more details about our pricing options?";
      } else if (userMsg.includes("refund") || userMsg.includes("money back")) {
        botResponse = "Udemy offers a 30-day money-back guarantee for most courses. If you're not satisfied with a course, you can request a refund within 30 days of purchase.";
      } else if (userMsg.includes("technical") || userMsg.includes("support") || userMsg.includes("help")) {
        botResponse = "I'm here to help with technical issues! Could you please describe what problem you're experiencing in more detail?";
      } else {
        botResponse = "Thanks for your message! I'll connect you with the right information. Is there anything specific about Udemy courses or features you'd like to know more about?";
      }
      
      const botMessage = {
        id: messages.length + 2,
        sender: "bot",
        message: botResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickReply = (reply: string) => {
    setNewMessage(reply);
    // Focus the input after selecting a quick reply
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat bubble button */}
      <motion.button
        className="bg-indigo-600 text-white rounded-full p-4 shadow-lg hover:bg-indigo-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-6 w-6" />
        )}
      </motion.button>

      {/* Notification badge */}
      {!isOpen && (
        <Badge className="absolute -top-2 -right-2 bg-red-500 text-white border-2 border-white">
          2
        </Badge>
      )}

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-[380px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
          >
            {/* Chat header */}
            <div className="bg-indigo-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-full p-1.5">
                  <MessageSquare className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Udemy Support</h3>
                  <div className="flex items-center text-xs text-indigo-100">
                    <span className="h-2 w-2 bg-green-400 rounded-full mr-2"></span>
                    <span>Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 rounded-full text-white hover:bg-indigo-700"
                  onClick={() => setIsMinimized(!isMinimized)}
                >
                  <ChevronDown className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 rounded-full text-white hover:bg-indigo-700"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Chat body */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="h-[350px] overflow-y-auto p-4 bg-gray-50">
                    <div className="space-y-4">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${
                            msg.sender === "user" ? "justify-end" : "justify-start"
                          }`}
                        >
                          <div
                            className={`flex items-start gap-2 max-w-[80%] ${
                              msg.sender === "user" ? "flex-row-reverse" : ""
                            }`}
                          >
                            <div className="flex-shrink-0 mt-1">
                              {msg.sender === "user" ? (
                                <div className="bg-indigo-100 rounded-full p-1">
                                  <User className="h-5 w-5 text-indigo-600" />
                                </div>
                              ) : (
                                <div className="bg-indigo-600 rounded-full p-1">
                                  <Bot className="h-5 w-5 text-white" />
                                </div>
                              )}
                            </div>
                            <div>
                              <div
                                className={`p-3 rounded-2xl ${
                                  msg.sender === "user"
                                    ? "bg-indigo-600 text-white rounded-tr-none"
                                    : "bg-white border border-gray-200 rounded-tl-none"
                                }`}
                              >
                                <p className="text-sm">{msg.message}</p>
                              </div>
                              <div
                                className={`text-xs mt-1 text-gray-500 ${
                                  msg.sender === "user" ? "text-right" : ""
                                }`}
                              >
                                {formatTime(msg.timestamp)}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="flex items-start gap-2 max-w-[80%]">
                            <div className="flex-shrink-0 mt-1">
                              <div className="bg-indigo-600 rounded-full p-1">
                                <Bot className="h-5 w-5 text-white" />
                              </div>
                            </div>
                            <div>
                              <div className="p-3 rounded-2xl bg-white border border-gray-200 rounded-tl-none">
                                <div className="flex space-x-1">
                                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div ref={messagesEndRef} />
                    </div>
                  </div>

                  {/* Quick replies */}
                  {messages.length <= 3 && (
                    <div className="p-3 bg-white border-t border-gray-100">
                      <p className="text-xs text-gray-500 mb-2">Suggested replies:</p>
                      <div className="flex flex-wrap gap-2">
                        {quickReplies.map((reply, index) => (
                          <button
                            key={index}
                            onClick={() => handleQuickReply(reply)}
                            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1.5 rounded-full transition-colors"
                          >
                            {reply}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Chat input */}
                  <div className="p-3 border-t border-gray-200 bg-white">
                    <div className="flex items-center gap-2">
                      <Input
                        ref={inputRef}
                        type="text"
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={handleKeyPress}
                        className="flex-1 border-gray-300 focus-visible:ring-indigo-500"
                      />
                      <Button
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-2 h-10 w-10"
                      >
                        <Send className="h-5 w-5" />
                      </Button>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex gap-2">
                        <button className="text-gray-400 hover:text-indigo-600 transition-colors">
                          <Paperclip className="h-4 w-4" />
                        </button>
                        <button className="text-gray-400 hover:text-indigo-600 transition-colors">
                          <ImageIcon className="h-4 w-4" />
                        </button>
                        <button className="text-gray-400 hover:text-indigo-600 transition-colors">
                          <Smile className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500">Powered by Udemy AI</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ChatWidget;
