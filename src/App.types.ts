

export interface ObjectType {
    [key: string]: any
}

export interface ApiSearchResponse {
    results: PhotoType[];
    total: number;
    total_pages: number;
}

export interface PhotoType {
    description: string;
    id: string;
    urls: {
      regular: string;
      small: string;
    }
    likes: number;
    user: { name: string };
    total_pages: number;

    // value: {
    //     imgRegular: string;
    //     description: string;
    //     likes: number;
    //     name: string;
        
    // },
}
  