interface tokenDataType{
   data: string
   expires: number
}

interface tokenType {
   access_token: tokenDataType,
   refresh_token: tokenDataType,
}

interface btnType {
   title: string,
   task: Function,
}
