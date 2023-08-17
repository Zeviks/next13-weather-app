import WeatherItem from "./WeatherItem";
import { BiSearch } from "react-icons/Bi";

const LandingPage = () => {
  const weatherData = [
    {
      city: "Tokyo",
      condition: "Cloudy",
      temperatureCelsius: 32,
      temperatureFahrenheit: 88,
    },
    {
      city: "New York",
      condition: "Sunny",
      temperatureCelsius: 54,
      temperatureFahrenheit: 101,
    },
    {
      city: "New York",
      condition: "Rainy",
      temperatureCelsius: 54,
      temperatureFahrenheit: 101,
    },
    {
      city: "New York",
      condition: "Snow",
      temperatureCelsius: 54,
      temperatureFahrenheit: 101,
    },
    {
      city: "New York",
      condition: "Thunder",
      temperatureCelsius: 54,
      temperatureFahrenheit: 101,
    },
    {
      city: "New York",
      condition: "Rain",
      temperatureCelsius: 54,
      temperatureFahrenheit: 101,
    },
    // Add more weather data items as needed
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 ">
      <div className="relative">
        <input
          type="text"
          id="city"
          className="mt-4 bg-white border border-gray-300 text-gray-900 text-sm sm:text-base rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
          placeholder="Search for a city..."
          required
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-night hover:text-morning focus:outline-none transition-all"
        >
          <BiSearch />
        </button>
      </div>
      <div className="py-4">
        <h1 className="font-['Syne'] text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-light">
          Monday
        </h1>
        <h2 className="tracking-tight font-semibold text-xl sm:text-base md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">
          August 15
        </h2>
      </div>
      {/* Preset Cities */}
      <div className="flex flex-col space-y-5 pt-2">
        {weatherData.map((data, index) => (
          <WeatherItem
            key={index}
            city={data.city}
            condition={data.condition}
            temperatureCelsius={data.temperatureCelsius}
            temperatureFahrenheit={data.temperatureFahrenheit}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
