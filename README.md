# gulp-webpack-biolerplate

Для запуска в режиме разработки - `npm run dev`
Для продакшена - `npm run build`

### ленивая загрузка
Для загрузки изображений и background используется плагин lazsizes.
https://github.com/aFarkas/lazysizes
https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/unveilhooks

Чтобы это работало нужно добавить изображениям вместо `src` атрибут `data-src` и класс `lazyload`.
Пример css для background:
    
    .footer.lazyloaded {
     background: url(branch.png);
     }

