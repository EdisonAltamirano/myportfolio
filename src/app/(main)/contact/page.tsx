"use client";

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <FadeIn delay="delay-100">
          <Card className="shadow-xl h-full">
            <CardHeader>
              <CardTitle className="text-2xl">Send Me a Message</CardTitle>
              <CardDescription>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Regarding..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message here..." rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay="delay-200">
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-primary" />
                  <a href="mailto:edison.altamirano@example.com" className="hover:text-primary">edison.altamirano@example.com</a> (Example)
                </p>
                <p className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-primary" />
                  <span>+1 (555) 123-4567</span> (Example)
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
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-3 h-5 w-5 text-[#0077B5]" /> LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild className="w-full justify-start">
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-3 h-5 w-5 text-foreground" /> GitHub
                  </a>
                </Button>
                {/* Add other social links as needed */}
              </CardContent>
            </Card>
            
            <div className="aspect-w-16 aspect-h-9">
              {/* Placeholder for a map or an image */}
              <Image 
                src="https://placehold.co/600x350.png" 
                alt="Map placeholder"
                data-ai-hint="abstract map"
                width={600}
                height={350}
                className="rounded-lg object-cover shadow-md"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
