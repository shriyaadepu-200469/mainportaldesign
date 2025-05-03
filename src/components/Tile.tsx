
import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";

interface TileProps {
  title: string;
  description: string;
  url: string;
  icon: string;
  id: string;
}

const Tile = ({ title, description, url, icon, id }: TileProps) => {
  const IconComponent = (Icons as any)[icon] as LucideIcon;
  
  // Determine if this is an internal route
  const isInternalRoute = id === "app1"; // CoreDB is app1
  const linkTo = isInternalRoute ? "/coredb" : url;

  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-[#80000020] h-[200px] flex flex-col justify-between group">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-[#800000] mb-2 group-hover:text-[#600000]">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        <IconComponent className="h-8 w-8 text-[#800000] group-hover:text-[#600000] transition-colors" />
      </div>
      {isInternalRoute ? (
        <Link
          to={linkTo}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-[#800000] hover:text-[#600000] font-medium transition-colors"
        >
          Launch Application →
        </Link>
      ) : (
        <a
          href={url}
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 inline-block text-[#800000] hover:text-[#600000] font-medium transition-colors"
        >
          Launch Application →
        </a>
      )}
    </div>
  );
};

export default Tile;
