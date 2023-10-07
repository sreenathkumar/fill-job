interface tokenDataTypes{
   data: String
   expires: Number
}

interface tokenTypes {
   access_token: tokenDataTypes,
   refresh_token: tokenDataTypes,
}