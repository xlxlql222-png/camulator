document.addEventListener('DOMContentLoaded', () => {
    console.log("App Loaded");

    // --- Data: Car List ---
    const carData = [
        { id: 'walk', name: '튼튼한 두 다리', price: 0, cc: 0, taxYear: 0, insurance: 0, efficiency: 0, maintenance: 0, icon: '🚶' },
        { id: 'public', name: '대중교통 / 자전거', price: 0, cc: 0, taxYear: 0, insurance: 0, efficiency: 0, maintenance: 10, icon: '🚌' },
        { id: 'morning', name: '모닝/레이 (경차)', price: 1600, cc: 998, taxYear: 10, insurance: 70, efficiency: 14, maintenance: 5, icon: '🐣' },
        { id: 'avante', name: '아반떼 (준중형)', price: 2600, cc: 1598, taxYear: 29, insurance: 90, efficiency: 13, maintenance: 7, icon: '🚙' },
        { id: 'sonata', name: '쏘나타 (중형)', price: 3300, cc: 1999, taxYear: 52, insurance: 110, efficiency: 11, maintenance: 10, icon: '🚘' },
        { id: 'grandeur', name: '그랜저 (준대형)', price: 4500, cc: 2497, taxYear: 65, insurance: 130, efficiency: 10, maintenance: 13, icon: '💎' },
        { id: 'genesis', name: '제네시스 G80', price: 7500, cc: 2497, taxYear: 65, insurance: 180, efficiency: 8, maintenance: 20, icon: '✨' },
        { id: 'benz', name: '벤츠 E-Class', price: 9000, cc: 1999, taxYear: 52, insurance: 250, efficiency: 10, maintenance: 50, icon: '🌟' },
        { id: 'porsche', name: '포르쉐 카이엔', price: 15000, cc: 2995, taxYear: 78, insurance: 350, efficiency: 6, maintenance: 100, icon: '🚀' }
    ];

    const CONSTANTS = {
        FUEL_PRICE: 1700, 
        INTEREST_RATE: 0.06, 
        INSTALLMENT_MONTHS: 60
    };

    // --- DOM Elements ---
    const salaryInput = document.getElementById('salary');
    const cashInput = document.getElementById('cash');
    const dailyDistInput = document.getElementById('daily-distance');
    const daysWeekInput = document.getElementById('days-per-week');

    const monitorIcon = document.getElementById('monitor-icon');
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
        // 1. Get Inputs safely
        const salary = Number(salaryInput.value); // If empty, 0
        const cash = Number(cashInput.value);
        const dailyDist = Number(dailyDistInput.value);
        const daysWeek = Number(daysWeekInput.value);

        // 2. Mileage
        const monthlyMileage = Math.round(dailyDist * 2 * daysWeek * 4.345);
        calcMileageEl.textContent = monthlyMileage.toLocaleString();

        // 3. Recommendation
        // Budget Formula: (AnnualSalary * 0.7) + Cash
        const safeBudget = (salary * 0.7) + cash;
        
        let bestCar = carData[0]; // Walk

        // Basic Rules
        if (salary === 0 && cash === 0) {
            bestCar = carData[0];
        } else if (salary < 2400 && cash < 500) {
            bestCar = carData[1]; // Public
        } else {
            // Find expensive car that fits budget
            for (let i = carData.length - 1; i >= 0; i--) {
                if (carData[i].price <= safeBudget) {
                    bestCar = carData[i];
                    break;
                }
            }
        }

        updateUI(bestCar, salary, cash, monthlyMileage);
    }

    function updateUI(car, salary, cash, mileage) {
        // A. Update Monitor
        monitorIcon.textContent = car.icon;
        monitorName.textContent = car.name;
        
        // Dynamic Message
        if (car.id === 'walk') {
             monitorMsg.innerHTML = `아직은 <strong>튼튼한 두 다리</strong>가 최고의 이동수단입니다!<br>시드머니를 모아볼까요?`;
        } else if (car.id === 'public') {
             monitorMsg.innerHTML = `대중교통이 가장 <strong>경제적인 선택</strong>입니다.<br>차량 구매는 조금 더 신중하게!`;
        } else {
             monitorMsg.innerHTML = `연봉 <strong>${salary.toLocaleString()}만원</strong> 기준,<br>이 차가 딱 적당해 보입니다!`;
        }

        // B. Calculate Costs
        let costs = { inst: 0, ins: 0, tax: 0, fuel: 0, maint: 0 };
        
        if (car.price > 0 || car.id === 'public') {
            if (car.id === 'public') {
                costs.maint = 100000; // Fixed public transport cost
            } else {
                // Installment
                const loan = Math.max(0, car.price - cash);
                if (loan > 0) {
                    const r = CONSTANTS.INTEREST_RATE / 12;
                    const n = CONSTANTS.INSTALLMENT_MONTHS;
                    costs.inst = (loan * r * Math.pow(1+r, n) / (Math.pow(1+r, n) - 1)) * 10000;
                }
                
                // Monthly costs
                costs.ins = (car.insurance / 12) * 10000;
                costs.tax = (car.taxYear / 12) * 10000;
                costs.fuel = (mileage / car.efficiency) * CONSTANTS.FUEL_PRICE;
                costs.maint = (car.maintenance * 10000) + (mileage * 40);
            }
        }

        // C. Update Charts
        const total = costs.inst + costs.ins + costs.tax + costs.fuel + costs.maint;
        totalCostEl.textContent = Math.round(total).toLocaleString();

        const safeTotal = total > 0 ? total : 1;

        const updateBar = (key, val) => {
            const percent = (val / safeTotal) * 100;
            // Visual Minimum 5% if val > 0
            const visPercent = val > 0 ? Math.max(percent, 5) : 0;
            
            bars[key].style.width = `${visPercent}%`;
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
        el.addEventListener('keyup', calculate); // Extra safety
        el.addEventListener('change', calculate); // For select
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
