function FindProxyForURL(url, host) {
    // Укажите адрес, для которого нужен прокси
    if (shExpMatch(host, "2ip.ru") || host === "example.com") {
        return "PROXY 10.241.30.30:3128"; // Замените на IP и порт вашего прокси
    }
    // Для всех остальных сайтов использовать прямое подключение
    return "DIRECT";
}
