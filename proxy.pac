function FindProxyForURL(url, host) {
    // Проверяем, совпадает ли адреса сайтов (включая их поддомены)
    if (shExpMatch(host, "*2ip.ru") || host === "2ip.ru" ||
        shExpMatch(host, "*gemini.google.com") || host === "gemini.google.com" ||
        shExpMatch(host, "*rutracker.org") || host === "rutracker.org" ||
        shExpMatch(host, "*myip.com") || host === "myip.com" ||
        shExpMatch(host, "*freepik.com") || host === "freepik.com" ||
        shExpMatch(host, "*chatgpt.com") || host === "chatgpt.com" ||
        shExpMatch(host, "*ideogram.ai") || host === "ideogram.ai" ||
        shExpMatch(host, "*banana-ai.org") || host === "banana-ai.org" ||
        shExpMatch(host, "*abacus.ai") || host === "abacus.ai" ||
        shExpMatch(host, "*grok.com") || host === "grok.com" ||
        shExpMatch(host, "*lupaupscaler.com") || host === "lupaupscaler.com") {
        
        // прописываем прокси сервер
        return "PROXY 10.241.30.30:3128"; 
    }
    
    // Для всех остальных сайтов используем обычный интернет (напрямую)
    return "DIRECT";
}
