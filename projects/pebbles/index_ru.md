---
title: Процедурная генерация гальки на мобильном устройстве
tl;dr: |
    Процедурная генерация 3D гальки на мобильных устройствах - их формы, узоры поверхности и другие характеристики (например, цвет подповерхностного рассеяния). Результат является случайным, но детерминированным. После нескольких секунд генерации получившийся камешек можно поворачивать с помощью сенсорного экрана. Эта сцена Unity интегрирована в приложение React Native для iOS.

    Примерно четверть поколения использует классические подходы, ориентированные только на процессор. Результатом является пара 2D-текстур, содержащих поля расстояний. Остальное делается непосредственно в шейдерах, в основном путем добавления детерминированного шума во все возможные «закоулки».

    Распределение усилий:

    - ≈½ – на достижение непосредственно видимого визуального результата
    - ≈½ – «за кадром»: интеграция в React Native, оптимизация для мобильных устройств, устранение ошибок Unity, воспроизводимых только непосредственно на телефонах, мобильный ввод и внутренние инструменты
---

Процедурная генерация 3D-камешков на мобильных устройствах: их формы, узоры поверхности и другие характеристики – например, цвет подповерхностного рассеяния. Результат случаен, но – при равном значении seed – одинаков на любом устройстве. После пары секунд на генерацию полученную гальку можно вращать пальцем. Эта Unity-сцена встраивается в *React Native* приложение на iOS.

Распределение усилий:

- около половины было потрачено на визуальный результат (непосредственно на то, как это выглядит)
- около половины было потрачено «за кулисами»: интеграция в *React Native*; оптимизация для мобильных устройств; обход багов в Unity, которые появляются только на телефонах; мобильный ввод; внутренние инструменты

## реализация

Примерно четверть процесса генерации выполняется с использованием «классического» подхода, в результате чего получается пара 2D-текстур, содержащих поля расстояний. Оставшиеся ¾ генерируются непосредственно в шейдере путем добавления детерминированного шума везде, где только возможно.

«Бледные» узоры на поверхности реализуются не с помощью UV-развёртки, а рассчитываются непосредственно в трехмерных координатах точек поверхности. В частности, для получения низкоконтрастного (едва различимого) базового шума используется трипланарная проекция.

Контрастные и заметные узоры – полосы и пятна – реализованы через 2D SDF (поле расстояния со знаком), но модифицированное (подробнее об этом позже) для нужд проекта.

- Двумерное поле с полосами проецируется непосредственно с применением шума к его параметрам.
- Двумерное поле с пятнами повторяется много раз, при этом к его параметрам при каждом повторении применяется шум.

Чтобы использовать двумерное поле так, как если бы оно было трехмерным – и без искажений – мы прибегли к измерению расстояний в поле от центров/середин вместо границ. То есть, было бы более точным придумать новое название: CDF (поле центрального расстояния). (Ограничение подхода заключается в том, что для этого должен существовать этот центр / середина, но именно большинство узоров, типичных для гальки, можно создать, добавив шум в фигуры, у которых есть центр / середина: круги и линии.)

## наибольший подводный камень

Две похожие ошибки в узлах *Shader Graph* (другими словами, в библиотеке функций для шейдеров), которые появляются только при запуске на телефоне. В обоих случаях поиск определенного узла, приводящего к неожиданному результату, требовал многократного ожидания медленного процесса создания проекта и его запуска на телефоне. Чтобы сократить эту трату времени, мы создали пользовательский интерфейс отладки, позволяющий отключать отдельные шейдеры непосредственно на телефоне, чтобы ждать меньше перезапусков.

(На это было бы потрачено примерно 30 часов, если бы не возможность заняться чем-то еще во время ожидания. Примерно в половине случаев было нецелесообразно параллельно выполнять другую работу над этим проектом, поэтому я просто занимался домашними делами и, таким образом, не учитывал это время при выставлении счета.)

## итог

Проект был приостановлен в пользу более важных приоритетов основного проекта. О последнем я знаю только, что это приложение для iOS (созданное с использованием *React Native*), которое чем-то напоминает социальную сеть – скорее всего, не являясь таковой в буквальном смысле. Это связано с тем, что этот компонент предназначен только для создания случайных аватаров, что полностью исключает необходимость знать какой–либо контекст - и то, что я не был в курсе, избавило нас от хлопот с подписанием NDA.