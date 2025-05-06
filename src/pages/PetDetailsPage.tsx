
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { pets } from "@/data/pets";
import { useToast } from "@/components/ui/use-toast";
import { Heart } from "lucide-react";

const PetDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  // Find pet by ID
  const pet = pets.find(pet => pet.id === id);
  
  // Handle not found
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
  
  const handleAdopt = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Application Started",
        description: "You've begun the adoption process for " + pet.name,
      });
      setLoading(false);
      navigate(`/adopt/${pet.id}`);
    }, 1000);
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Pet Image */}
        <div className="relative rounded-lg overflow-hidden">
          <img 
            src={pet.image} 
            alt={pet.name} 
            className="w-full h-auto object-cover aspect-[4/3]"
          />
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-4 right-4 bg-white hover:bg-white/90"
          >
            <Heart className="h-5 w-5 text-red-500" />
          </Button>
        </div>
        
        {/* Pet Information */}
        <div>
          <h1 className="text-3xl font-bold">{pet.name}</h1>
          <div className="mt-2 flex items-center gap-2">
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize">
              {pet.type}
            </span>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize">
              {pet.status}
            </span>
          </div>
          
          <Separator className="my-6" />
          
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Breed</h3>
                <p className="mt-1 font-medium">{pet.breed}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Age</h3>
                <p className="mt-1 font-medium">{pet.age} {pet.age === 1 ? 'year' : 'years'} old</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Gender</h3>
                <p className="mt-1 font-medium capitalize">{pet.gender}</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">About</h3>
              <p className="text-foreground">{pet.description}</p>
            </div>
            
            <div className="mt-6">
              {pet.status === "available" ? (
                <Button 
                  onClick={handleAdopt}
                  disabled={loading}
                  className="w-full"
                  size="lg"
                >
                  {loading ? "Processing..." : "Start Adoption Process"}
                </Button>
              ) : (
                <Button disabled className="w-full" size="lg">
                  {pet.status === "pending" ? "Adoption Pending" : "Already Adopted"}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Information */}
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Adoption Process</CardTitle>
            <CardDescription>Steps to adopt {pet.name}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                1
              </div>
              <div>
                <h4 className="text-base font-medium">Submit Application</h4>
                <p className="text-sm text-muted-foreground">
                  Complete our adoption form with your information.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                2
              </div>
              <div>
                <h4 className="text-base font-medium">Meet and Greet</h4>
                <p className="text-sm text-muted-foreground">
                  Schedule a time to meet {pet.name} in person.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                3
              </div>
              <div>
                <h4 className="text-base font-medium">Finalize Adoption</h4>
                <p className="text-sm text-muted-foreground">
                  Complete paperwork and welcome {pet.name} home.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Requirements</CardTitle>
            <CardDescription>What we look for in adopters</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 flex h-2 w-2 rounded-full bg-primary"></span>
                <span className="text-sm">Safe and secure home environment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 flex h-2 w-2 rounded-full bg-primary"></span>
                <span className="text-sm">Commitment to pet's needs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 flex h-2 w-2 rounded-full bg-primary"></span>
                <span className="text-sm">Proper space for pet's size</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 flex h-2 w-2 rounded-full bg-primary"></span>
                <span className="text-sm">Ability to afford veterinary care</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 flex h-2 w-2 rounded-full bg-primary"></span>
                <span className="text-sm">Time for exercise and socialization</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Support</CardTitle>
            <CardDescription>We're here to help</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Have questions about adopting {pet.name}? Our team is here to help you through the process.
            </p>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Contact us:</h4>
              <p className="text-sm">Email: adopt@petrescue.example</p>
              <p className="text-sm">Phone: (555) 123-4567</p>
            </div>
            <Button variant="outline" className="w-full">
              Contact About {pet.name}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PetDetailsPage;
