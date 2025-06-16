"use client";

import Image from 'next/image'; // Added this line
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { FadeIn } from "@/components/animations/FadeIn";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    // Simulate form submission
    console.log("Contact form submitted:", data);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    form.reset();
  };

  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary">Get In Touch</h1>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
      
        <FadeIn delay="delay-200">
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-primary" />
                  <a href="mailto:edison.altamirano@drijet.io" className="hover:text-primary">edison.altamirano@drijet.io</a>
                  </p>
                  <p className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-primary" />
                  <a href="mailto:edisonaltamirano2000@outlook.com" className="hover:text-primary">edisonaltamirano2000@outlook.com</a>
                  </p>
                <p className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-primary" />
                  <span>(+52) 8121987907</span>
                </p>
                <p className="text-sm">
                  Feel free to reach out via email or phone. For professional connections, LinkedIn is preferred.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" asChild className="w-full justify-start">
                  <a href="https://www.linkedin.com/in/edison-altamirano-avila-55a0341a3" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-3 h-5 w-5 text-[#0077B5]" /> LinkedIn
                  </a>
                </Button>
              </CardContent>
            </Card>
           
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
