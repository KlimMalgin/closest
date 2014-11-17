/**
 * Created by KlimMalgin on 17.11.2014.
 */
'use strict';

function getClosestParent (el, targetClass, iter, stop) {
    iter = iter || 1;
    stop = stop || 100;
    return el.classList && el.classList.contains(targetClass) ? el :
        iter < stop && !!el.parentNode ?
            getClosestParent(el.parentNode, targetClass, ++iter, stop) : null;
}

module.exports = {
    closest: function () {
        return !!getClosestParent.apply({}, arguments);
    },
    isClosest: getClosestParent
};

