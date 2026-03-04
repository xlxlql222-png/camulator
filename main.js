document.addEventListener('DOMContentLoaded', () => {
    console.log("App Loaded v7.1 - Hyper Realistic Recommendation");

    const carData = [
        { id: 'walk', name: '튼튼한 두 다리', price: 0, cc: 0, taxYear: 0, insurance: 0, efficiency: 0, maintenance: 0, icon: '🚶', img: '', isImport: false },
        { id: 'public', name: '대중교통 / 자전거', price: 0, cc: 0, taxYear: 0, insurance: 0, efficiency: 0, maintenance: 12, icon: '🚌', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Bus_icon.svg/640px-Bus_icon.svg.png', isImport: false },
        { id: 'casper', name: '캐스퍼/모닝 (경차)', price: 1800, cc: 998, taxYear: 10, insurance: 70, efficiency: 14, maintenance: 10, icon: '🐣', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Hyundai_Casper_AX1_White_1.jpg/640px-Hyundai_Casper_AX1_White_1.jpg', isImport: false },
        { id: 'avante', name: '아반떼 (준중형)', price: 2600, cc: 1598, taxYear: 29, insurance: 90, efficiency: 15, maintenance: 15, icon: '🚙', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Hyundai_Avante_CN7_white_%281%29.jpg/640px-Hyundai_Avante_CN7_white_%281%29.jpg', isImport: false },
        { id: 'k5', name: 'K5 / 쏘나타 (중형)', price: 3400, cc: 1999, taxYear: 52, insurance: 110, efficiency: 12, maintenance: 20, icon: '🚘', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Kia_K5_Hybrid_DL3_White_%281%29_%28cropped%29.jpg/640px-Kia_K5_Hybrid_DL3_White_%281%29_%28cropped%29.jpg', isImport: false },
        { id: 'sorento', name: '쏘렌토 (중형 SUV)', price: 4400, cc: 2151, taxYear: 56, insurance: 120, efficiency: 11, maintenance: 25, icon: '🏔️', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Kia_Sorento_MQ4_White_1.jpg/640px-Kia_Sorento_MQ4_White_1.jpg', isImport: false },
        { id: 'grandeur', name: '그랜저 (준대형)', price: 4700, cc: 2497, taxYear: 65, insurance: 130, efficiency: 10, maintenance: 30, icon: '💎', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Hyundai_Grandeur_GN7_Black_1.jpg/640px-Hyundai_Grandeur_GN7_Black_1.jpg', isImport: false },
        { id: 'palisade', name: '팰리세이드 (대형 SUV)', price: 5700, cc: 3778, taxYear: 98, insurance: 150, efficiency: 8, maintenance: 35, icon: '🏰', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Hyundai_Palisade_LX2_White_1.jpg/640px-Hyundai_Palisade_LX2_White_1.jpg', isImport: false },
        { id: 'g80', name: '제네시스 G80', price: 6700, cc: 2497, taxYear: 65, insurance: 170, efficiency: 9, maintenance: 50, icon: '✨', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Genesis_G80_RG3_white_%282%29.jpg/640px-Genesis_G80_RG3_white_%282%29.jpg', isImport: false },
        { id: 'gv80', name: '제네시스 GV80', price: 8700, cc: 2497, taxYear: 65, insurance: 200, efficiency: 8, maintenance: 60, icon: '🏔️✨', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Genesis_GV80_JX1_White_1.jpg/640px-Genesis_GV80_JX1_White_1.jpg', isImport: false },
        { id: 'model3', name: '테슬라 모델 3', price: 6200, cc: 0, taxYear: 13, insurance: 180, efficiency: 18, maintenance: 30, icon: '🔋', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Tesla_Model_3_white_%282%29.jpg/640px-Tesla_Model_3_white_%282%29.jpg', isImport: true },
        { id: 'eclass', name: '벤츠 E-Class', price: 8700, cc: 1999, taxYear: 52, insurance: 250, efficiency: 10, maintenance: 120, icon: '🌟', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Mercedes-Benz_E_220_d_Avantgarde_%28W_213%29_%E2%80%93_Frontansicht%2C_15._Mai_2016%2C_D%C3%BCsseldorf.jpg/640px-Mercedes-Benz_E_220_d_Avantgarde_%28W_213%29_%E2%80%93_Frontansicht%2C_15._Mai_2016%2C_D%C3%BCsseldorf.jpg', isImport: true },
        { id: 'cayenne', name: '포르쉐 카이엔', price: 15200, cc: 2995, taxYear: 78, insurance: 350, efficiency: 7, maintenance: 250, icon: '🚀', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Porsche_Cayenne_S_%2892A%29_facelift_%E2%80%93_Frontansicht%2C_11._Oktober_2015%2C_D%C3%BCsseldorf.jpg/640px-Porsche_Cayenne_S_%2892A%29_facelift_%E2%80%93_Frontansicht%2C_11._Oktober_2015%2C_D%C3%BCsseldorf.jpg', isImport: true },
        { id: 'ferrari', name: '페라리 F8', price: 40200, cc: 3902, taxYear: 101, insurance: 1000, efficiency: 5, maintenance: 800, icon: '🏎️', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Ferrari_F8_Tributo_Geneva_International_Motor_Show_2019_Le_Grand-Saconnex_%28GIMS0029%29.jpg/640px-Ferrari_F8_Tributo_Geneva_International_Motor_Show_2019_Le_Grand-Saconnex_%28GIMS0029%29.jpg', isImport: true }
    ];

    const CONSTANTS = { FUEL_PRICE: 1650, IMPORT_FUEL_SURCHARGE: 200, INTEREST_RATE: 0.055 };
    let pushLevel = 0; let mileageMode = 'calc'; let currentBestCar = carData[0];
    let appState = { salary: 0, cash: 0, monthlyBudget: 500000, totalMonthly: 0, safetyLevel: '평가 대기중' };

    // Inputs
    const ageInput = document.getElementById('age'); 
    const expInput = document.getElementById('experience');
    const salaryInput = document.getElementById('salary'); 
    const cashInput = document.getElementById('cash');
    const budgetInput = document.getElementById('monthly-budget');
    const instMonthsInput = document.getElementById('installment-months'); 
    const dailyDistInput = document.getElementById('daily-distance');
    const daysWeekInput = document.getElementById('days-per-week'); 
    const manualMileageInput = document.getElementById('manual-mileage');
    
    // UI elements
    const monitorIcon = document.getElementById('monitor-icon'); 
    const monitorImg = document.getElementById('monitor-img');
    const monitorName = document.getElementById('monitor-car-name'); 
    const monitorPrice = document.getElementById('car-price-display');
    const monitorMsg = document.getElementById('monitor-message'); 
    const monitorBg = document.getElementById('monitor-bg');
    const safetyBadge = document.getElementById('safety-badge'); 
    const calcMileageEl = document.getElementById('calculated-mileage');
    const totalCostEl = document.getElementById('total-monthly-cost'); 
    const displayBudgetEl = document.getElementById('display-monthly-budget');
    const budgetDiffEl = document.getElementById('budget-diff');
    const upfrontCostEl = document.getElementById('total-upfront-cost');
    
    const revealArea = document.getElementById('reveal-area'); 
    const btnRevealPush = document.getElementById('btn-reveal-push');
    const pushSlot = document.getElementById('push-slot');

    const bars = { installment: document.getElementById('bar-installment'), insurance: document.getElementById('bar-insurance'), tax: document.getElementById('bar-tax'), fuel: document.getElementById('bar-fuel'), maintenance: document.getElementById('bar-maintenance') };
    const vals = { installment: document.getElementById('val-installment'), insurance: document.getElementById('val-insurance'), tax: document.getElementById('val-tax'), fuel: document.getElementById('val-fuel'), maintenance: document.getElementById('val-maintenance') };

    const PUSH_MESSAGES = ["당신의 한계는 어디까지인가요?", "오... 조금 무리하시는데요?", "슬슬 카푸어 냄새가 납니다.", "제정신이 아니시군요!", "이젠 차가 아니어도 상관없나 보죠?", "우주로 가버릿!"];

    function calculate() {
        const salary = Number(salaryInput.value) || 0;
        const cash = Number(cashInput.value) || 0;
        const monthlyBudget = (Number(budgetInput.value) || 0) * 10000;
        const instMonths = Number(instMonthsInput.value) || 0;
        const age = Number(ageInput.value) || 30;
        const exp = Number(expInput.value) || 3;
        
        appState.salary = salary; appState.cash = cash; appState.monthlyBudget = monthlyBudget;

        let mileage = 0;
        if (mileageMode === 'calc') {
            const d = Number(dailyDistInput.value) || 0;
            const w = Number(daysWeekInput.value) || 0;
            mileage = Math.round(d * 2 * w * 4.345);
        } else {
            mileage = Number(manualMileageInput.value) || 0;
        }
        calcMileageEl.textContent = mileage.toLocaleString();

        // Enhanced Recommendation Logic
        let bestIdx = 0;
        for (let i = 0; i < carData.length; i++) {
            const car = carData[i];
            const costs = getEstimatedCosts(car, cash, instMonths, age, exp, mileage);
            const total = Object.values(costs).reduce((a, b) => a + b, 0);
            
            // 1. Can buy? (Cash >= Price OR can afford installment)
            const canAffordPurchase = (cash >= car.price) || (instMonths > 0 && costs.inst <= (monthlyBudget * 0.7));
            
            // 2. Can maintain? (Basic costs <= budget)
            // Even with 0 installment, basic costs (insurance, tax, fuel, maint) must fit budget.
            const basicMaintenance = costs.ins + costs.tax + costs.fuel + costs.maint;
            const canMaintain = basicMaintenance <= monthlyBudget;

            if (canAffordPurchase && canMaintain || car.price === 0) {
                bestIdx = i;
            } else {
                break;
            }
        }
        
        let jump = pushLevel;
        currentBestCar = carData[Math.min(carData.length - 1, bestIdx + jump)];

        updateUI(currentBestCar, salary, cash, mileage, instMonths, age, exp, monthlyBudget);
    }

    function getEstimatedCosts(car, cash, instMonths, age, exp, mileage) {
        let costs = { inst: 0, ins: 0, tax: 0, fuel: 0, maint: 0 };
        if (car.price === 0) {
            if (car.id === 'public') costs.maint = 125000;
            return costs;
        }

        let af = age < 21 ? 2.5 : age < 26 ? 1.8 : age < 30 ? 1.2 : age > 60 ? 1.3 : 1.0;
        let ef = exp == 0 ? 1.5 : exp < 3 ? 1.2 : exp >= 10 ? 0.7 : 1.0;

        const loan = Math.max(0, car.price - cash);
        if (loan > 0 && instMonths > 0) {
            const r = 0.055/12; const n = instMonths;
            costs.inst = (loan * r * Math.pow(1+r, n)) / (Math.pow(1+r, n)-1) * 10000;
        }
        
        // Import car penalty: Higher insurance, higher maintenance, premium fuel
        const importFactor = car.isImport ? 1.5 : 1.0;
        costs.ins = (car.insurance/12)*10000*af*ef * importFactor;
        costs.tax = (car.taxYear/12)*10000;
        
        const fuelPrice = car.isImport ? 1850 : 1650; // Premium fuel for imports
        costs.fuel = car.efficiency > 0 ? (mileage/car.efficiency)*fuelPrice : 0;
        
        // Maintenance: Base + Distance factor (Higher for imports)
        costs.maint = (car.maintenance*10000/12) + (mileage * (car.isImport ? 60 : 35));

        return costs;
    }

    function updateUI(car, salary, cash, mileage, instMonths, age, exp, monthlyBudget) {
        monitorName.textContent = car.name;
        monitorPrice.textContent = `차량가: ${car.price.toLocaleString()}만원`;

        if (car.img) {
            monitorImg.src = car.img; monitorImg.classList.remove('hidden'); monitorIcon.classList.add('hidden');
            monitorImg.onerror = () => { monitorImg.classList.add('hidden'); monitorIcon.classList.remove('hidden'); monitorIcon.textContent = car.icon; };
        } else {
            monitorImg.classList.add('hidden'); monitorIcon.classList.remove('hidden'); monitorIcon.textContent = car.icon;
        }

        const costs = getEstimatedCosts(car, cash, instMonths, age, exp, mileage);
        const total = Object.values(costs).reduce((a, b) => a + b, 0);
        appState.totalMonthly = Math.round(total);
        totalCostEl.textContent = Math.round(total).toLocaleString();

        // Upfront cost calculation (Cash used for purchase)
        const upfront = Math.min(car.price, cash);
        upfrontCostEl.textContent = upfront.toLocaleString();

        // Budget Balance UI
        displayBudgetEl.textContent = monthlyBudget.toLocaleString() + "원";
        const diff = monthlyBudget - total;
        if (diff >= 0) {
            budgetDiffEl.textContent = `+${Math.round(diff).toLocaleString()}원 여유`;
            budgetDiffEl.className = "balance-val plus";
        } else {
            budgetDiffEl.textContent = `${Math.round(diff).toLocaleString()}원 초과(적자)`;
            budgetDiffEl.className = "balance-val minus";
        }

        let level = 'safe'; let badge = '✅ 경제적 자유';
        const r = total / (monthlyBudget + 1);
        if (r < 0.8) { level = 'safe'; badge = '✅ 안전'; }
        else if (r <= 1.0) { level = 'warning'; badge = '⚠️ 주의'; }
        else if (r < 1.3) { level = 'danger'; badge = '🚫 위험'; }
        else { level = 'bankrupt'; badge = '💀 파산(카푸어)'; }
        
        monitorBg.className = `monitor-section ${level}`; safetyBadge.textContent = badge;
        appState.safetyLevel = badge;
        
        let msg = pushLevel > 0 ? `무리하기 <strong>${pushLevel}단계</strong> 진입!<br>${PUSH_MESSAGES[Math.min(pushLevel, PUSH_MESSAGES.length-1)]}` : `월 <strong>${(monthlyBudget/10000).toLocaleString()}만원</strong> 예산 내에서<br>최적의 선택입니다.`;
        if (car.isImport && total > monthlyBudget) msg += "<br><small>⚠️ 수입차는 일시불로 사도 유지비가 무시무시합니다!</small>";
        monitorMsg.innerHTML = msg;

        const updateB = (key, val) => {
            const p = total > 0 ? (val/total)*100 : 0;
            bars[key].style.width = `${p}%`;
            vals[key].textContent = `${Math.round(val).toLocaleString()}원`;
        };
        updateB('installment', costs.inst); updateB('insurance', costs.ins); updateB('tax', costs.tax); updateB('fuel', costs.fuel); updateB('maintenance', costs.maint);
    }

    function createPushContainer() {
        if (document.getElementById('push-container')) return;
        const div = document.createElement('div');
        div.id = 'push-container';
        div.className = 'push-container';
        div.innerHTML = `
            <div class="push-main-row">
                <button id="push-limit-btn" class="btn-push">🔥 한 단계 더 무리하기 (<span id="push-count">${pushLevel}</span>)</button>
                <button id="push-reset-btn" class="btn-reset" title="초기화">🔄</button>
            </div>
            <p id="push-dynamic-msg" class="push-tip">${PUSH_MESSAGES[0]}</p>
        `;
        pushSlot.appendChild(div);
        document.getElementById('push-limit-btn').addEventListener('click', () => { pushLevel++; document.getElementById('push-count').textContent = pushLevel; calculate(); });
        document.getElementById('push-reset-btn').addEventListener('click', () => { pushLevel = 0; document.getElementById('push-count').textContent = 0; calculate(); });
    }

    // Listeners
    [ageInput, expInput, salaryInput, cashInput, budgetInput, instMonthsInput, dailyDistInput, daysWeekInput, manualMileageInput].forEach(el => {
        el.addEventListener('input', calculate); el.addEventListener('change', calculate);
    });

    btnRevealPush.addEventListener('click', () => { revealArea.classList.add('hidden'); createPushContainer(); });

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
    const btnFetchData = document.getElementById('btn-fetch-data');

    let isAiThinking = false;
    let consultationCount = 0;

    aiFab.addEventListener('click', () => {
        aiModal.classList.remove('hidden');
        aiModal.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (!aiModal.classList.contains('hidden')) { 
            aiChatBody.scrollTop = aiChatBody.scrollHeight; 
            aiInput.focus();
        }
    });
    btnCloseAi.addEventListener('click', () => aiModal.classList.add('hidden'));

    btnFetchData.addEventListener('click', () => {
        const summary = `나이: ${ageInput.value}세 / 연봉: ${appState.salary}만원 / 일시불가능액: ${appState.cash}만원 / 월 충당가능액: ${(appState.monthlyBudget/10000)}만원 / 관심차종: ${currentBestCar.name} (${currentBestCar.price}만원) / 예상 월유지비: ${appState.totalMonthly.toLocaleString()}원 / 안전등급: ${appState.safetyLevel}\n\n이 조건일 때 이 차를 유지하는 게 현실적으로 가능할지 분석해줘.`;
        aiInput.value = summary;
        aiInput.focus();
    });

    async function sendToAi() {
        const query = aiInput.value.trim();
        if (!query || isAiThinking) return;
        if (consultationCount >= 1) { alert("정밀 상담은 1회만 가능합니다. 페이지를 새로고침 해주세요!"); return; }

        addMessage('user', query);
        aiInput.value = "";
        isAiThinking = true;
        const typingDiv = addTypingIndicator();

        try {
            const userData = {
                age: ageInput.value, salary: appState.salary, cash: appState.cash, monthlyBudget: appState.monthlyBudget,
                currentCar: currentBestCar.name, carPrice: currentBestCar.price, installment: instMonthsInput.options[instMonthsInput.selectedIndex].text,
                monthlyCost: appState.totalMonthly, safetyLevel: appState.safetyLevel, isImport: currentBestCar.isImport
            };
            const response = await fetch("/api/chat", {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userData, query })
            });
            const data = await response.json();
            typingDiv.remove();
            if (data.error) { addMessage('bot', `오류: ${data.error}`); }
            else {
                addMessage('bot', data.answer);
                consultationCount++;
                aiInput.disabled = true; aiInput.placeholder = "상담 완료";
                btnSendAi.disabled = true; btnSendAi.style.opacity = "0.5";
                addMessage('bot', "✨ 상담 마지막에 적힌 요약을 복사하여 개인 AI에게 직접 마저 상담을 받아보세요!");
            }
        } catch (err) { typingDiv.remove(); addMessage('bot', "연결 실패. 다시 시도해 주세요."); }
        finally { isAiThinking = false; }
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
