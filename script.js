const questions = [
  {
    category: "CBT",
    question: "What is a 'cognitive distortion'?",
    answers: [
      "A thought pattern that can inaccurately shape how we see a situation",
      "A type of memory loss",
      "A breathing exercise",
      "A formal psychiatric diagnosis"
    ],
    correct: 0,
    explanation: "Cognitive distortions are biased or unhelpful thinking patterns—like catastrophizing or all-or-nothing thinking—that can influence emotions and behavior."
  },
  {
    category: "Emotions",
    question: "Which approach is usually most helpful when a strong emotion shows up?",
    answers: [
      "Immediately push it away",
      "Notice it, name it, and decide how you want to respond",
      "Assume it proves your thoughts are true",
      "Make a major decision before it fades"
    ],
    correct: 1,
    explanation: "Naming and allowing an emotion can create a little space between the feeling and your next action. Feelings are information, not automatic instructions."
  },
  {
    category: "Communication",
    question: "Which is the best example of an 'I statement'?",
    answers: [
      "You never listen to me",
      "Anyone would be upset by what you did",
      "I feel dismissed when I’m interrupted, and I’d like to finish my thought",
      "You need to communicate better"
    ],
    correct: 2,
    explanation: "An I statement describes your experience, the situation, and what you need without turning the whole message into an accusation."
  },
  {
    category: "Boundaries",
    question: "A healthy boundary is best described as…",
    answers: [
      "A rule that controls another person’s behavior",
      "A punishment for someone who upset you",
      "A limit describing what you will or won’t participate in",
      "Avoiding conflict at all costs"
    ],
    correct: 2,
    explanation: "Boundaries focus on your own choices and limits. They aren't a way to control someone else; they clarify what you will do to take care of yourself."
  },
  {
    category: "Coping Skills",
    question: "Why can slow breathing help when you feel stressed?",
    answers: [
      "It guarantees the problem will disappear",
      "It can help shift the body out of a high-alert state",
      "It stops all negative thoughts instantly",
      "It makes you forget the situation"
    ],
    correct: 1,
    explanation: "Slow, controlled breathing can send signals of safety to the nervous system and reduce some of the physical intensity of stress."
  },
  {
    category: "Thinking Traps",
    question: "You make one mistake at work and think, 'I ruin everything.' Which thinking trap fits best?",
    answers: [
      "Mind reading",
      "Overgeneralization",
      "Personalization",
      "Fortune telling"
    ],
    correct: 1,
    explanation: "Overgeneralization takes one event and turns it into a broad rule about yourself or your life: one mistake becomes 'I always mess up.'"
  },
  {
    category: "Relationships",
    question: "What does active listening usually involve?",
    answers: [
      "Planning your response while the other person talks",
      "Giving advice as quickly as possible",
      "Reflecting back what you heard and asking clarifying questions",
      "Agreeing with everything the person says"
    ],
    correct: 2,
    explanation: "Active listening is about understanding before responding. Reflecting and clarifying can make the other person feel heard even when you don't fully agree."
  },
  {
    category: "Self-Compassion",
    question: "Which response is closest to self-compassion after a setback?",
    answers: [
      "I’m an idiot. I should know better by now.",
      "It doesn’t matter at all.",
      "This hurts. Mistakes happen, and I can figure out what to do next.",
      "I need everyone to tell me I did nothing wrong."
    ],
    correct: 2,
    explanation: "Self-compassion isn't pretending nothing went wrong. It combines honesty with the kind of humane response you might offer someone you care about."
  },
  {
    category: "Therapy Basics",
    question: "What is one common purpose of therapy?",
    answers: [
      "Having a therapist make your life decisions for you",
      "Eliminating every uncomfortable emotion",
      "Building insight and skills for handling thoughts, feelings, relationships, and behavior",
      "Proving who is right in conflicts"
    ],
    correct: 2,
    explanation: "Therapy can have many goals, but a common theme is developing insight, skills, and choices—not outsourcing every decision or eliminating normal emotions."
  },
  {
    category: "Mindfulness",
    question: "What does mindfulness generally ask you to practice?",
    answers: [
      "Keeping your mind completely blank",
      "Paying attention to the present moment with less judgment",
      "Only thinking positive thoughts",
      "Ignoring physical sensations"
    ],
    correct: 1,
    explanation: "Mindfulness is less about having no thoughts and more about noticing present-moment experience without automatically judging or reacting to it."
  },
  {
    category: "Attachment",
    question: "In attachment theory, a secure relationship generally includes…",
    answers: [
      "Never needing reassurance",
      "Comfort with closeness while still allowing independence",
      "Avoiding disagreement",
      "Spending nearly all free time together"
    ],
    correct: 1,
    explanation: "Secure attachment is associated with being able to rely on others while also tolerating independence, boundaries, and ordinary relationship conflict."
  },
  {
    category: "CBT",
    question: "What is a useful way to challenge an upsetting automatic thought?",
    answers: [
      "Ask what evidence supports it and what evidence doesn't",
      "Repeat it until it feels true",
      "Avoid anything that might disprove it",
      "Replace it with the most positive thought possible"
    ],
    correct: 0,
    explanation: "A balanced evidence check is a classic CBT move. The goal isn't forced positivity; it's a more accurate and useful interpretation."
  },
  {
    category: "Stress",
    question: "What is 'fight, flight, or freeze' referring to?",
    answers: [
      "Three personality types",
      "Common automatic responses to perceived threat",
      "Three stages of sleep",
      "Different therapy styles"
    ],
    correct: 1,
    explanation: "Fight, flight, and freeze are common nervous-system responses to perceived danger or intense stress. They can happen even when the threat isn't physical."
  },
  {
    category: "Behavior",
    question: "Why can avoidance make anxiety stick around?",
    answers: [
      "Avoidance always causes new anxiety disorders",
      "It can prevent you from learning that a feared situation may be manageable",
      "It permanently changes your personality",
      "It makes other people anxious"
    ],
    correct: 1,
    explanation: "Avoidance can bring short-term relief, which reinforces it. But it may also block corrective experiences that teach your brain the situation is survivable or manageable."
  },
  {
    category: "Growth",
    question: "Which goal is usually more workable?",
    answers: [
      "I will never feel anxious again",
      "Everyone will approve of me",
      "I’ll practice one coping skill when I notice myself spiraling",
      "I will never make another mistake"
    ],
    correct: 2,
    explanation: "Specific goals focused on actions you can control tend to be more useful than goals requiring perfect emotions, perfect behavior, or control over other people."
  }
];

const screens = {
  start: document.getElementById("start-screen"),
  quiz: document.getElementById("quiz-screen"),
  results: document.getElementById("results-screen")
};

const startBtn = document.getElementById("start-btn");
const quitBtn = document.getElementById("quit-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const questionCounter = document.getElementById("question-counter");
const scoreDisplay = document.getElementById("score-display");
const progressBar = document.getElementById("progress-bar");
const categoryEl = document.getElementById("category");
const questionText = document.getElementById("question-text");
const answersEl = document.getElementById("answers");
const feedbackCard = document.getElementById("feedback-card");
const feedbackIcon = document.getElementById("feedback-icon");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackText = document.getElementById("feedback-text");

let gameQuestions = [];
let currentIndex = 0;
let score = 0;
let streak = 0;
let bestStreak = 0;
let answered = false;

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function showScreen(name) {
  Object.values(screens).forEach(screen => screen.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startGame() {
  gameQuestions = shuffle(questions).slice(0, 10);
  currentIndex = 0;
  score = 0;
  streak = 0;
  bestStreak = 0;
  answered = false;
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  const item = gameQuestions[currentIndex];
  questionCounter.textContent = `Question ${currentIndex + 1} of ${gameQuestions.length}`;
  scoreDisplay.textContent = `${score} pts`;
  progressBar.style.width = `${((currentIndex + 1) / gameQuestions.length) * 100}%`;
  categoryEl.textContent = item.category;
  questionText.textContent = item.question;
  feedbackCard.classList.remove("show");
  nextBtn.classList.remove("show");
  answersEl.innerHTML = "";

  item.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.innerHTML = `<span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${answer}</span>`;
    button.addEventListener("click", () => chooseAnswer(index));
    answersEl.appendChild(button);
  });
}

function chooseAnswer(selectedIndex) {
  if (answered) return;
  answered = true;

  const item = gameQuestions[currentIndex];
  const buttons = [...answersEl.querySelectorAll(".answer-btn")];
  const isCorrect = selectedIndex === item.correct;

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === item.correct) button.classList.add("correct");
    if (index === selectedIndex && !isCorrect) button.classList.add("wrong");
  });

  if (isCorrect) {
    score += 100;
    streak += 1;
    bestStreak = Math.max(bestStreak, streak);
    feedbackIcon.textContent = "✓";
    feedbackTitle.textContent = streak >= 3 ? `${streak} in a row!` : "You got it.";
  } else {
    streak = 0;
    feedbackIcon.textContent = "↪";
    feedbackTitle.textContent = "Not quite.";
  }

  scoreDisplay.textContent = `${score} pts`;
  feedbackText.textContent = item.explanation;
  feedbackCard.classList.add("show");
  nextBtn.classList.add("show");
  nextBtn.querySelector("span").textContent = currentIndex === gameQuestions.length - 1 ? "✓" : "→";
  nextBtn.childNodes[0].nodeValue = currentIndex === gameQuestions.length - 1 ? "See your results " : "Next question ";
}

function nextQuestion() {
  if (!answered) return;
  currentIndex += 1;
  if (currentIndex >= gameQuestions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

function showResults() {
  const correct = score / 100;
  const percent = Math.round((correct / gameQuestions.length) * 100);
  const resultEmoji = document.getElementById("result-emoji");
  const resultTitle = document.getElementById("result-title");
  const resultMessage = document.getElementById("result-message");

  document.getElementById("final-score").textContent = correct;
  document.getElementById("correct-count").textContent = correct;
  document.getElementById("best-streak").textContent = bestStreak;
  document.getElementById("percent-score").textContent = `${percent}%`;
  document.querySelector(".score-ring").style.setProperty("--score-angle", `${percent * 3.6}deg`);

  if (percent === 100) {
    resultEmoji.textContent = "🏆";
    resultTitle.textContent = "Therapist-level trivia.";
    resultMessage.textContent = "A perfect session. Your imaginary clipboard is waiting at reception.";
  } else if (percent >= 80) {
    resultEmoji.textContent = "🧠";
    resultTitle.textContent = "Very emotionally literate.";
    resultMessage.textContent = "You know your boundaries from your catastrophizing. Strong work.";
  } else if (percent >= 60) {
    resultEmoji.textContent = "🌱";
    resultTitle.textContent = "Good session.";
    resultMessage.textContent = "A solid score—and unlike actual therapy, you can immediately replay this one.";
  } else if (percent >= 40) {
    resultEmoji.textContent = "🛋️";
    resultTitle.textContent = "We have things to discuss.";
    resultMessage.textContent = "A respectable start. The couch remains available for another round.";
  } else {
    resultEmoji.textContent = "🫠";
    resultTitle.textContent = "Same time next week?";
    resultMessage.textContent = "The good news: self-awareness begins with knowing there is more to learn.";
  }

  showScreen("results");
}

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", nextQuestion);
quitBtn.addEventListener("click", () => showScreen("start"));
