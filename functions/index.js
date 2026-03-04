const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { OpenAI } = require("openai");
const cors = require("cors")({ origin: true });

admin.initializeApp();

// 이 함수가 /api/chat 요청을 처리합니다.
exports.chat = functions.https.onRequest((req, res) => {
    return cors(req, res, async () => {
        if (req.method !== "POST") {
            return res.status(405).send({ error: "Method Not Allowed" });
        }

        // 최신 방식: .env 파일이나 process.env에서 API 키를 읽어옵니다.
        const apiKey = process.env.OPENAI_API_KEY;

        if (!apiKey) {
            return res.status(500).send({ 
                error: "서버에 OpenAI API Key가 설정되지 않았습니다. functions/.env 파일을 확인해주세요." 
            });
        }

        const openai = new OpenAI({ apiKey: apiKey });

        try {
            const { prompt, query } = req.body;

            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: prompt },
                    { role: "user", content: query }
                ],
                temperature: 0.7,
            });

            return res.status(200).send({
                answer: response.choices[0].message.content
            });

        } catch (error) {
            console.error("OpenAI Error:", error);
            return res.status(500).send({ error: error.message });
        }
    });
});
