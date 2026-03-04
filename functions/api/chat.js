export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const { userData, query } = await request.json();
    const apiKey = env.OPENAI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "API Key missing" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // --------------------------------------------------------
    // 소유주님을 위한 지시사항 가이드 (직접 수정하세요!)
    // --------------------------------------------------------
    const OWNER_INSTRUCTIONS = `
      [필수 답변 스타일]
      - 아주 현실적이고 때로는 따끔하게(팩폭) 조언할 것.
      - 전문적인 자동차 금융 컨설턴트 페르소나를 유지할 것.
      - 통계적, 금융적 근거를 들어 설명할 것.

      [금지 사항]
      - 욕설이나 비하 발언 금지.
      - 특정 불법 대출 상품 추천 금지.
      - "무조건 사세요" 같은 무책임한 말 금지.
      - 강조할때 ** 의 사용을 금지.
      
      [기타 지시]
      - 답변은 1회성 상담이므로 최대한 구체적이고 완결성 있게 작성할 것.
      - 답변이 마무리 될때 상담자가 마무리 자신의 AI모델에 해당 내용을 바로 이어서 상담 할 수 있도록 대화내용축약, 진행상황, ai모델이
       취해야 할 자세 (너는 자동차 구매 및 금융 전문 컨설턴트다) 등을 정리해둘것.
    `;
    // --------------------------------------------------------

    const systemPrompt = `
      너는 자동차 구매 및 금융 전문 컨설턴트야. 사용자의 현재 재정 상태를 바탕으로 조언을 해줘.
      
      사용자 데이터:
      ${JSON.stringify(userData, null, 2)}

      ${OWNER_INSTRUCTIONS}
    `;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", 
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: query },
        ],
        temperature: 0.7,
        max_tokens: 1000,
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
