let t = new Array(9);

const bot = () => {
    let id = Math.floor(Math.random() * 9);
    t[id] ? bot() : move(id, 'ai');
}

const checkEnd = () => {
    if (t[0] == 'bot' && t[1] == 'bot' && t[2] == 'bot' || t[0] == 'player' && t[1] == 'player' && t[2] == 'player') return true;
    if (t[3] == 'bot' && t[4] == 'bot' && t[5] == 'bot' || t[3] == 'player' && t[4] == 'player' && t[5] == 'player') return true;
    if (t[6] == 'bot' && t[7] == 'bot' && t[8] == 'bot' || t[6] == 'player' && t[7] == 'player' && t[8] == 'player') return true;
    if (t[0] == 'bot' && t[3] == 'bot' && t[6] == 'bot' || t[0] == 'player' && t[3] == 'player' && t[6] == 'player') return true;
    if (t[1] == 'bot' && t[4] == 'bot' && t[7] == 'bot' || t[1] == 'player' && t[4] == 'player' && t[7] == 'player') return true;
    if (t[2] == 'bot' && t[5] == 'bot' && t[8] == 'bot' || t[2] == 'player' && t[5] == 'player' && t[8] == 'player') return true;
    if (t[0] == 'bot' && t[4] == 'bot' && t[8] == 'bot' || t[0] == 'player' && t[4] == 'player' && t[8] == 'player') return true;
    if (t[2] == 'bot' && t[4] == 'bot' && t[6] == 'bot' || t[2] == 'player' && t[4] == 'player' && t[6] == 'player') return true;
    if (t[0] && t[1] && t[2] && t[3] && t[4] && t[5] && t[6] && t[7] && t[8]) return true;
}

const move = (id, role) => {
    if (t[id]) return false;
    t[id] = role;
    document.getElementById(id).className = 'cell ' + role;
    !checkEnd() ? (role == 'player') ? bot() : null : reset()
}

const reset = () => {
    alert("Игра окончена!");
    location.reload();
}