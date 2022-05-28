import { SubmitFeedbackService } from "./submitFeedbackService";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackService(
  { create: createFeedbackSpy }, //function mock
  { sendMail: sendMailSpy } //function mock
);

describe("submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "bug",
        comment: "example content",
        screenshot: "data:image/png;base64test.jpg",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("Should not be able to submit the feedback without a type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "example content",
        screenshot: "data:image/png;base64test.jpg",
      })
    ).rejects.toThrow();
  });

  it("Should not be able to submit the feedback without a comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "bug",
        comment: null,
        screenshot: "data:image/png;base64test.jpg",
      })
    ).rejects.toThrow();
  });

  it("Should not be able to submit a feedback with an invalid screenshot format", async () => {
    await expect(
      submitFeedback.execute({
        type: "bug",
        comment: "screenshot format test",
        screenshot: "invalid.jpg",
      })
    ).rejects.toThrow();
  });
});
