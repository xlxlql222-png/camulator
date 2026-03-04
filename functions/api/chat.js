export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const { prompt, query } = await request.json();
    const apiKey = env.OPENAI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "API Key missing" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // 모델을 gpt-4o-mini로 설정 (성능과 비용의 최적의 밸런스)
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", 
        messages: [
          { role: "system", content: prompt },
          { role: "user", content: query },
        ],
        temperature: 0.7,
        max_tokens: 1000, // 답변 길이 제한
      }),
    });

    const data = await response.json();

    if (data.error) {
      return new Response(JSON.stringify({ error: data.error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({
      answer: data.choices[0].message.content
    }), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
