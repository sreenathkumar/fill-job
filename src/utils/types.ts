interface tokenDataTypes{
   data: string
   expires: number
}

interface tokenTypes {
   access_token: tokenDataTypes,
   refresh_token: tokenDataTypes,
}
