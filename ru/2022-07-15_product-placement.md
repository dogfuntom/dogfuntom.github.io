---
title: Виртуальный мерчандайзинг Under Armour
---

Внутренний инструмент на React для Under Armour, позволяющий распланировать, на каких вешалках и полках расположить какую одежду.
Он же помогает сотрудникам конкретного магазина быстрее (благодаря наглядности) понять, какое расположение товаров от них требуется.

Мой вклад: 3D компонент для React, работающий на Babylon.js.
Он берёт на входе модели, из которых состоит магазин, координаты, куда можно что-то повесить, модели, которые можно повесить,
и список пар номер_координаты-номер_модели, обозначающий, что где висит.

На выходе:

- Сцена с моделями на нужных местах, простым освещением, возможностью вращать камеру.
- Можно нажать на модель предмета одежды в сцене, тогда окружающий UI покажет информацию об этом товаре.

На это ушло 14 часов.
