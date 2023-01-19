import Home from "../Pages/Home";
import Library from "../Pages/Library";
import Settings from "../Pages/Settings";
import Subscriptions from "../Pages/Subscription";
import Trending from "../Pages/Trending";
import History from "../Pages/History";
import config from "../Config";
import Shorts from "~/Pages/Shorts";
import WatchLater from "~/Pages/WatchLater";
import Yours from "~/Pages/Yours";
import Liked from "~/Pages/Liked";
import Dairy from "~/Pages/Dairy";
import Help from "~/Pages/Help";
import Report from "~/Pages/Report";
import SearchResult from "~/Pages/SearchResults";
const publicRoutes=[
    {path:config.routes.home, component: Home},
    {path:config.routes.library, component: Library},
    {path:config.routes.setting, component: Settings},
    {path:config.routes.subscription, component: Subscriptions },
    {path:config.routes.trending, component: Trending},
    {path:config.routes.history, component: History},  
    {path:config.routes.shorts, component: Shorts},  
    {path:config.routes.plan, component: WatchLater},  
    {path:config.routes.yours, component: Yours},  
    {path:config.routes.liked, component: Liked},  
    {path:config.routes.settings, component: Settings},  
    {path:config.routes.dairy, component: Dairy},
    {path:config.routes.help, component:Help},  
    {path:config.routes.report, component: Report},   
    {path:config.routes.searchresult, component: SearchResult},    

]
const privateRoutes=[

]
export {publicRoutes,privateRoutes}
