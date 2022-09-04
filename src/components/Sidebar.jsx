import { Stack } from './MUI'
import { categories } from '../utils/constsnts'


function Sidebar({ selectedCategory, setSelectedCategory }) {
    return (
        <Stack direction="row"
            sx={{
                overflowY: "auto",
                height: { sx: "auto", md: "95%" }, flexDirection: { md: "column" }
            }} >
            {categories.map((category) => (
                <button className="category-btn"
                    onClick={() => setSelectedCategory(category.name)}
                    style={{
                        background: category.name === selectedCategory && '#FC1503',
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                    }}
                    key={category.name}
                >
                    <span style={{ color: category.name === selectedCategory ? 'white' : 'red' }} >
                        {category.icon}
                    </span>
                    <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }} >
                        {category.name}
                    </span>
                </button>
            ))}
        </Stack>
    )
}

export default Sidebar