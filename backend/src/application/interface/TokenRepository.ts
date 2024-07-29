export interface TokenRepository {
  createAccessToken(userId: number|undefined,commonId: number|undefined, role: string): Promise<string>;
  createRefreshToken(userId: number| undefined, role: string): Promise<string>;
}
