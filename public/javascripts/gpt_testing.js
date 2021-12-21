const OpenAI = require('openai-api')

const OPENAI_API_KEY = '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'
const openai = new OpenAI(OPENAI_API_KEY)

// (async () => {
//     const gptResponse = await openai.complete({
//         engine: 'davinci',
//         prompt: 'Please help me repair my car.',
//         maxTokens: 32,
//         temperature: 0.0,
//         topP: 1,
//         presencePenalty: 0,
//         frequencyPenalty: 0,
//         bestOf: 1,
//         n: 1,
//         stream: false,
//         stop: ['.']
//     });

//     console.log(gptResponse.data);
// })();

async function predict() {
    const gptResponse = await openai.complete({
        engine: 'davinci',
        prompt: 'I am early to the office.',
        maxTokens: 32,
        temperature: 0.1,
        topP: 1,
        presencePenalty: 0,
        frequencyPenalty: 0,
        bestOf: 1,
        n: 1,
        stream: false,
        stop: ['.']
    });

    console.log(gptResponse.data.choices[0].text);
}

predict()