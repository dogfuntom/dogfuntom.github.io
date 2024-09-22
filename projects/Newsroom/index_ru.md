---
title: Виртуальная новостная студия
---

Пользователь вводит текст (новость) и выбирает диктора: фотореалистичную девушку (модель MetaHuman) или лягушку Пепе (3D-модель). Фон - обычная телестудия. Приложение генерирует видео, на котором этот текст произносится вслух. Рендеринг в видео позволяет использовать более высокие настройки графики, чем те, которые может выполнять компьютер пользователя в режиме реального времени.

Видео с результатами, полученными примерно в середине разработки: <https://www.youtube.com/@avatarasoftware4509>

Казалось бы, *Movie Render Queue in Runtime* предоставляет все необходимое для рендеринга видео не в реальном времени. К сожалению, на практике в ней были ошибки и ограничения, несовместимые с нашим проектом. Например, во время выполнения не было способа задать длину результирующего видео. Вот почему нам пришлось исправить ошибки и дополнить исходный код *Unreal Engine* (точнее, исходный код подсистемы *Movie Render Queue*, даже если на практике это различие едва ли существует в IDE или при сборке).

Текст преобразуется в речь с помощью встроенных функций *Windows TTS* (text-to-speech). Затем этот звук анализируется с помощью технологии *Oculus Lipsync* для получения данных о движениях лица говорящего человека. На основе этих данных создается анимация синхронизации движений губ для 3D-модели. Случайные движения, моргание и другие невербальные движения также смешиваются с анимацией для создания более реалистичного вида.

Мы опубликовали наши первые сборки на itch.io и образцы сгенерированного видео на YouTube. Однако реакция потенциальных пользователей была не особенно обнадеживающей. В результате мы были вынуждены остановить проект.