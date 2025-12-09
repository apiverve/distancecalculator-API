declare module '@apiverve/distancecalculator' {
  export interface distancecalculatorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface distancecalculatorResponse {
    status: string;
    error: string | null;
    data: DistanceCalculatorData;
    code?: number;
  }


  interface DistanceCalculatorData {
      distanceMiles: number;
      distanceKM:    number;
      location1:     Location;
      location2:     Location;
  }
  
  interface Location {
      latitude:  string;
      longitude: string;
      city:      string;
      state:     string;
  }

  export default class distancecalculatorWrapper {
    constructor(options: distancecalculatorOptions);

    execute(callback: (error: any, data: distancecalculatorResponse | null) => void): Promise<distancecalculatorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: distancecalculatorResponse | null) => void): Promise<distancecalculatorResponse>;
    execute(query?: Record<string, any>): Promise<distancecalculatorResponse>;
  }
}
