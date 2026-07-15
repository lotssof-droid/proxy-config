function FindProxyForURL(url, host) {
    var proxy = "PROXY 10.241.30.30:3128";

    host = host.toLowerCase();

    // Точные домены и все их поддомены
    var proxyDomains = [
        "2ip.ru",
        "gemini.google.com",
        "myip.com",
        "rutracker.org"
    ];

    for (var i = 0; i < proxyDomains.length; i++) {
        var domain = proxyDomains[i];

        // example.com и *.example.com
        if (host === domain || dnsDomainIs(host, "." + domain)) {
            return proxy;
        }
    }

    // Все остальные ресурсы — без прокси
    return "DIRECT";
}
