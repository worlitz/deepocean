import colorable from '../../mixins/colorable.js'
import extend from '../../tools/extend.js'

const basis = extend(
    colorable,
)


export default basis.extend({
    name: 'waveProgress',
    props: {
        backgroundColor: {
            type: String,
            default: null,
        },
    },
})
