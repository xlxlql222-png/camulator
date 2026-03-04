document.addEventListener('DOMContentLoaded', () => {
    console.log("App Loaded v6.0 - AI Consulting Integration");

    const carData = [
        { id: 'walk', name: '튼튼한 두 다리', price: 0, cc: 0, taxYear: 0, insurance: 0, efficiency: 0, maintenance: 0, icon: '🚶', img: '' },
        { id: 'public', name: '대중교통 / 자전거', price: 0, cc: 0, taxYear: 0, insurance: 0, efficiency: 0, maintenance: 12, icon: '🚌', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Bus_icon.svg/640px-Bus_icon.svg.png' },
        { id: 'casper', name: '캐스퍼/모닝 (경차)', price: 1800, cc: 998, taxYear: 10, insurance: 70, efficiency: 14, maintenance: 5, icon: '🐣', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Hyundai_Casper_AX1_White_1.jpg/640px-Hyundai_Casper_AX1_White_1.jpg' },
        { id: 'avante', name: '아반떼 (준중형)', price: 2600, cc: 1598, taxYear: 29, insurance: 90, efficiency: 15, maintenance: 7, icon: '🚙', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Hyundai_Avante_CN7_white_%281%29.jpg/640px-Hyundai_Avante_CN7_white_%281%29.jpg' },
        { id: 'k5', name: 'K5 / 쏘나타 (중형)', price: 3400, cc: 1999, taxYear: 52, insurance: 110, efficiency: 12, maintenance: 10, icon: '🚘', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Kia_K5_Hybrid_DL3_White_%281%29_%28cropped%29.jpg/640px-Kia_K5_Hybrid_DL3_White_%281%29_%28cropped%29.jpg' },
        { id: 'sorento', name: '쏘렌토 (중형 SUV)', price: 4400, cc: 2151, taxYear: 56, insurance: 120, efficiency: 11, maintenance: 12, icon: '🏔️', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Kia_Sorento_MQ4_White_1.jpg/640px-Kia_Sorento_MQ4_White_1.jpg' },
        { id: 'grandeur', name: '그랜저 (준대형)', price: 4700, cc: 2497, taxYear: 65, insurance: 130, efficiency: 10, maintenance: 13, icon: '💎', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Hyundai_Grandeur_GN7_Black_1.jpg/640px-Hyundai_Grandeur_GN7_Black_1.jpg' },
        { id: 'palisade', name: '팰리세이드 (대형 SUV)', price: 5700, cc: 3778, taxYear: 98, insurance: 150, efficiency: 8, maintenance: 15, icon: '🏰', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Hyundai_Palisade_LX2_White_1.jpg/640px-Hyundai_Palisade_LX2_White_1.jpg' },
        { id: 'g80', name: '제네시스 G80', price: 6700, cc: 2497, taxYear: 65, insurance: 170, efficiency: 9, maintenance: 20, icon: '✨', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Genesis_G80_RG3_white_%282%29.jpg/640px-Genesis_G80_RG3_white_%282%29.jpg' },
        { id: 'gv80', name: '제네시스 GV80', price: 8700, cc: 2497, taxYear: 65, insurance: 200, efficiency: 8, maintenance: 25, icon: '🏔️✨', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Genesis_GV80_JX1_White_1.jpg/640px-Genesis_GV80_JX1_White_1.jpg' },
        { id: 'model3', name: '테슬라 모델 3', price: 6200, cc: 0, taxYear: 13, insurance: 180, efficiency: 18, maintenance: 5, icon: '🔋', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Tesla_Model_3_white_%282%29.jpg/640px-Tesla_Model_3_white_%282%29.jpg' },
        { id: 'eclass', name: '벤츠 E-Class', price: 8700, cc: 1999, taxYear: 52, insurance: 250, efficiency: 10, maintenance: 50, icon: '🌟', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Mercedes-Benz_E_220_d_Avantgarde_%28W_213%29_%E2%80%93_Frontansicht%2C_15._Mai_2016%2C_D%C3%BCsseldorf.jpg/640px-Mercedes-Benz_E_220_d_Avantgarde_%28W_213%29_%E2%80%93_Frontansicht%2C_15._Mai_2016%2C_D%C3%BCsseldorf.jpg' },
        { id: 'cayenne', name: '포르쉐 카이엔', price: 15200, cc: 2995, taxYear: 78, insurance: 350, efficiency: 7, maintenance: 80, icon: '🚀', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Porsche_Cayenne_S_%2892A%29_facelift_%E2%80%93_Frontansicht%2C_11._Oktober_2015%2C_D%C3%BCsseldorf.jpg/640px-Porsche_Cayenne_S_%2892A%29_facelift_%E2%80%93_Frontansicht%2C_11._Oktober_2015%2C_D%C3%BCsseldorf.jpg' },
        { id: 'ferrari', name: '페라리 F8', price: 40200, cc: 3902, taxYear: 101, insurance: 1000, efficiency: 5, maintenance: 300, icon: '🏎️', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Ferrari_F8_Tributo_Geneva_International_Motor_Show_2019_Le_Grand-Saconnex_%28GIMS0029%29.jpg/640px-Ferrari_F8_Tributo_Geneva_International_Motor_Show_2019_Le_Grand-Saconnex_%28GIMS0029%29.jpg' },
        { id: 'yacht', name: '럭셔리 요트 (350억)', price: 3500200, cc: 0, taxYear: 5000, insurance: 50000, efficiency: 0.1, maintenance: 50000, icon: '🛥️', img: '' },
        { id: 'helicopter', name: '에어버스 헬기 (500억)', price: 5000200, cc: 0, taxYear: 8000, insurance: 80000, efficiency: 0.1, maintenance: 80000, icon: '🚁', img: '' },
        { id: 'rocket', name: '스타십 (10조)', price: 1000000200, cc: 0, taxYear: 0, insurance: 1000000, efficiency: 0.001, maintenance: 5000000, icon: '🚀', img: '' },
        { id: 'earth', name: '지구 (The Earth)', price: 500000000200, cc: 0, taxYear: 0, insurance: 0, efficiency: 1, maintenance: 0, icon: '🌍', img: '' },
        { id: 'galaxy', name: '안드로메다 은하', price: 999999999999, cc: 0, taxYear: 0, insurance: 0, efficiency: 1, maintenance: 0, icon: '🌌', img: '' },
        { id: 'multiverse', name: '멀티버스 (평행우주)', price: 9999999999999, cc: 0, taxYear: 0, insurance: 0, efficiency: 1, maintenance: 0, icon: '♾️', img: '' }
    ];

    const CONSTANTS = { FUEL_PRICE: 1650, INTEREST_RATE: 0.055, MAINT_BASE_RATE: 35, PUBLIC_TRANS_COST: 125000 };
    let pushLevel = 0; let mileageMode = 'calc'; let currentBestCar = carData[0];
    let appState = { salary: 0, cash: 0, totalMonthly: 0, safetyLevel: '평가 대기중' };

    // Inputs
    const ageInput = document.getElementById('age'); const expInput = document.getElementById('experience');
    const salaryInput = document.getElementById('salary'); const cashInput = document.getElementById('cash');
    const instMonthsInput = document.getElementById('installment-months'); const dailyDistInput = document.getElementById('daily-distance');
    const daysWeekInput = document.getElementById('days-per-week'); const manualMileageInput = document.getElementById('manual-mileage');
    
    // UI elements
    const monitorIcon = document.getElementById('monitor-icon'); const monitorImg = document.getElementById('monitor-img');
    const monitorName = document.getElementById('monitor-car-name'); const monitorPrice = document.getElementById('car-price-display');
    const monitorMsg = document.getElementById('monitor-message'); const monitorBg = document.getElementById('monitor-bg');
    const safetyBadge = document.getElementById('safety-badge'); const calcMileageEl = document.getElementById('calculated-mileage');
    const totalCostEl = document.getElementById('total-monthly-cost'); 
    
    const revealArea = document.getElementById('reveal-area'); const btnRevealPush = document.getElementById('btn-reveal-push');
    const pushSlot = document.getElementById('push-slot');

    const bars = { installment: document.getElementById('bar-installment'), insurance: document.getElementById('bar-insurance'), tax: document.getElementById('bar-tax'), fuel: document.getElementById('bar-fuel'), maintenance: document.getElementById('bar-maintenance') };
    const vals = { installment: document.getElementById('val-installment'), insurance: document.getElementById('val-insurance'), tax: document.getElementById('val-tax'), fuel: document.getElementById('val-fuel'), maintenance: document.getElementById('val-maintenance') };

    const PUSH_MESSAGES = ["당신의 한계는 어디까지인가요?", "오... 조금 무리하시는데요?", "슬슬 카푸어 냄새가 납니다.", "제정신이 아니시군요!", "이젠 차가 아니어도 상관없나 보죠?", "우주로 가버릿!", "당신은 신입니까?", "존재의 이유를 찾아서...", "무한한 공간 저 너머로!", "차원을 넘어서는 중...", "해탈의 경지입니다."];

    // Functions
    function calculate() {
        const salary = Number(salaryInput.value) || 0;
        const cash = Number(cashInput.value) || 0;
        const instMonths = Number(instMonthsInput.value) || 0;
        const age = Number(ageInput.value) || 30;
        const exp = Number(expInput.value) || 3;
        
        appState.salary = salary; appState.cash = cash;

        let mileage = 0;
        if (mileageMode === 'calc') {
            const d = Number(dailyDistInput.value) || 0;
            const w = Number(daysWeekInput.value) || 0;
            mileage = Math.round(d * 2 * w * 4.345);
        } else {
            mileage = Number(manualMileageInput.value) || 0;
        }
        calcMileageEl.textContent = mileage.toLocaleString();

        const safeBudget = (salary * 0.5) + cash;
        const affordable = carData.filter(car => car.price <= safeBudget);
        let baseIdx = affordable.length > 0 ? carData.indexOf(affordable[affordable.length - 1]) : 0;
        
        let jump = pushLevel > 6 ? 6 + Math.floor((pushLevel - 6) / 3) : pushLevel;
        currentBestCar = carData[Math.min(carData.length - 1, baseIdx + jump)];

        updateUI(currentBestCar, salary, cash, mileage, instMonths, age, exp);
    }

    function updateUI(car, salary, cash, mileage, instMonths, age, exp) {
        monitorName.textContent = car.name;
        monitorPrice.textContent = car.price >= 100000000 ? `차량가: 약 ${(car.price / 100000000).toFixed(1)}조 원` : car.price >= 10000 ? `차량가: 약 ${(car.price / 10000).toFixed(1)}억 원` : `차량가: ${car.price.toLocaleString()}만원`;

        if (car.img) {
            monitorImg.src = car.img; monitorImg.classList.remove('hidden'); monitorIcon.classList.add('hidden');
            monitorImg.onerror = () => { monitorImg.classList.add('hidden'); monitorIcon.classList.remove('hidden'); monitorIcon.textContent = car.icon; };
        } else {
            monitorImg.classList.add('hidden'); monitorIcon.classList.remove('hidden'); monitorIcon.textContent = car.icon;
        }

        let level = 'safe'; let badge = '✅ 경제적 자유';
        if (car.price > 0) {
            const r = car.price / ((salary * 0.6) + cash + 1);
            if (r < 0.8) { level = 'safe'; badge = '✅ 안전'; }
            else if (r < 1.1) { level = 'warning'; badge = '⚠️ 주의'; }
            else if (r < 1.6) { level = 'danger'; badge = '🚫 위험'; }
            else { level = 'bankrupt'; badge = '💀 파산(카푸어)'; }
        }
        if (car.price > 1000000) { badge = '🌌 초월적 존재'; level = 'bankrupt'; }
        monitorBg.className = `monitor-section ${level}`; safetyBadge.textContent = badge;
        appState.safetyLevel = badge;
        monitorMsg.innerHTML = pushLevel > 0 ? `무리하기 <strong>${pushLevel}단계</strong> 진입!<br>${PUSH_MESSAGES[Math.min(pushLevel, PUSH_MESSAGES.length-1)]}` : `연봉 <strong>${salary.toLocaleString()}만원</strong> 기준,<br>현명한 소비의 정석입니다.`;

        let af = age < 21 ? 2.5 : age < 26 ? 1.8 : age < 30 ? 1.2 : age > 60 ? 1.3 : 1.0;
        let ef = exp == 0 ? 1.5 : exp < 3 ? 1.2 : exp >= 10 ? 0.7 : 1.0;

        let costs = { inst: 0, ins: 0, tax: 0, fuel: 0, maint: 0 };
        let det = { inst: '', ins: '', tax: '', fuel: '', maint: '' };
        
        if (car.price > 0) {
            const loan = Math.max(0, car.price - cash);
            if (loan > 0 && instMonths > 0) {
                const r = 0.055/12; const n = instMonths;
                costs.inst = (loan * r * Math.pow(1+r, n)) / (Math.pow(1+r, n)-1) * 10000;
                det.inst = `대출금: ${loan.toLocaleString()}만원 / ${n}개월`;
            } else { det.inst = instMonths === 0 ? "일시불 구매" : "전액 현금 구매"; }
            costs.ins = (car.insurance/12)*10000*af*ef; det.ins = `나이 계수: x${af.toFixed(1)}\n경력 계수: x${ef.toFixed(1)}`;
            costs.tax = (car.taxYear/12)*10000; det.tax = `연 세금: ${car.taxYear}만원 기준`;
            costs.fuel = car.efficiency > 0 ? (mileage/car.efficiency)*(car.price > 1000000 ? 300 : 1650) : 0; det.fuel = `연비: ${car.efficiency}km/L`;
            costs.maint = (car.maintenance*10000/12) + (mileage*35); det.maint = `정비: ${car.maintenance}만/년 + 거리비례`;
        } else if (car.id === 'public') { costs.maint = 125000; det.maint = "대중교통 월정액"; }

        const total = Object.values(costs).reduce((a, b) => a + b, 0);
        appState.totalMonthly = Math.round(total);
        totalCostEl.textContent = isNaN(total) ? "0" : Math.round(total).toLocaleString();

        const updateB = (key, val, d) => {
            const p = total > 0 ? (val/total)*100 : 0;
            bars[key].style.width = `${p}%`;
            vals[key].textContent = `${Math.round(val).toLocaleString()}원`;
            const row = bars[key].closest('.chart-row');
            let tt = row.querySelector('.chart-tooltip') || document.createElement('div');
            if (!row.querySelector('.chart-tooltip')) { tt.className = 'chart-tooltip'; row.appendChild(tt); }
            tt.textContent = d || '산출 근거 없음';
        };
        updateB('installment', costs.inst, det.inst); updateB('insurance', costs.ins, det.ins); updateB('tax', costs.tax, det.tax); updateB('fuel', costs.fuel, det.fuel); updateB('maintenance', costs.maint, det.maint);
    }

    function createPushContainer() {
        const div = document.createElement('div');
        div.id = 'push-container';
        div.className = 'push-container';
        div.innerHTML = `
            <div class="push-main-row">
                <button id="push-limit-btn" class="btn-push">
                    🔥 한 단계 더 무리하기 (<span id="push-count">${pushLevel}</span>)
                </button>
                <button id="push-reset-btn" class="btn-reset" title="초기화">🔄</button>
            </div>
            <p id="push-dynamic-msg" class="push-tip">${PUSH_MESSAGES[0]}</p>
        `;
        pushSlot.appendChild(div);

        // Bind events
        document.getElementById('push-limit-btn').addEventListener('click', () => {
            pushLevel++;
            document.getElementById('push-count').textContent = pushLevel;
            document.getElementById('push-dynamic-msg').textContent = PUSH_MESSAGES[Math.min(pushLevel, PUSH_MESSAGES.length-1)];
            calculate();
        });
        document.getElementById('push-reset-btn').addEventListener('click', () => {
            pushLevel = 0;
            document.getElementById('push-count').textContent = 0;
            document.getElementById('push-dynamic-msg').textContent = PUSH_MESSAGES[0];
            calculate();
        });
    }

    // Listeners
    [ageInput, expInput, salaryInput, cashInput, instMonthsInput, dailyDistInput, daysWeekInput, manualMileageInput].forEach(el => {
        el.addEventListener('input', calculate); el.addEventListener('change', calculate);
    });

    instMonthsInput.addEventListener('change', () => {
        const isFull = instMonthsInput.value === "0";
        cashInput.disabled = isFull;
        if (isFull) cashInput.value = "";
        calculate();
    });

    btnRevealPush.addEventListener('click', () => {
        revealArea.classList.add('hidden');
        createPushContainer();
    });

    document.getElementById('mode-calc').addEventListener('click', () => {
        mileageMode = 'calc';
        document.getElementById('mode-calc').classList.add('active');
        document.getElementById('mode-direct').classList.remove('active');
        document.getElementById('calc-mileage-group').classList.remove('hidden');
        document.getElementById('direct-mileage-group').classList.add('hidden');
        calculate();
    });
    document.getElementById('mode-direct').addEventListener('click', () => {
        mileageMode = 'direct';
        document.getElementById('mode-direct').classList.add('active');
        document.getElementById('mode-calc').classList.remove('active');
        document.getElementById('calc-mileage-group').classList.add('hidden');
        document.getElementById('direct-mileage-group').classList.remove('hidden');
        calculate();
    });

    // --- AI Consulting Logic ---
    const aiFab = document.getElementById('ai-fab');
    const aiModal = document.getElementById('ai-modal');
    const aiInput = document.getElementById('ai-input');
    const btnSendAi = document.getElementById('btn-send-ai');
    const aiChatBody = document.getElementById('ai-chat-body');
    const btnCloseAi = document.getElementById('btn-close-ai');

    let isAiThinking = false;
    let consultationCount = 0; // 상담 횟수 카운트

    aiFab.addEventListener('click', () => aiModal.classList.toggle('hidden'));
    btnCloseAi.addEventListener('click', () => aiModal.classList.add('hidden'));

    async function sendToAi() {
        const query = aiInput.value.trim();
        if (!query || isAiThinking) return;

        // 1회 제한 체크
        if (consultationCount >= 1) {
            alert("정밀 상담은 1회만 가능합니다. 다시 분석하시려면 페이지를 새로고침 해주세요!");
            return;
        }

        addMessage('user', query);
        aiInput.value = "";
        isAiThinking = true;

        console.log("AI 상담 요청 시작...", { query });

        const typingDiv = addTypingIndicator();

        try {
            const contextPrompt = `
                너는 자동차 구매 및 금융 전문 컨설턴트야. 사용자의 현재 재정 상태를 바탕으로 아주 현실적이고 때로는 따끔하게(팩폭) 조언을 해줘야 해.
                상담은 1회성으로 끝날 것이므로, 단 한 번의 답변에 모든 핵심적인 조언을 담아줘.
                [사용자 정보]
                - 나이: ${ageInput.value}세, 운전경력: ${expInput.options[expInput.selectedIndex].text}
                - 연봉: ${appState.salary}만원, 현재 보유 현금: ${appState.cash}만원
                - 현재 보고 있는 차: ${currentBestCar.name} (차량가: ${currentBestCar.price}만원)
                - 할부 설정: ${instMonthsInput.options[instMonthsInput.selectedIndex].text}
                - 예상 월 유지비: ${appState.totalMonthly.toLocaleString()}원
                - 현재 안전 등급: ${appState.safetyLevel}

                사용자의 질문에 대해 위 데이터를 바탕으로 통계적, 금융적으로 분석해서 한국어로 답변해줘.
            `;

            const API_URL = "/api/chat";

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: contextPrompt, query: query })
            });

            const data = await response.json();
            typingDiv.remove();

            if (data.error) {
                console.error("AI 에러 응답:", data.error);
                addMessage('bot', `상담 중 오류가 발생했어요: ${data.error}`);
            } else {
                console.log("AI 응답 성공!");
                addMessage('bot', data.answer);
                consultationCount++; // 카운트 증가
                
                // 입력창 및 버튼 비활성화
                aiInput.disabled = true;
                aiInput.placeholder = "상담이 완료되었습니다.";
                btnSendAi.disabled = true;
                btnSendAi.style.opacity = "0.5";
                
                addMessage('bot', "💡 정밀 진단이 완료되었습니다. 분석 결과를 바탕으로 현명한 선택 하시길 바랍니다!");
            }
        } catch (err) {
            console.error("네트워크 에러:", err);
            typingDiv.remove();
            addMessage('bot', "서버와의 연결이 원활하지 않습니다. 잠시 후 다시 시도해 주세요.");
        } finally {
            isAiThinking = false;
        }
    }

    function addMessage(sender, text) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `ai-msg ${sender}`;
        msgDiv.textContent = text;
        aiChatBody.appendChild(msgDiv);
        aiChatBody.scrollTop = aiChatBody.scrollHeight;
    }

    function addTypingIndicator() {
        const div = document.createElement('div');
        div.className = 'ai-msg bot typing-container';
        div.innerHTML = `<div class="typing"><span></span><span></span><span></span></div>`;
        aiChatBody.appendChild(div);
        aiChatBody.scrollTop = aiChatBody.scrollHeight;
        return div;
    }

    btnSendAi.addEventListener('click', sendToAi);
    aiInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendToAi(); });

    calculate();
});
