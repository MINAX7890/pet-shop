
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { pets } from "@/data/pets";
import { Pet } from "@/types";
import { Heart, Search } from "lucide-react";

const PetsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [petType, setPetType] = useState<string>("");
  
  // Filter pets based on search term and pet type
  const filteredPets = pets.filter((pet) => {
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = petType === "" || pet.type === petType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Find Your Perfect Pet</h1>
      
      {/* Search and filters */}
      <div className="mb-10">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name or breed..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Pet Type</Label>
            <RadioGroup defaultValue="" value={petType} onValueChange={setPetType}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="" id="all" />
                <Label htmlFor="all">All</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dog" id="dog" />
                <Label htmlFor="dog">Dogs</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cat" id="cat" />
                <Label htmlFor="cat">Cats</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other">Other</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
      
      {/* Pet listing */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredPets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
      
      {filteredPets.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium mb-2">No pets found</h2>
          <p className="text-muted-foreground mb-6">
            Try adjusting your search or filters to find more pets.
          </p>
          <Button onClick={() => { setSearchTerm(""); setPetType(""); }}>
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  );
};

// Pet card component
const PetCard = ({ pet }: { pet: Pet }) => {
  return (
    <Card>
      <div className="aspect-square relative overflow-hidden rounded-t-lg">
        <img 
          src={pet.image} 
          alt={pet.name}
          className="h-full w-full object-cover transition-transform hover:scale-105" 
        />
        <div className="absolute top-2 right-2 bg-white p-1.5 rounded-full">
          <Heart className="h-5 w-5 text-red-500" />
        </div>
        {pet.status !== "available" && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 py-2 px-3 text-center text-white">
            <span className="text-sm font-medium capitalize">{pet.status}</span>
          </div>
        )}
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
        <Button asChild className="w-full" disabled={pet.status !== "available"}>
          <Link to={`/pets/${pet.id}`}>
            {pet.status === "available" ? "View Details" : "Not Available"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PetsPage;
