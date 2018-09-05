import { runService } from './service'
import { ReduxService } from './react/store'
import { VuexService } from './vue/store'
import { renderReact } from './react/app'
import { renderVue } from './vue/app'

// ______________________________________________________
//
// @ Run Services

runService(ReduxService, VuexService)
runService(VuexService, ReduxService)

// ______________________________________________________
//
// @ Render Views

renderReact()
renderVue()
