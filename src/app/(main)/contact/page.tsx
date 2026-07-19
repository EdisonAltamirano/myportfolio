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
            Let&apos;s build <span className="text-gradient-sky">serious systems</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            I&apos;m most interested in roles and collaborations around radar/sensing systems,
            analog or VLSI design, embedded automotive software, robotics perception, and autonomy.
          </p>
        </FadeIn>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Contact info */}
          <FadeIn delay="delay-100" className="lg:col-span-2 space-y-6">
            <div className="rounded-xl border border-black/10 bg-card p-6">
              <div className="mb-6 rounded-2xl border border-primary/20 bg-primary/10 p-4">
                <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/80">Best contact topics</div>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-foreground">
                  <li>• RF/mmWave radar, sensing, or multimodal AI roles</li>
                  <li>• Analog, mixed-signal, VLSI, or ASIC opportunities</li>
                  <li>• Embedded automotive, autonomy, robotics, or perception work</li>
                </ul>
              </div>
              <div className="font-mono text-xs text-primary/70 tracking-widest uppercase mb-5">Direct Contact</div>
              <div className="space-y-4">
                <a
                  href={`mailto:${primaryEmail}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-md bg-white/80 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground/80 uppercase tracking-wider">Email</div>
                    <div className="font-body text-sm text-foreground group-hover:text-primary transition-colors">
                      {primaryEmail}
                    </div>
                  </div>
                </a>
                <a
                  href={`mailto:${workEmail}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-md bg-white/80 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground/80 uppercase tracking-wider">Work Email</div>
                    <div className="font-body text-sm text-foreground group-hover:text-primary transition-colors">
                      {workEmail}
                    </div>
                  </div>
                </a>
                <a href={`tel:${phoneHref}`} className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground/80 uppercase tracking-wider">Phone</div>
                    <div className="font-body text-sm text-foreground group-hover:text-primary transition-colors">{phoneDisplay}</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="font-mono text-xs text-primary/70 tracking-widest uppercase mb-5">Online</div>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Linkedin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-mono text-xs text-muted-foreground/80 uppercase tracking-wider">LinkedIn</div>
                  <div className="font-body text-sm text-foreground group-hover:text-primary transition-colors">
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
                <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-mono text-xs text-muted-foreground/80 uppercase tracking-wider">Website</div>
                  <div className="font-body text-sm text-foreground group-hover:text-primary transition-colors">
                    edisonaltamirano.github.io/myportfolio
                  </div>
                </div>
              </a>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay="delay-200" className="lg:col-span-3">
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="flex items-center gap-2.5 mb-6">
                <MessageSquare className="w-5 h-5 text-primary" />
                <h2 className="font-display text-xl font-bold text-foreground">Send a focused message</h2>
              </div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs text-muted-foreground/85 uppercase tracking-wider">Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              className="bg-white/80 border-border focus:border-primary/50 font-body"
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
                          <FormLabel className="font-mono text-xs text-muted-foreground/85 uppercase tracking-wider">Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="your@email.com"
                              type="email"
                              {...field}
                              className="bg-white/80 border-border focus:border-primary/50 font-body"
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
                        <FormLabel className="font-mono text-xs text-muted-foreground/85 uppercase tracking-wider">Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Role, research collaboration, or project topic"
                            {...field}
                            className="bg-white/80 border-border focus:border-primary/50 font-body"
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
                        <FormLabel className="font-mono text-xs text-muted-foreground/85 uppercase tracking-wider">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me what you're building, hiring for, or exploring."
                            rows={5}
                            {...field}
                            className="bg-white/80 border-border focus:border-primary/50 font-body resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="w-full bg-foreground hover:bg-foreground/90 text-white font-display font-bold tracking-wider shadow-md shadow-black/10 border-0"
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
