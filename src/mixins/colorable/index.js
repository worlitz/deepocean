/* eslint-disable require-jsdoc */
import Vue from 'vue'

function colorType(color) {
    const colors = color.trim().split(' ')

    if (colors.every((color)=> color.match(/^(#|var\(--|(rgb|hsl)a?\()/))) {
        return 'not css color!'
    }
    if (colors.length === 1) return 'color'
    return 'colors'
}

export default Vue.extend({
    name: 'colorable',
    props: {
        color: {
            type: String,
        },
    },
    methods: {
        // 设置背景颜色
        setBgColor() {

        },
        // 设置文本颜色
        setTextColor() {

        },
        // 设置渐变颜色
        setLinearColor() {

        },
    }
})
