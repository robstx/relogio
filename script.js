// Definindo a função que atualiza o relógio
function showTimer() {
    // Criando uma instância da classe Date para obter a data e hora atuais
    var date = new Date();

    // Obtendo a hora, minutos e segundos da instância date
    var h = date.getHours(); // Hora (0 - 23)
    var m = date.getMinutes(); // Minutos (0 - 59)
    var s = date.getSeconds(); // Segundos (0 - 59)

    // Determinando se é AM ou PM
    var session = "AM";
    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    // Formatando para sempre terem dois dígitos (exemplo: 08:05:03)
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    // Criando a string do horário formatado (exemplo: 08:05:03 AM)
    var time = h + ":" + m + ":" + s + " " + session;

    // Atualizando o conteúdo do elemento com ID "MyClockDisplay" para mostrar o horário
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    // Atualizando o relógio a cada segundo usando setTimeout
    setTimeout(showTimer, 1000);
}

// Iniciando a função showTimer para exibir o horário assim que a página for carregada
showTimer();
