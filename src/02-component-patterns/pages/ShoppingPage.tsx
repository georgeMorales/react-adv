// import { ProductButtons } from '../components/ProductButtons';
// import { ProductCard} from '../components/ProductCard';
// import { ProductImage } from '../components/ProductImage';
// import { ProductTitle } from '../components/ProductTitle';
import {ProductButtons, ProductCard, ProductImage, ProductTitle} from '../components'

const product = {
    id: '1',
    title: "Coffee Mug - Card",
    img: './coffee-mug.png'
}

const productsArr = [
    {
        id: '1',
        title: "Coffee Mug - Card",
        img: './coffee-mug.png'
    },
    {
        id: '2',
        title: "Coffee Mug - Card 2",
        img: ''
    },
    {
        id: '3',
        title: "Coffee Mug - Card 3",
        img: './coffee-mug.png'
    }
]

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shoping Page</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {/**Primera Version */}
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title="Cafe (Primera version)" />
                    <ProductCard.Buttons  />
                </ProductCard> 

                {/**Segunda Version */}

                {
                    productsArr.map((product) => (
                        <ProductCard key={product.id} product={product}>
                            <ProductImage />
                            <ProductTitle title={product.title} />
                            <ProductButtons  />
                        </ProductCard>
                    ))
                }

                {/* 
                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle title="Cafe" />
                    <ProductButtons  />
                </ProductCard>
                */}

            </div>
            
        </div>
    )
}
