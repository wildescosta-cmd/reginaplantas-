function switchTab(event, plantName, tabType) {
    const card = document.querySelector(`.plant-card[data-plant="${plantName}"]`);
    card.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    card.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    event.currentTarget.classList.add('active');
    card.querySelector(`.tab-content.id-${tabType}`).classList.add('active');
}
document.getElementById('btn-verificar').addEventListener('click', function() {
    const planta = document.getElementById('select-planta').value;
    const solo = document.getElementById('select-solo').value;
    const resultBox = document.getElementById('resultado-simulador');
    if (!planta || !solo) {
        resultBox.className = "result-box danger";
        resultBox.innerHTML = "Selecione a planta e o solo.";
        resultBox.classList.remove('hidden');
        return;
    }
    let msg = ""; let cls = "";
    if (solo === "humido") { msg = "Solo ideal! Não regue hoje."; cls = "success"; }
    else if (solo === "encharcado") { msg = "Muito molhado! Pare de regar."; cls = "danger"; }
    else if (solo === "seco") {
        if (planta === "balsamo") { msg = "Bálsamo seco. Rega moderada necessária."; cls = "warning"; }
        else if (planta === "manjericao") { msg = "Manjericão precisa de água urgente!"; cls = "danger"; }
        else if (planta === "cidreira") { msg = "Erva-cidreira seca. Regue um pouco."; cls = "warning"; }
    }
    resultBox.className = `result-box ${cls}`;
    resultBox.innerHTML = msg;
    resultBox.classList.remove('hidden');
});
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    this.reset();
    alert(`Obrigado, ${nome}! Mensagem enviada (Simulação).`);
})