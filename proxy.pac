function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    var proxy = "PROXY 10.241.30.30:3128";

    // Всё, что заканчивается на .ru, идёт напрямую, минуя прокси
    if (shExpMatch(host, "*.ru")) {
        return "DIRECT";
    }

    // Всё остальное — через прокси
    return proxy;
}
