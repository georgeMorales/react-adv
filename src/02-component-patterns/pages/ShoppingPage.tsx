// import { ProductButtons } from '../components/ProductButtons';
// import { ProductCard} from '../components/ProductCard';
// import { ProductImage } from '../components/ProductImage';
// import { ProductTitle } from '../components/ProductTitle';
import {ProductButtons, ProductCard, ProductImage, ProductTitle} from '../components'
import '../styles/custom-styles.css'


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
                <ProductCard 
                    product={product}
                >
                    <ProductCard.Image className="custom-img" />
                    <ProductCard.Title title="Cafe (Primera version)" className="text-bold" />
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

               
                <ProductCard 
                    product={product}
                    className='bg-dark'
                >
                    <ProductImage className="custom-img" style={{boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}} />
                    <ProductTitle title="Cafe" className="text-white text-bold" />
                    <ProductButtons className="custom-buttons"  />
                </ProductCard>

                <ProductCard 
                    product={product}
                    style={{backgroundColor: "#70D1F8"}}
                >
                    <ProductImage style={{boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}} />
                    <ProductTitle title="Cafe ole" style={{fontSize: '22', fontWeight: 'bold'}} />
                    <ProductButtons style={{
                        display: 'flex',
                        justifyContent: 'end'
                    }} />
                </ProductCard>
                

            </div>
            
        </div>
    )
}
