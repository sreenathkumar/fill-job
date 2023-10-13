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

interface generalProfileDataType{
   firstName: string,
   lastName: string,
   bio: string,
   img: string,
}

interface profileDataType { 
   general_profile: generalProfileDataType,
   
}