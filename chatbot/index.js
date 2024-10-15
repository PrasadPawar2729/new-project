
const questionAnswerPairs = [
    { question: "What is your name?", answer: "My name is Chatbot." },
    { question: "How can I help you?", answer: "I can assist you with your queries." },
    { question: "What is the weather today?", answer: "The weather is sunny." }
];

function chatbot(questionAnswerPairs, userQuestion) {
   
    function check(str) {
        return str.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase();
    }

   
    const  askquestion = check(userQuestion);

    
    let closestMatch = '';
    let maxCommonWords = 0;

  
    questionAnswerPairs.forEach(pair => {
        const normalizedQuestion = check(pair.question);
        const userWords = new Set(askquestion.split(" "));
        const questionWords = new Set(normalizedQuestion.split(" "));

        
        const commonWords = [...userWords].filter(word => questionWords.has(word)).length;

       
        if (commonWords > maxCommonWords) {
            maxCommonWords = commonWords;
            closestMatch = pair.answer;
        }
    });

    
    return closestMatch || "Sorry, I don't understand the question.";
}



const userqt = "What's the weather like today?";
const result = chatbot(questionAnswerPairs, userqt);
console.log(result); 
