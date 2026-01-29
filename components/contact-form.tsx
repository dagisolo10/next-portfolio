"use client";
import { FiSend } from "react-icons/fi";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { FormEvent, RefObject, useRef } from "react";
import { Textarea } from "./ui/textarea";
import toast from "react-hot-toast";
import { MotionForm, MotionItem } from "./motion/motion-wrappers";
import { containerVariant, formItemVariant } from "./motion/motion-data";

type FormRef = {
    name: HTMLInputElement | null;
    email: HTMLInputElement | null;
    message: HTMLTextAreaElement | null;
};

export default function ContactForm() {
    const formRef = useRef<FormRef>({ name: null, email: null, message: null });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const name = formRef.current.name?.value || "";
        const email = formRef.current.email?.value || "";
        const message = formRef.current.message?.value || "";

        const formData = new FormData();
        formData.append("access_key", "52c393bc-3e89-4e18-b097-f33db1e2adac");
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);

        const toastId = toast.loading("Sending message...");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (data.success) {
                toast.success("Message sent successfully!", { id: toastId });
                (Object.keys(formRef.current) as (keyof FormRef)[]).forEach((key) => (formRef.current[key]!.value = ""));
            } else {
                toast.error(data.message || "Something went wrong.", { id: toastId });
            }

            console.log("Web3Forms response:", data);
        } catch (err) {
            console.error(err);
            toast.error("Network error. Please try again.", { id: toastId });
        }
    };

    return (
        <div className="">
            <MotionForm variant={containerVariant} onSubmit={handleSubmit} className="flex flex-col gap-4">
                <MotionItem variant={formItemVariant}>
                    <InputDiv type="text" id="name" formRef={formRef} label="Your name" placeholder="What's your good name?" />
                </MotionItem>
                <MotionItem variant={formItemVariant}>
                    <InputDiv type="email" id="email" formRef={formRef} label="Your email" placeholder="What's your email address" />
                </MotionItem>
                <MotionItem variant={formItemVariant}>
                    <InputDiv textarea={true} id="message" formRef={formRef} label="Your message" placeholder="What do you want to talk about?" />
                </MotionItem>
                <MotionItem variant={formItemVariant}>
                    <Button>
                        Send Message <FiSend />
                    </Button>
                </MotionItem>
            </MotionForm>
        </div>
    );
}

interface InputsProps {
    formRef: RefObject<FormRef>;
    label: string;
    id: keyof FormRef;
    placeholder?: string;
    textarea?: boolean;
    type?: string;
}

function InputDiv({ label, placeholder, formRef, id, textarea = false, type }: InputsProps) {
    return (
        <div className="space-y-2">
            <Label htmlFor={id} className="text-muted-foreground">
                {label}
            </Label>
            {textarea ? (
                <Textarea
                    className="min-h-32"
                    ref={(el) => {
                        (formRef.current[id] as HTMLTextAreaElement | null) = el;
                    }}
                    id={id}
                    placeholder={placeholder}
                    required
                />
            ) : (
                <Input
                    ref={(el) => {
                        (formRef.current[id] as HTMLInputElement | null) = el;
                    }}
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    required
                />
            )}
        </div>
    );
}
