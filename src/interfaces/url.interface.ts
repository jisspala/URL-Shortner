export interface Constants {
    ENCODED_SUCCESS:string,
    DECODED_SUCCES:string,
    INVALID_URL:string,
    INVALID_ENCODEDURL:string
    DEVELOPMENT:string,
    PRODUCTION:string
}
export interface Result<T> {
    success:boolean
    message: string;
    error?: string;
    data?: T;
  }

  export interface EncodedData {
    encodedUrl:string
  }

  export interface DecodedData {
    url:string
  }