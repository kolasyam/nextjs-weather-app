import React from 'react';
import Container from './Container';
import WeatherIcon from './WeatherIcon';
import WeatherDetails, { weatherDetailProps } from './WeatherDetails';
import converKelvintoCelsius from '@/utils/convertKelvintoCelsius';

export interface ForcastWeatherDetailProps extends weatherDetailProps{
    weatehrIcon: string;
    date: string;
    day: string;
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    description: string;
}
export default function ForcastWeatherDatail(props: ForcastWeatherDetailProps){
    const {
        weatehrIcon = "02d",
        date = "19.09",
        day = "Tuesday",
        temp,
        feels_like,
        temp_min,
        temp_max,
        description
    }=props;
    return (
        <Container className="gap-4 sm:gap-16 overflow-x-auto">
            <section className="flex gap-4 items-center px-4">
                <div className="flex flex-col gap-1 items-center">
                    <WeatherIcon iconName={weatehrIcon}/>
                    <p>{date}</p>
                    <p className="text-sm">{day}</p>
                </div>
                <div className="flex flex-col px-4 ">
                    <span className="text-5xl">{converKelvintoCelsius(temp ?? 0)}°</span>
                    <p className="text-xs space-x-1 whitespace-nowrap">
                        <span>Feels Like</span>
                        <span>
                            {converKelvintoCelsius(feels_like?? 0)}°
                        </span>                
                    </p>
                    <p className="capitalize">{description}</p>
                </div>
            </section>
            <section className="overflow-x-flow flex justify-between gap-4 px-4 w-full pr-10">
                <WeatherDetails {...props}></WeatherDetails>
            </section>
        </Container>
    );
}
// import React from "react";
// import Container from "./Container";
// import WeatherIcon from "./WeatherIcon";
// import WeatherDetails, { weatherDetailProps } from "./weatherDetails";
// // import { converKelvintoCelsius } from "@/utils/convertKelvinToCelsius";
// import converKelvintoCelsius from '@/utils/convertKelvintoCelsius';


// export interface ForecastWeatherDetailProps extends weatherDetailProps {
//   weatehrIcon: string;
//   date: string;
//   day: string;
//   temp: number;
//   feels_like: number;
//   temp_min: number;
//   temp_max: number;
//   description: string;
// }

// export default function ForecastWeatherDetail(
//   props: ForecastWeatherDetailProps
// ) {
//   const {
//     weatehrIcon = "02d",
//     date = "19.09",
//     day = "Tuesday",
//     temp,
//     feels_like,
//     temp_min,
//     temp_max,
//     description
//   } = props;
//   return (
//     <Container className="gap-4">
//       {/* left */}
//       <section className=" flex gap-4 items-center px-4  ">
//         <div className=" flex flex-col gap-1 items-center">
//           <WeatherIcon iconName={weatehrIcon} />
//           <p>{date}</p>
//           <p className="text-sm">{day} </p>
//         </div>

//         {/*  */}
//         <div className="flex flex-col px-4">
//           <span className="text-5xl">{converKelvintoCelsius(temp ?? 0)}°</span>
//           <p className="text-xs space-x-1 whitespace-nowrap">
//             <span> Feels like</span>
//             <span>{converKelvintoCelsius(feels_like ?? 0)}°</span>
//           </p>
//           <p className="capitalize"> {description}</p>
//         </div>
//       </section>
//       {/* right */}
//       <section className=" overflow-x-auto flex justify-between gap-4 px-4  w-full pr-10">
//         <WeatherDetails {...props} />
//       </section>
//     </Container>
//   );
// }