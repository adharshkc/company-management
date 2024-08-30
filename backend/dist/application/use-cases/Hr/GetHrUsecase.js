"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetHrUsecase = void 0;
class GetHrUsecase {
    constructor(hrRepository) {
        this.hrRepository = hrRepository;
    }
    async execute(hr_id) {
        try {
            const hr = await this.hrRepository.getHr(hr_id);
            return {
                status: 200,
                data: {
                    success: true,
                    hr,
                },
            };
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.GetHrUsecase = GetHrUsecase;
