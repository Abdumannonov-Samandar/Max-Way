import {
	FacebookIcon,
	InstagramIcon,
	LogoIcon,
	TelegramIcon,
	TikTokIcon,
	YouTubeIcon
} from '@/components/Icons'

const SiteFooter = () => {
	return (
		<footer className='text-gray-600 body-font'>
			<div className='container'>
				<div className='py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
					<div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
						<a href='/'  className='flex items-center md:justify-start justify-center'>
							<LogoIcon />
							<span className='sr-only'>MaxWay icon</span>
						</a>
					</div>
					<div className='flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center'>
						<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
							<h2 className='text-xl font-semibold text-[#003846] tracking-widest mb-3'>
								Asosiy
							</h2>
							<ul className='flex flex-col gap-5 mb-10'>
								<li>
									<a className='text-gray-600 hover:text-gray-800'>
										Kompaniya haqida
									</a>
								</li>
								<li>
									<a className='text-gray-600 hover:text-gray-800'>
										Filiallar
									</a>
								</li>
								<li>
									<a className='text-gray-600 hover:text-gray-800'>
										Bolalar uchun
									</a>
								</li>
							</ul>
						</div>
						<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
							<h2 className='text-xl font-semibold text-[#003846] tracking-widest mb-3'>
								Qo’shimcha
							</h2>
							<ul className='flex flex-col gap-5 mb-10'>
								<li>
									<a className='text-gray-600 hover:text-gray-800'>
										Kompaniya haqida
									</a>
								</li>
								<li>
									<a className='text-gray-600 hover:text-gray-800'>
										Filiallar
									</a>
								</li>
								<li>
									<a className='text-gray-600 hover:text-gray-800'>
										Bolalar uchun
									</a>
								</li>
							</ul>
						</div>
						<div className='lg:w-1/4 md:w-1/2 w-full px-4'></div>
						<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
							<h2 className='text-xl font-semibold text-[#003846] tracking-widest mb-3'>
								Biz bilan aloqa
							</h2>
							<nav className='list-none mb-10'>
								<li>
									<a className='text-gray-600 hover:text-gray-800'>
										First Link
									</a>
								</li>
								<li>
									<a className='text-gray-600 hover:text-gray-800'>
										Second Link
									</a>
								</li>
								<li>
									<a className='text-gray-600 hover:text-gray-800'>
										Third Link
									</a>
								</li>
								<li>
									<a className='text-gray-600 hover:text-gray-800'>
										Fourth Link
									</a>
								</li>
							</nav>
						</div>
					</div>
				</div>
				<hr />
				<div>
					<div className='container mx-auto py-4 pr-5 flex flex-wrap flex-col sm:flex-row'>
						
						<ul className='inline-flex gap-6 sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
							<a href='/'>
								<YouTubeIcon />
								<span className='sr-only'>Youtube icon</span>
							</a>
							<a href='/'>
								<FacebookIcon />
								<span className='sr-only'>Facebook icon</span>
							</a>
							<a href='/'>
								<InstagramIcon />
								<span className='sr-only'>Instagram icon</span>
							</a>
							<a href='/'>
								<TelegramIcon />
								<span className='sr-only'>Telegram icon</span>
							</a>
							<a href='/'>
								<TikTokIcon />
								<span className='sr-only'>TikTok icon</span>
							</a>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default SiteFooter
