import { MailAdapter } from "../adapters/mailAdapter";
import { FeedbacksRespository } from "../repositories/feedbacksRepository";

interface SubmitFeedbackServiceRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackService {
  constructor(
    private feedbacksRepository: FeedbacksRespository,
    private maildAdapter: MailAdapter
  ) {}
  async execute(request: SubmitFeedbackServiceRequest) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error("Type is required.");
    }

    if (!comment) {
      throw new Error("Comment is required.");
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Invalid screenshot format.");
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.maildAdapter.sendMail({
      subject: "Bug Report",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        `<p>feedback type: ${type}</p>`,
        `<p>comment: ${comment}</p>`,
        screenshot && `<img src="${screenshot}"`,
        `</div>`,
      ].join("\n"),
    });
  }
}