
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">About PetRescue</h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our mission is to find loving homes for all pets in need and support animal welfare in our community.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="mb-4 text-muted-foreground">
            PetRescue was founded in 2023 by a group of passionate animal lovers who saw a need for a better way to connect rescued pets with loving forever homes.
          </p>
          <p className="mb-4 text-muted-foreground">
            What started as a small local effort has grown into a network of rescuers, foster homes, volunteers, and supporters all working together to make a difference in the lives of homeless pets.
          </p>
          <p className="text-muted-foreground">
            Our organization is committed to reducing pet homelessness through adoption, education, and community outreach programs. We believe every pet deserves a chance at a happy, healthy life with a family that loves them.
          </p>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To find loving homes for all pets in need and promote animal welfare through education, advocacy, and community partnerships.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                A world where all pets have loving homes and are treated with kindness, respect, and compassion.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="bg-muted/30 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mx-auto h-32 w-32 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Cause</h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg text-muted-foreground">
            There are many ways you can help us in our mission to find homes for pets in need.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/volunteer">Volunteer</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/donate">Donate</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/pets">Adopt a Pet</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Team data
const teamMembers = [
  {
    name: "Jane Smith",
    role: "Founder & Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "John Davis",
    role: "Veterinarian",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Sarah Johnson",
    role: "Adoption Coordinator",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Michael Lee",
    role: "Volunteer Coordinator",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  }
];

export default AboutPage;
