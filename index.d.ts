declare module '@apiverve/distancecalculator' {
  export interface distancecalculatorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface distancecalculatorResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class distancecalculatorWrapper {
    constructor(options: distancecalculatorOptions);

    execute(callback: (error: any, data: distancecalculatorResponse | null) => void): Promise<distancecalculatorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: distancecalculatorResponse | null) => void): Promise<distancecalculatorResponse>;
    execute(query?: Record<string, any>): Promise<distancecalculatorResponse>;
  }
}
