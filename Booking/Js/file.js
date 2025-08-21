function(element, inputDate) {
    const startDate = new Date(inputDate);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 5);

    const startStr = startDate.toISOString().split("T")[0];
    const endStr = endDate.toISOString().split("T")[0];

    // Funksiya ay tapmaq üçün
    const getMonthTitle = () => document.querySelector('[data-testid="searchbox-datepicker-calendar"] h3')?.innerText;
    const nextBtn = document.querySelector('button[aria-label="Next month"]');

    const scrollToMonth = (targetDate) => {
        const targetYear = targetDate.getFullYear();
        const targetMonth = targetDate.toLocaleString("en-US", { month: "long" });
        let attempts = 0;
        while (getMonthTitle() && !(getMonthTitle().includes(targetMonth) && getMonthTitle().includes(targetYear)) && attempts < 12) {
            nextBtn.click();
            attempts++;
        }
    };

   
    scrollToMonth(startDate);
    const startEl = document.querySelector(`span[data-date="${startStr}"]`);
    if (startEl) startEl.click();

    
    setTimeout(() => {
        scrollToMonth(endDate);
        const endEl = document.querySelector(`span[data-date="${endStr}"]`);
        if (endEl) endEl.click();
    }, 300);

    return `Selected range: ${startStr} → ${endStr}`;
}
