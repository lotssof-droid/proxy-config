function FindProxyForURL(url, host) {
    var proxy = "PROXY 10.241.30.30:3128";

   // Проверка выходного IP
    if (host === "2ip.ru" || dnsDomainIs(host, ".2ip.ru")) {
        return proxy;
    }

    // Gemini
    var geminiDomains = [
        "gemini.google.com",
        "aistudio.google.com",
        "generativelanguage.googleapis.com",
        "proactivebackend-pa.googleapis.com",
        "alkalimining-pa.googleapis.com"
    ];

    // ChatGPT / OpenAI
    var chatgptDomains = [
        "chatgpt.com",
        "chat.openai.com",
        "auth.openai.com",
        "openai.com",
        "oaistatic.com",
        "oaiusercontent.com"
    ];

    // Midjourney
    var midjourneyDomains = [
        "midjourney.com"
    ];

    var proxyDomains = geminiDomains
        .concat(chatgptDomains)
        .concat(midjourneyDomains);

    for (var i = 0; i < proxyDomains.length; i++) {
        var domain = proxyDomains[i];

        if (host === domain || dnsDomainIs(host, "." + domain)) {
            return proxy;
        }
    }

    // Весь остальной трафик — напрямую
    return "DIRECT";
}
