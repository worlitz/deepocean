/* eslint-disable require-jsdoc */

export default function extend(...extentions) {
    return Vue.extend({
        mixins: extentions,
    })
}
