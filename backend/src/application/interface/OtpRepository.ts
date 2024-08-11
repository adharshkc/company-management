

export interface OtpRepository{
    generateOtp():string
    saveOtp(otp:string,userId?:string):Promise<void>
    checkOtp(otp:string, userId?:string):Promise<boolean|null>;
}