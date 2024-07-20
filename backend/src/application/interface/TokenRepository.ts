export interface TokenRepository {
  create(userId: number|undefined, role: string): Promise<string>;
}
