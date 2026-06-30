import DomainMegaMenu from "./DomainMegaMenu"
import HostingMegaMenu from "./HostingMegaMenu"
import MarketingMegaMenu from "./MarketingMegaMenu"
import SecurityMegaMenu from "./SecurityMegaMenu"
import WebsiteMegaMenu from "./WebsiteMegaMenu"

type Props = {
    activeMenu: string | null
}

function MegaMenu({activeMenu}:Props){
    return(
        <>
        {
            activeMenu === "Domains" && <DomainMegaMenu/>
        }
        {
            activeMenu === "Websites" && <WebsiteMegaMenu/>
        }
        {
            activeMenu === "Hosting" && <HostingMegaMenu/>
        }
        {
            activeMenu === "Marketing" && <MarketingMegaMenu/>
        }
        {
            activeMenu === "Security" && <SecurityMegaMenu/>
        }
        </>
    )
}

export default MegaMenu