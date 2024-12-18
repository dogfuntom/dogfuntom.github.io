---
dl:
    role: разработка всего, что выходит за рамки непосредственно механизма рекомендаций по видео
---

Пользователи делятся с нами историей просмотров YouTube и получают рекомендации по просмотру видео (что смотрели пользователи с похожими историями), а также получают соответствующее количество наших монет.

## прозрачность

Чтобы доказать, что наше расширение для видео-рекомендаций обеспечивает конфиденциальность и заслуживает доверия, мы сделали [исходники доступными](https://en.wikipedia.org/wiki/Source-available_software) ([без лицензии](https://choosealicense.com/no-permission/)). Кроме того, оно [не требует компиляции](https://modern-web.dev/guides/going-buildless/getting-started/) – нет обфускации, нет минимизации, нет сборки модулей. Аналогично, смарт-контракт [удобен для аудита](#blockchain-smart-contract-fungible-token).

## реализация

(В диаграмме есть ссылки – но они работают только при прямом просмотре (<kbd><kbd>right-click</kbd>⇒<kbd><samp>Open Image in New Tab</samp></kbd></kbd> или что угодно в этом духе) – и он в целом удобнее.)

@import(_includes/reee.puml)

Пропущено на диаграмме:

- миниатюры для видео-рекомендаций запрашиваются на стороне клиента с самого YouTube
- минимальное внутреннее настольное приложение для просмотра таблицы с текущей статистикой (.NET Windows Desktop Runtime – конкретнее, WPF)

## фронтенд (расширение)

Сначала мы хотели создать форк [youtube-watchmarker](https://github.com/sniklaus/youtube-watchmarker), который “запрашивает” у YouTube историю просмотров. Вскоре мы поняли, что для наших случаев использования лучше “запрашивать” у браузера.

### blockchain, smart contract, fungible token

Сначала мы создали [совершенно обычную «валюту» ERC20/BEP20][token], опубликовав в смарт-цепочке BNB Binance совершенно простой смарт-контракт, написанный в Solidity.

К счастью, еще до того, как мы начали его использовать, мы поняли, что существует потенциал для простой и в то же время масштабной оптимизации затрат – одна крупная операция обходится радикально дешевле, чем множество мелких. Итак, мы добавили наши собственные методы – оболочки, которые принимают массивы вместо отдельных значений и вызывают встроенные методы в цикле.

Работая над этим, мы пришли к выводу, что для обеспечения прозрачности простой импорт лучше, чем подход без зависимостей. После этого изменения наши [изменения будут единичными и очевидными](https://vscode.blockscan.com/56/0x41664b1316fceac8578801bd6eb130ef0cfbec69), а остальное сделает [заслуживающая доверия третья сторона](https://docs.openzeppelin.com/contracts/4.x/erc20) с удобным распределением кода по файлам и папкам.

## бэкенд

### MetaMask-кошелёк

В то время стандарты кошельков находились в зачаточном состоянии, а сами кошельки едва ли пытались помочь в их внедрении. Таким образом, было невозможно поддерживать выбор кошельков без того, чтобы половина кода не состояла из костылей и хаков. В любом случае, только MetaMask пользовался популярностью и имел развитую официальную документацию.

В результате мы [использовали eth_signTypedData_v4](https://github.com/dogfuntom/REEE/tree/2f0ae9ebea3e416d53d8ad0c91d7e0ce380bd071/metaMaskPage).

## итог

Мы опубликовали бесплатную альфа-версию расширения и попытались продвигать ее в соответствующих группах/хэштегах/разделах социальных сетей. Конечно, вышеупомянутые вознаграждения были частью нашей маркетинговой стратегии. После того, как мы получили разочаровывающее количество пользователей, нам пришлось закрыть проект.

[token]: https://bscscan.com/token/0xb802e1d6bd40c1976d11d0cd462c04122ba33672#code
