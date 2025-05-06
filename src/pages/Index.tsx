
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { pets } from "@/data/pets";
import { Heart } from "lucide-react";

const Index = () => {
  // Get available pets to feature on the homepage
  const availablePets = pets.filter(pet => pet.status === "available").slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Find Your Forever Friend
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-lg text-foreground/70">
            Our mission is to connect loving pets with their forever homes.
            Browse our available pets and start your adoption journey today.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/pets">Find a Pet</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Pets */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            Pets Looking for a Home
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {availablePets.map((pet) => (
              <Card key={pet.id}>
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-white p-1.5 rounded-full">
                    <Heart className="h-5 w-5 text-red-500" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{pet.name}</CardTitle>
                  <CardDescription>
                    {pet.breed} • {pet.age} {pet.age === 1 ? 'year' : 'years'} old
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    {pet.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link to={`/pets/${pet.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link to="/pets">View All Pets</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Adoption Process */}
      <section className="bg-muted/30 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            How to Adopt
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Browse Pets</h3>
              <p className="text-muted-foreground">
                Search through our available pets to find your perfect match.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Submit Application</h3>
              <p className="text-muted-foreground">
                Fill out our adoption form and we'll review your application.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Welcome Home</h3>
              <p className="text-muted-foreground">
                Once approved, you can bring your new friend home.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
