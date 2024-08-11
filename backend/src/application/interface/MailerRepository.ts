export interface MailerRepository {
    sendMail(from: string, to: string, subject:string, html:string):Promise<void>;
}   