import TestShadUI from "@/components/TestShadUI";
import { Button } from "@/components/ui/button";

const Home = () => {
  const loggedIn = {
    firstName: "Tomas",
    lastName: "Garcia",
    email: "contact@gmail.com",
  };

  return (
    <section className="">
      <div className="">
        <header className="text-red-500">header</header>
      </div>
      <p className="">Sidebar</p>
      <Button className="rounded-full" variant="outline">
        Click me
      </Button>
      <TestShadUI />
    </section>
  );
};

export default Home;
