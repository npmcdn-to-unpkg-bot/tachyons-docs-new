
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment'
import createHistory from 'history/lib/createBrowserHistory'
import useQueries from 'history/lib/useQueries'

export default canUseDOM ? useQueries(createHistory)() : {}
