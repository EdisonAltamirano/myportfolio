"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { FadeIn } from "@/components/animations/FadeIn";
import { officialWebsiteUrl, phoneDisplay, phoneHref, primaryEmail, workEmail, linkedinUrl } from "@/lib/constants";
import { Mail, Linkedin, Phone, Send, MessageSquare, Globe } from "lucide-react";

const contactFormSchema = z.object({
  name:    z.string().min(2, { message: "Name must be at least 2 characters." }),
  email:   z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    console.log("Contact form submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({ title: "Message Sent!", description: "I'll get back to you soon." });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-circuit">
      <div className="container mx-auto px-4 py-14 lg:px-8">
        <FadeIn className="text-center mb-14">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
            Get In <span className="text-gradient-sky">Touch</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Whether it&#39;s research collaboration, job opportunities, or just a great
            engineering conversation | I&#39;d love to hear from you.
          </p>
        </FadeIn>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Contact info */}
          <FadeIn delay="delay-100" className="lg:col-span-2 space-y-6">
            <div className="rounded-xl border border-sky-500/15 bg-card/50 p-6">
              <div className="font-mono text-xs text-sky-400/70 tracking-widest uppercase mb-5">Direct Contact</div>
              <div className="space-y-4">
                <a
                  href={`mailto:${primaryEmail}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-md bg-sky-500/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-sky-400" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground/60 uppercase tracking-wider">Email</div>
                    <div className="font-body text-sm text-foreground group-hover:text-sky-400 transition-colors">
                      {primaryEmail}
                    </div>
                  </div>
                </a>
                <a
                  href={`mailto:${workEmail}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-md bg-sky-500/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-sky-400" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground/60 uppercase tracking-wider">Work Email</div>
                    <div className="font-body text-sm text-foreground group-hover:text-sky-400 transition-colors">
                      {workEmail}
                    </div>
                  </div>
                </a>
                <a href={`tel:${phoneHref}`} className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-md bg-teal-500/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground/60 uppercase tracking-wider">Phone</div>
                    <div className="font-body text-sm text-foreground group-hover:text-teal-400 transition-colors">{phoneDisplay}</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-teal-500/15 bg-card/50 p-6">
              <div className="font-mono text-xs text-teal-400/70 tracking-widest uppercase mb-5">Online</div>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-md bg-teal-500/10 flex items-center justify-center shrink-0">
                  <Linkedin className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <div className="font-mono text-xs text-muted-foreground/60 uppercase tracking-wider">LinkedIn</div>
                  <div className="font-body text-sm text-foreground group-hover:text-teal-400 transition-colors">
                    edison-altamirano-avila
                  </div>
                </div>
              </a>
              <a
                href={officialWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-md bg-teal-500/10 flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <div className="font-mono text-xs text-muted-foreground/60 uppercase tracking-wider">Website</div>
                  <div className="font-body text-sm text-foreground group-hover:text-teal-400 transition-colors">
                    edisonaltamirano.github.io/myportfolio
                  </div>
                </div>
              </a>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay="delay-200" className="lg:col-span-3">
            <div className="rounded-xl border border-border bg-card/50 p-8">
              <div className="flex items-center gap-2.5 mb-6">
                <MessageSquare className="w-5 h-5 text-sky-400" />
                <h2 className="font-display text-xl font-bold text-foreground">Send a Message</h2>
              </div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs text-muted-foreground/70 uppercase tracking-wider">Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              className="bg-muted/30 border-border focus:border-sky-500/50 font-body"
                            />
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
                          <FormLabel className="font-mono text-xs text-muted-foreground/70 uppercase tracking-wider">Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="your@email.com"
                              type="email"
                              {...field}
                              className="bg-muted/30 border-border focus:border-sky-500/50 font-body"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-xs text-muted-foreground/70 uppercase tracking-wider">Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="What's this about?"
                            {...field}
                            className="bg-muted/30 border-border focus:border-sky-500/50 font-body"
                          />
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
                        <FormLabel className="font-mono text-xs text-muted-foreground/70 uppercase tracking-wider">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your message..."
                            rows={5}
                            {...field}
                            className="bg-muted/30 border-border focus:border-sky-500/50 font-body resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="w-full bg-sky-500 hover:bg-sky-400 text-black font-display font-bold tracking-wider shadow-md shadow-sky-500/20 border-0"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
