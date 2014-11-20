/**
 * Created by KlimMalgin on 17.11.2014.
 */
'use strict';

/**
 * Восходящий поиск по DOM-дереву относительно элемента el. Ищет ближайшего родителя с классом targetClass
 * @param el элемент с которого начинается поиск
 * @param targetClass класс по которому определяется искомый элемент
 * @param iter счетчик количества пройденных элементов
 * @param stop максимально допустимая глубина поиска (по умолчанию === 100)
 * @returns {DOM Element|null}
 */
function getClosestParent (el, targetClass, iter, stop) {
    iter = iter || 1;
    stop = stop || 100;
    return el.classList && el.classList.contains(targetClass) ? el :
        iter < stop && !!el.parentNode ?
            getClosestParent(el.parentNode, targetClass, ++iter, stop) : null;
}


(function (root, f) {
    (typeof define === 'function' && define.amd) ?
        define([], function () { root.closest = f(); }) :
        typeof module !== 'undefined' ?
            module.exports = f() :
            root.closest = f();
}(this, function () {
    return getClosestParent;
}));
