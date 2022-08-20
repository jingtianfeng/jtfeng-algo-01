import NavTop from './NavTop'
import Footer from './Footer'

const Layout = ({children}) => {
	return (
		<>
			<NavTop />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
