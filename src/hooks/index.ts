import { useCallback, useEffect, useMemo, useState } from "react";
import { ResponseType, BASE_URL, API_KEY } from "@type/index";
import { DataType } from "@components/Forecast";
export function useFetchData(
  locationKey: number
): [ResponseType[], (locationKey: number) => Promise<void>] {
  const [data, setData] = useState<ResponseType[]>([]);

  const fetchData = useCallback(async (locationKey: number) => {
    const response = await fetch(
      `${BASE_URL}${locationKey}?apikey=${API_KEY}&language=vi&details=true`
    );
    let data: ResponseType[] = (await response.json())?.DailyForecasts;
    setData(data);
  }, []);

  useEffect(() => {
    fetchData(locationKey);
  }, []);
  return [data, fetchData];
}
export function useCalculate(data: ResponseType[]) {
  return useMemo(() => {
    let dayData: DataType[] = [];
    let nightData: DataType[] = [];
    data?.forEach((v) => {
      const { Day, Night, Temperature, Date } = v;
      dayData.push({
        weatherInfo: Day,
        temperature: Temperature.Maximum,
        Date,
      });
      nightData.push({
        weatherInfo: Night,
        temperature: Temperature.Minimum,
        Date,
      });
    });
    return { dayData, nightData };
  }, [data]);
}
