import Particles from "./components/Particles";

const App = () => {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
        staticity={60}
        ease={40}
        refresh={true}
      />
      {/* Your other content here */}
    </div>
  );
};

export default App;