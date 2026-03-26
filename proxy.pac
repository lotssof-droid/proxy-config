function FindProxyForURL(url, host) {
    // Проверяем, совпадает ли адрес с 2ip.ru, gemini.google.com или rutracker.org (включая их поддомены)
    if (shExpMatch(host, "*2ip.ru") || host === "2ip.ru" ||
        shExpMatch(host, "*gemini.google.com") || host === "gemini.google.com" ||
        shExpMatch(host, "*rutracker.org") || host === "rutracker.org") {
        
        // ВАЖНО: Замените эти цифры на IP-адрес и порт вашего реального прокси!
        return "PROXY 10.241.30.30:3128"; 
    }
    
    // Для всех остальных сайтов используем обычный интернет (напрямую)
    return "DIRECT";
}
