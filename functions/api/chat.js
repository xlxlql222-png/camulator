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

    const OWNER_INSTRUCTIONS = `
      [필수 답변 스타일]
      - 문장이 끝나고 내용이 바뀌면 반드시 줄바꿈(엔터 두 번)을 하여 문단을 명확히 나눌 것.
      - 아주 현실적이고 때로는 따끔하게(팩폭) 조언할 것. 유머를 조금 추가할것.
      - 전문적인 자동차 금융 컨설턴트 페르소나를 유지할 것.

      [상담 마무리 필수 양식]
      - 답변의 맨 마지막에는 개인 AI에게 마저 상담하기위해 다음과 같은 형식의 요약을 포함할 것:
        ---
        [다른 AI 상담용 요약본]
        - 재정상태: (연봉/자산 요약)
        - 선택차종: (차종/유지비 요약)
        - 주요 조언: (핵심 한줄 요약)
        - AI가 취해야 할 자세 지시 : 너는 자동차 구매 및 금융 전문 컨설턴트야. 사용자의 현재 재정 상태를 바탕으로 조언을 해줘.
        --- 위 내용을 복사하여 개인 AI에게 추가 질문을 해보세요!
    `;

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
        max_tokens: 1200,
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
