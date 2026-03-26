function FindProxyForURL(url, host) {
    // Проверяем, совпадает ли адреса сайтов (включая их поддомены)
    if (shExpMatch(host, "*2ip.ru") || host === "2ip.ru" ||
        shExpMatch(host, "*gemini.google.com") || host === "gemini.google.com" ||
        shExpMatch(host, "*rutracker.org") || host === "rutracker.org" ||
        shExpMatch(host, "*myip.com") || host === "myip.com") {
        
        // прописываем прокси сервер
        return "PROXY 10.241.30.30:3128"; 
    }
    
    // Для всех остальных сайтов используем обычный интернет (напрямую)
    return "DIRECT";
}
