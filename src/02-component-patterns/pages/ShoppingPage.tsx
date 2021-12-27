import {ProductButtons, ProductCard, ProductImage, ProductTitle} from '../components'
import { products } from '../data/products';
import '../styles/custom-styles.css'
import { useShoppingCart } from '../hooks/useShoppingCart';

export const ShoppingPage = () => {

    const {onProductCountChange, shoppingCart} = useShoppingCart()
    
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
                {/* <ProductCard 
                    product={product1}
                >
                    <ProductCard.Image className="custom-img" />
                    <ProductCard.Title title="Cafe (Primera version)" className="text-bold" />
                    <ProductCard.Buttons  />
                </ProductCard>  */}

                {/**Segunda Version */}

                {
                    products.map((product) => (
                        <ProductCard 
                            key={product.id} 
                            product={product}
                            className="bg-dark text-white"
                            onChange={onProductCountChange}
                            value={shoppingCart[product.id]?.count || 0}
                            //onChange={(e) => onProductCountChange(e)}
                        >
                            <ProductImage className="custom-img" style={{boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}} />
                            <ProductTitle title={product.title} className="text-white text-bold"  />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }

               
                {/* <ProductCard 
                    product={product2}
                    className='bg-dark'
                >
                    <ProductImage className="custom-img" style={{boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}} />
                    <ProductTitle title="Cafe" className="text-white text-bold" />
                    <ProductButtons className="custom-buttons"  />
                </ProductCard> */}

               

            </div>

            <div className='shopping-cart'>
                {Object.entries(shoppingCart).map(([key, product]) => (
                    <ProductCard 
                        product={product}
                        className="bg-dark text-white"
                        style={{width: '100px'}}
                        key={key}
                        value={product.count}
                        onChange={onProductCountChange}
                    >
                        <ProductImage className="custom-img" style={{boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}} />
                        
                        {/* <ProductTitle title={`${product.count}`} className="text-white text-bold"  /> */}
                        
                        <ProductButtons 
                            className="custom-buttons" 
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        />
                    </ProductCard>
                ))}
                

                
            </div>
            
            {/* <div>
                <code>
                    {JSON.stringify(shoppingCart, null, 5)}
                </code>
            </div> */}
        </div>
    )
}
