"use client";

import {useEffect, useState, useTransition} from "react";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {MessageCircle, X, SendHorizontal, CheckCheck} from "lucide-react";
import {cn} from "@/lib/utils";
import {AnimatePresence, motion} from "framer-motion";
import {v4 as uuidv4} from "uuid";
import axios from "axios";
import ReactMarkdown from "react-markdown";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
  status?: "sent" | "delivered" | "read";
}

export default function ChatWidget() {
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const [firstOpen, setFirstOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "👋 Xin chào! Bạn muốn biết điều gi về Chiến dịch 12 ngày đêm - Tháng 12/1972?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    if (isOpen && !firstOpen) {
      speak(
        "Xin chào! Bạn muốn biết điều gì về Chiến dịch 12 ngày đêm - Tháng 12/1972?"
      );
      setFirstOpen(true);
    }
  }, [isOpen, firstOpen]);

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") return;

    const userMessage: Message = {
      id: uuidv4(),
      content: newMessage,
      sender: "user",
      timestamp: new Date(),
      status: "sent",
    };

    setMessages([...messages, userMessage]);
    setNewMessage("");

    startTransition(async () => {
      const {data} = await axios
        .post<{response: string}>(
          "https://01f77d12-ce34-4b1c-96f2-07bf04c39959-00-1t4t2k6qt7zmg.pike.replit.dev/chat",
          {
            chat_id: "HCI1HYWNFR",
            message: {
              text: newMessage,
            },
          }
        )
        .catch(() => ({
          data: {response: "Điều này nằm ngoài tầm hiểu biết của tôi."},
        }));

      const botMessage: Message = {
        id: uuidv4(),
        content: data.response,
        sender: "bot",
        timestamp: new Date(),
      };

      speak(botMessage.content);
      setMessages((prev) => [...prev, botMessage]);

      // Update status of user message
      setTimeout(() => {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === userMessage.id ? {...msg, status: "read"} : msg
          )
        );
      }, 1000);
    });
  };

  return (
    <>
      {/* Chat toggle button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn("rounded-full bg-red-500 hover:bg-red-500/90")}
        size="icon"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>

      {/* Chat box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{opacity: 0, y: 20, scale: 0.95}}
            animate={{opacity: 1, y: 0, scale: 1}}
            exit={{opacity: 0, y: 20, scale: 0.95}}
            transition={{duration: 0.2}}
            className="fixed bottom-20 right-4 w-[450px] z-40 shadow-xl"
          >
            <Card className="flex flex-col h-[600px] overflow-hidden py-0 rounded-md">
              {/* Chat header */}
              <div className="p-3 border-b bg-muted/30 flex justify-between items-center">
                <h2 className="font-medium pl-2">Chat AI</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Chat messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex w-full mb-4",
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] rounded-md px-4 py-2",
                        message.sender === "user"
                          ? "bg-red-500 text-primary-foreground rounded-br-none"
                          : "bg-muted text-muted-foreground rounded-bl-none"
                      )}
                    >
                      <div className="break-words text-sm">
                        <ReactMarkdown>{message.content}</ReactMarkdown>
                      </div>
                      <div
                        className={cn(
                          "flex items-center text-xs mt-1",
                          message.sender === "user"
                            ? "justify-end"
                            : "justify-start",
                          message.sender === "user"
                            ? "text-primary-foreground/70"
                            : "text-muted-foreground/70"
                        )}
                      >
                        <span>{formatTime(message.timestamp)}</span>
                        {message.sender === "user" && message.status && (
                          <span className="ml-1">
                            {message.status === "read" && (
                              <CheckCheck className="h-3 w-3" />
                            )}
                            {message.status === "delivered" && (
                              <CheckCheck className="h-3 w-3" />
                            )}
                            {message.status === "sent" && (
                              <span className="text-xs">✓</span>
                            )}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {isPending && (
                  <div className={cn("flex w-full mb-4 justify-start")}>
                    <div
                      className={cn(
                        "max-w-[80%] rounded-md px-4 py-2 bg-muted text-muted-foreground rounded-bl-none"
                      )}
                    >
                      <p className="break-words text-sm">Đang suy nghĩ...</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat input */}
              <div className="p-3 border-t">
                <form
                  className="flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                >
                  <Input
                    placeholder="Aa..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="bg-red-500 hover:bg-red-500/90"
                  >
                    <SendHorizontal className="h-4 w-4 rounded-md" />
                  </Button>
                </form>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function formatTime(date: Date): string {
  const now = new Date();
  const diffInMinutes = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60)
  );

  if (diffInMinutes < 1) return "Bây giờ";
  if (diffInMinutes < 60) return `${diffInMinutes} phút trước`;

  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes.toString().padStart(2, "0")}`;
}

function speak(text: string) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "vi-VN"; // Chọn ngôn ngữ (ví dụ: tiếng Việt)
  speech.rate = 1; // Tốc độ đọc (1 là bình thường)
  speech.pitch = 1; // Cao độ (1 là bình thường)

  window.speechSynthesis.speak(speech);
}
