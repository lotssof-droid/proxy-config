function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    var proxy = "PROXY 10.241.30.30:3128";

    // Домен и любые его поддомены
    var proxyDomains = [
        "2ip.ru",
        "gemini.google.com",
        "rutracker.org",
        "myip.com",
        "freepik.com",
        "chatgpt.com",
        "ideogram.ai",
        "banana-ai.org",
        "abacus.ai",
        "grok.com",
        "openai.com",
        "amnezia.org",
        "oaiusercontent.com",
        "pixmira.ai",
        "jetbrains.com",
        "lupaupscaler.com"
    ];

    for (var i = 0; i < proxyDomains.length; i++) {
        var domain = proxyDomains[i];

        if (host === domain || shExpMatch(host, "*." + domain)) {
            return proxy;
        }
    }

    return "DIRECT";
}
