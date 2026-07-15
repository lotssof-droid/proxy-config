function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    // Ваш HTTP/HTTPS proxy
    var proxy = "PROXY 10.241.30.30:3128";

    // Проверка IP
    if (host == "2ip.ru" || shExpMatch(host, "*.2ip.ru")) {
        return proxy;
    }

    // Google Gemini
    if (host == "gemini.google.com" ||
        host == "aistudio.google.com" ||
        host == "generativelanguage.googleapis.com" ||
        shExpMatch(host, "*.gemini.google.com")) {
        return proxy;
    }

    // ChatGPT / OpenAI
    if (host == "chatgpt.com" ||
        host == "chat.openai.com" ||
        host == "auth.openai.com" ||
        host == "openai.com" ||
        host == "oaistatic.com" ||
        host == "oaiusercontent.com" ||
        shExpMatch(host, "*.chatgpt.com") ||
        shExpMatch(host, "*.openai.com") ||
        shExpMatch(host, "*.oaistatic.com") ||
        shExpMatch(host, "*.oaiusercontent.com")) {
        return proxy;
    }

    // Midjourney
    if (host == "midjourney.com" ||
        shExpMatch(host, "*.midjourney.com")) {
        return proxy;
    }

    // Остальные сайты — напрямую
    return "DIRECT";
}
