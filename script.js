document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const isOpen = answer.classList.contains("open");

      // Close all answers
      document.querySelectorAll(".faq-answer").forEach((a) => a.classList.remove("open"));
      document.querySelectorAll(".faq-question").forEach((q) => q.classList.remove("active"));

      // Open clicked one if it wasn't open before
      if (!isOpen) {
        answer.classList.add("open");
        question.classList.add("active");
      }
    });
  });
});
