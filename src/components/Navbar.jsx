import { Stack } from './MUI'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constsnts'
import Searchbar from './Searchbar'

function Navbar() {
    return (
        <Stack direction="row" alignItems="center" p={2}
            sx={{ position: "sticky", background: "#000", top: 0, justifyContent: "space-between" }} >
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                <img src={logo} alt="logo" height={45} />
            </Link>
            <Searchbar />
        </Stack>
    )
}

export default Navbar