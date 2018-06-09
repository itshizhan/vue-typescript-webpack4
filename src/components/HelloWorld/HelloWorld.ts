/**
 * HelloWorld
 */

import Vue from 'components/base'
import { Component, Prop } from 'vue-property-decorator'
import template from './HelloWorld.vue'

@Component({
    name: 'HelloWorld',
    mixins: [template]
})
export default class HelloWorld extends Vue {
    //#region datas ******************************/
    //#endregion datas ***************************/

    //#region props ******************************/
    @Prop({ default: 'World' })
    protected name: string
    //#endregion props ***************************/

    //#region vuex *******************************/
    //#endregion vuex ****************************/

    //#region computed ***************************/
    //#endregion computed ************************/

    //#region watchers ***************************/
    //#endregion watchers ************************/

    //#region life cycle *************************/
    protected created() {
        console.log('fff', process.env.NODE_ENV)
    }
    //#endregion life cycle **********************/

    //#region hooks ******************************/
    //#endregion hooks ***************************/

    //#region event handler **********************/
    //#endregion event handler *******************/

    //#region methods ****************************/
    //#endregion methods *************************/
}
