const banner = {
    height: '30vh',
    width: '100%',
    backgroundColor: '#E0E0E0',
    textAlign: 'center',
    paddingTop: '5%'
}
const bannerText = {
    fontSize: '2rem'
}
const Banner = () => {
    return (
        <div style={banner}>
            <h1 style={bannerText}>Hello, Welcome to CoffeeShop!</h1>
        </div>
    )
}
export default Banner;