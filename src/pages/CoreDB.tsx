import { Database } from "lucide-react";
import Navbar from "@/components/Navbar";

const CoreDB = () => {
  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("/lovable-uploads/215e65e7-b77e-4f63-9bf4-0c995b82b8d4.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          maxHeight: '100vh',
          overflow: 'hidden'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        
      </div>
    </div>
  );
};

export default CoreDB;
