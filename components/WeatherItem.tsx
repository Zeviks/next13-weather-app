interface WeatherItemProps {
  city: string;
  condition: string;
  temperatureCelsius: number;
  temperatureFahrenheit: number;
}

const WeatherItem: React.FC<WeatherItemProps> = ({
  city,
  condition,
  temperatureCelsius,
  temperatureFahrenheit,
}) => {
  return (
    <div className="flex justify-between w-full h-full bg-night text-white p-4 rounded">
      <div>
        <h3 className="tracking-tight text-3xl font-bold font-['Syne']">
          {city}
        </h3>
        <h3 className="tracking-tighter text-md font-light text-white/80">
          {condition}
        </h3>
      </div>
      <div className="flex flex-col">
        <span className="text-6xl font-bold tracking-tighter">
          {temperatureCelsius}°
        </span>
        <span className="self-end text-xl pt-2 font-semibold text-white">
          {temperatureFahrenheit}°F
        </span>
      </div>
    </div>
  );
};

export default WeatherItem;
