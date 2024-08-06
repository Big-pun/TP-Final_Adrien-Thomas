function getNextFirstMonday() {
    const today = new Date();
    const nextMonth = today.getMonth() + 1;
    const year = nextMonth > 11 ? today.getFullYear() + 1 : today.getFullYear();
    const month = nextMonth % 12;

    // Date du premier jour du mois suivant
    let firstDayOfNextMonth = new Date(year, month, 1);

    // Trouver le premier lundi du mois suivant
    while (firstDayOfNextMonth.getDay() !== 1) {
        firstDayOfNextMonth.setDate(firstDayOfNextMonth.getDate() + 1);
    }

    return firstDayOfNextMonth;
}
    const firstDayOfNextMonth = getNextFirstMonday();
    document.getElementById('nextIntroDate').innerText = firstDayOfNextMonth.toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
