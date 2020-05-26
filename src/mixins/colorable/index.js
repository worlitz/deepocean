/* eslint-disable require-jsdoc */
import Vue from 'vue'

function colorType(color) {
    const colors = color.split(' ')

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
        direction: {
            type: String,
            default: top,
        },
    },
    methods: {
        setBgColor(color, vnode) {
            const status = colorType(color)

            if (status === 'color') {
                vnode.style = {
                    ...vnode.style,
                    'background-color': `${color}`,
                    'border-color': `${color}`,
                }
            } else if (status === 'colors') {
                if (direction) {
                    vnode.style = {
                        ...vnode.style,
                        'background-color': `linear-gradint(${direction}
                            , ${color.split(' ')})`,
                        'border-color': `${color.split(' ')[0]}`,
                    }
                }
            }
        },
    },
})
