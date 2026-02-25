document.addEventListener('DOMContentLoaded', () => {
    console.log("App Loaded");

    // --- Data: Car List ---
    const carData = [
        { id: 'walk', name: '튼튼한 두 다리', price: 0, cc: 0, taxYear: 0, insurance: 0, efficiency: 0, maintenance: 0, icon: '🚶', img: '' },
        { id: 'public', name: '대중교통 / 자전거', price: 0, cc: 0, taxYear: 0, insurance: 0, efficiency: 0, maintenance: 12, icon: '🚌', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Bus_icon.svg/640px-Bus_icon.svg.png' },
        { id: 'casper', name: '캐스퍼/모닝 (경차)', price: 1600, cc: 998, taxYear: 10, insurance: 70, efficiency: 14, maintenance: 5, icon: '🐣', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Hyundai_Casper_AX1_White_1.jpg/640px-Hyundai_Casper_AX1_White_1.jpg' },
        { id: 'avante', name: '아반떼 (준중형)', price: 2400, cc: 1598, taxYear: 29, insurance: 90, efficiency: 15, maintenance: 7, icon: '🚙', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Hyundai_Avante_CN7_white_%281%29.jpg/640px-Hyundai_Avante_CN7_white_%281%29.jpg' },
        { id: 'k5', name: 'K5 / 쏘나타 (중형)', price: 3200, cc: 1999, taxYear: 52, insurance: 110, efficiency: 12, maintenance: 10, icon: '🚘', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Kia_K5_Hybrid_DL3_White_%281%29_%28cropped%29.jpg/640px-Kia_K5_Hybrid_DL3_White_%281%29_%28cropped%29.jpg' },
        { id: 'sorento', name: '쏘렌토 (중형 SUV)', price: 4200, cc: 2151, taxYear: 56, insurance: 120, efficiency: 11, maintenance: 12, icon: '🏔️', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Kia_Sorento_MQ4_White_1.jpg/640px-Kia_Sorento_MQ4_White_1.jpg' },
        { id: 'grandeur', name: '그랜저 (준대형)', price: 4500, cc: 2497, taxYear: 65, insurance: 130, efficiency: 10, maintenance: 13, icon: '💎', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Hyundai_Grandeur_GN7_Black_1.jpg/640px-Hyundai_Grandeur_GN7_Black_1.jpg' },
        { id: 'palisade', name: '팰리세이드 (대형 SUV)', price: 5500, cc: 3778, taxYear: 98, insurance: 150, efficiency: 8, maintenance: 15, icon: '🏰', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Hyundai_Palisade_LX2_White_1.jpg/640px-Hyundai_Palisade_LX2_White_1.jpg' },
        { id: 'g80', name: '제네시스 G80', price: 6500, cc: 2497, taxYear: 65, insurance: 170, efficiency: 9, maintenance: 20, icon: '✨', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Genesis_G80_RG3_white_%282%29.jpg/640px-Genesis_G80_RG3_white_%282%29.jpg' },
        { id: 'gv80', name: '제네시스 GV80', price: 8500, cc: 2497, taxYear: 65, insurance: 200, efficiency: 8, maintenance: 25, icon: '🏔️✨', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Genesis_GV80_JX1_White_1.jpg/640px-Genesis_GV80_JX1_White_1.jpg' },
        { id: 'model3', name: '테슬라 모델 3', price: 6000, cc: 0, taxYear: 13, insurance: 180, efficiency: 18, maintenance: 5, icon: '🔋', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Tesla_Model_3_white_%282%29.jpg/640px-Tesla_Model_3_white_%282%29.jpg' },
        { id: 'eclass', name: '벤츠 E-Class', price: 8000, cc: 1999, taxYear: 52, insurance: 250, efficiency: 10, maintenance: 50, icon: '🌟', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Mercedes-Benz_E_220_d_Avantgarde_%28W_213%29_%E2%80%93_Frontansicht%2C_15._Mai_2016%2C_D%C3%BCsseldorf.jpg/640px-Mercedes-Benz_E_220_d_Avantgarde_%28W_213%29_%E2%80%93_Frontansicht%2C_15._Mai_2016%2C_D%C3%BCsseldorf.jpg' },
        { id: 'cayenne', name: '포르쉐 카이엔', price: 14000, cc: 2995, taxYear: 78, insurance: 350, efficiency: 7, maintenance: 80, icon: '🚀', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Porsche_Cayenne_S_%2892A%29_facelift_%E2%80%93_Frontansicht%2C_11._Oktober_2015%2C_D%C3%BCsseldorf.jpg/640px-Porsche_Cayenne_S_%2892A%29_facelift_%E2%80%93_Frontansicht%2C_11._Oktober_2015%2C_D%C3%BCsseldorf.jpg' },
        { id: 'ferrari', name: '페라리 F8', price: 40000, cc: 3902, taxYear: 101, insurance: 1000, efficiency: 5, maintenance: 300, icon: '🏎️', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Ferrari_F8_Tributo_Geneva_International_Motor_Show_2019_Le_Grand-Saconnex_%28GIMS0029%29.jpg/640px-Ferrari_F8_Tributo_Geneva_International_Motor_Show_2019_Le_Grand-Saconnex_%28GIMS0029%29.jpg' }
    ];

    const CONSTANTS = {
        FUEL_PRICE: 1650, 
        INTEREST_RATE: 0.055, 
        INSTALLMENT_MONTHS: 60,
        MAINT_BASE_RATE: 35, 
        PUBLIC_TRANS_COST: 125000 
    };

    // --- DOM Elements ---
    const salaryInput = document.getElementById('salary');
    const cashInput = document.getElementById('cash');
    const dailyDistInput = document.getElementById('daily-distance');
    const daysWeekInput = document.getElementById('days-per-week');

    const monitorIcon = document.getElementById('monitor-icon');
    const monitorImg = document.getElementById('monitor-img'); // New Image Element
    const monitorName = document.getElementById('monitor-car-name');
    const monitorMsg = document.getElementById('monitor-message');
    
    const calcMileageEl = document.getElementById('calculated-mileage');
    const totalCostEl = document.getElementById('total-monthly-cost');
    
    const bars = {
        installment: document.getElementById('bar-installment'),
        insurance: document.getElementById('bar-insurance'),
        tax: document.getElementById('bar-tax'),
        fuel: document.getElementById('bar-fuel'),
        maintenance: document.getElementById('bar-maintenance')
    };
    
    const vals = {
        installment: document.getElementById('val-installment'),
        insurance: document.getElementById('val-insurance'),
        tax: document.getElementById('val-tax'),
        fuel: document.getElementById('val-fuel'),
        maintenance: document.getElementById('val-maintenance')
    };

    // --- Logic ---
    function calculate() {
        const salary = Number(salaryInput.value) || 0;
        const cash = Number(cashInput.value) || 0;
        const dailyDist = Number(dailyDistInput.value) || 0;
        const daysWeek = Number(daysWeekInput.value) || 0;

        // 2. Mileage Calculation
        const monthlyMileage = Math.round(dailyDist * 2 * daysWeek * 4.345);
        calcMileageEl.textContent = monthlyMileage.toLocaleString();

        // 3. Recommendation Logic
        const safeBudget = (salary * 0.5) + cash;
        
        let bestCar = carData[0]; // Default: Walk

        if (salary === 0 && cash === 0) {
            bestCar = carData[0];
        } else if (salary < 2800 && cash < 800) {
            bestCar = carData[1]; // Public Transport
        } else {
            const affordableCars = carData.filter(car => car.price <= safeBudget);
            if (affordableCars.length > 0) {
                bestCar = affordableCars[affordableCars.length - 1];
            } else {
                bestCar = carData[1];
            }
        }

        updateUI(bestCar, salary, cash, monthlyMileage);
    }

    function updateUI(car, salary, cash, mileage) {
        monitorName.textContent = car.name;
        
        // Image vs Icon Logic
        if (car.img) {
            monitorImg.src = car.img;
            monitorImg.classList.remove('hidden');
            monitorIcon.classList.add('hidden');
            
            // Error handling: if image fails, show icon
            monitorImg.onerror = () => {
                monitorImg.classList.add('hidden');
                monitorIcon.classList.remove('hidden');
                monitorIcon.textContent = car.icon;
            };
        } else {
            monitorImg.classList.add('hidden');
            monitorIcon.classList.remove('hidden');
            monitorIcon.textContent = car.icon;
        }

        // Message context
        if (car.id === 'walk') {
             monitorMsg.innerHTML = `현재 재정 상태에서는 <strong>튼튼한 두 다리</strong>가 가장 안전합니다.`;
        } else if (car.id === 'public') {
             monitorMsg.innerHTML = `연봉 <strong>${salary.toLocaleString()}만원</strong>에는 대중교통이 최고의 재테크입니다.`;
        } else if (car.price > (salary * 0.8) + cash) {
             monitorMsg.innerHTML = `조금 무리하면 <strong>${car.name}</strong>도 가능하지만, 카푸어의 위험이 있습니다!`;
        } else {
             monitorMsg.innerHTML = `연봉 <strong>${salary.toLocaleString()}만원</strong> 기준, 가장 <strong>현명한 선택</strong>입니다.`;
        }

        // Calculate detailed monthly costs
        let costs = { inst: 0, ins: 0, tax: 0, fuel: 0, maint: 0 };
        
        if (car.id === 'public') {
            costs.maint = CONSTANTS.PUBLIC_TRANS_COST;
        } else if (car.price > 0) {
            // A. Installment (PMT Formula)
            const loan = Math.max(0, car.price - cash);
            if (loan > 0) {
                const r = CONSTANTS.INTEREST_RATE / 12;
                const n = CONSTANTS.INSTALLMENT_MONTHS;
                costs.inst = (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) * 10000;
            }

            // B. Insurance (Annual to Monthly)
            costs.ins = (car.insurance / 12) * 10000;

            // C. Tax (Annual to Monthly)
            costs.tax = (car.taxYear / 12) * 10000;

            // D. Fuel (Distance / Efficiency * Price)
            if (car.efficiency > 0) {
                const energyPrice = car.id === 'model3' ? 300 : CONSTANTS.FUEL_PRICE;
                costs.fuel = (mileage / car.efficiency) * energyPrice;
            }

            // E. Maintenance (Base + Mileage dependent)
            costs.maint = (car.maintenance * 10000 / 12) + (mileage * CONSTANTS.MAINT_BASE_RATE);
        }

        const total = Object.values(costs).reduce((a, b) => a + b, 0);
        totalCostEl.textContent = Math.round(total).toLocaleString();

        const updateBar = (key, val) => {
            const percent = total > 0 ? (val / total) * 100 : 0;
            bars[key].style.width = `${percent}%`;
            vals[key].textContent = val > 0 ? `${Math.round(val).toLocaleString()}원` : '0원';
        };

        updateBar('installment', costs.inst);
        updateBar('insurance', costs.ins);
        updateBar('tax', costs.tax);
        updateBar('fuel', costs.fuel);
        updateBar('maintenance', costs.maint);
    }


    // --- Listeners ---
    [salaryInput, cashInput, dailyDistInput, daysWeekInput].forEach(el => {
        el.addEventListener('input', calculate);
        el.addEventListener('keyup', calculate); 
        el.addEventListener('change', calculate); 
    });
    
    // Share
    document.getElementById('share-btn').addEventListener('click', () => {
        const text = `내 연봉에는 '${monitorName.textContent}'가 딱이라는데?
월 예상 유지비: ${totalCostEl.textContent}원`;
        if (navigator.share) {
            navigator.share({ title: '카뮬레이터', text: text, url: window.location.href });
        } else {
            alert('결과를 복사했습니다! (실제 공유 기능은 모바일에서 최적화됩니다)');
        }
    });

    // Initial Run
    calculate();
});
