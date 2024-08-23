const dateTimeNow = new Date();

const currentDate = dateTimeNow.toLocaleDateString([], { year: 'numeric' });

const data = [
  {
    id: '1',
    question: 'How long is the online course?',
    answer:
      'Approximately 11 hours of content :) There are 7 modules and 120+ videos.',
  },
  {
    id: '2',
    question: "What if the course is lame and I don't like it?",
    answer:
      "That's impossible. Haha jk. These courses are designed to help you grow. If after registering and through a couple of lessons you realize it's not the right fit, no worries! We will provide you with a full refund within the first 30 days of trying the course and with less than 25% of the course completed.",
  },
  {
    id: '3',
    question: 'Why is the course $1000?',
    answer: "It's not $1000. It's $997. lol.",
  },
  {
    id: '4',
    question: 'What if I have questions I want to ask?',
    answer:
      'The Kajabi platform is amazing, as you go through the course - if you have questions please feel free to leave them as comments. I will be putting aside 2-3 hours a week answering questions in the comment section!',
  },
  {
    id: '5',
    question: 'What about your in-person workshops?',
    answer: `I will be running my in-person workshops again in ${currentDate} and you can find more information here www.stageworkshop.live`,
  },
];

export default data;
