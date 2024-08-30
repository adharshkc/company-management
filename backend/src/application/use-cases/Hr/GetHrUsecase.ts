import { HrRepository } from "@application/interface/HrRepository";

export class GetHrUsecase {
  constructor(private hrRepository: HrRepository) {}
  async execute(hr_id: number) {
    try {
      const hr = await this.hrRepository.getHr(hr_id);
      return {
        status: 200,
        data: {
          success: true,
          hr,
        },
      };
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
