
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { pets } from "@/data/pets";
import { useToast } from "@/components/ui/use-toast";

// Form schema
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  reason: z.string().min(20, "Please provide a more detailed reason (at least 20 characters)"),
});

type FormValues = z.infer<typeof formSchema>;

const AdoptionFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Find pet by ID
  const pet = pets.find(pet => pet.id === id);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      reason: "",
    },
  });
  
  // Handle form submission
  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Create adoption application object
    const application = {
      ...data,
      petId: id,
      petName: pet?.name,
      submittedAt: new Date().toISOString(),
    };
    
    // Simulate saving to database
    setTimeout(() => {
      console.log("Adoption application saved to database:", application);
      
      toast({
        title: "Application Submitted",
        description: "Thank you for applying to adopt " + (pet?.name || "this pet"),
      });
      
      // In a real app, this would be saved to a database
      
      setIsSubmitting(false);
      navigate("/");
    }, 2000);
  };
  
  // Handle error when pet not found
  if (!pet) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Pet Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Sorry, the pet you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link to="/pets">Browse All Pets</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Adopt {pet.name}</h1>
          <p className="mt-2 text-muted-foreground">
            Please fill out this form to start the adoption process.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {/* Left column: Pet info */}
          <div>
            <div className="sticky top-4">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={pet.image}
                  alt={pet.name}
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold">{pet.name}</h2>
                <p className="text-sm text-muted-foreground">
                  {pet.breed} • {pet.age} {pet.age === 1 ? 'year' : 'years'} old
                </p>
              </div>
              <Separator className="my-4" />
              <div className="text-sm text-muted-foreground">
                <p>
                  By submitting this form, you're taking the first step toward
                  giving {pet.name} a forever home.
                </p>
                <p className="mt-4">
                  Our team will review your application and contact you within
                  2 business days.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right column: Application form */}
          <div className="md:col-span-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First name</FormLabel>
                        <FormControl>
                          <Input {...field} autoComplete="given-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last name</FormLabel>
                        <FormControl>
                          <Input {...field} autoComplete="family-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" autoComplete="email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <Input {...field} type="tel" autoComplete="tel" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input {...field} autoComplete="street-address" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="reason"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Why do you want to adopt {pet.name}?</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={5}
                          placeholder="Tell us about your home environment and why you think you'd be a good match for this pet."
                        />
                      </FormControl>
                      <FormDescription>
                        Please be specific about your living situation, experience with pets, and why you're interested in this particular pet.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdoptionFormPage;
