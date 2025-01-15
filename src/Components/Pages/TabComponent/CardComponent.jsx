export const Card = ({ title, subtitle, description, location }) => (
  <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md mb-4">
    <h3 className="text-xl font-bold">{title}</h3>
    <h4 className="text-red-500">{subtitle}</h4>
    <p className="text-gray-400">{description}</p>
    <span className="text-gray-300 italic">{location}</span>
  </div>
);
