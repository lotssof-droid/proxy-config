function FindProxyForURL(url, host) {
    // Проверяем, совпадает ли адрес с 2ip.ru или gemini.google.com (включая их поддомены)
    if (shExpMatch(host, "*2ip.ru") || host === "2ip.ru" ||
        shExpMatch(host, "*gemini.google.com") || host === "gemini.google.com") {
        
        // ВАЖНО: Замените эти цифры на IP-адрес и порт вашего реального прокси!
        return "PROXY 10.241.30.30:3128"; 
    }
    
    // Для всех остальных сайтов используем обычный интернет (напрямую)
    return "DIRECT";
}
