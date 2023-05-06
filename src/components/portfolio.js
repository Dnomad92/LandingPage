import React from 'react';
// import { StaticImage } from 'gatsby-plugin-image'

const posts = [
	{img:'/images/img1.jpg',cod: '01'},
	{img:'/images/img2.jpg',cod: '02'},
	{img:'/images/img3.jpg',cod: '03'},
	{img:'/images/img4.jpg',cod: '04'},
	{img:'/images/img5.jpg',cod: '05'},
	{img:'/images/img6.jpg',cod: '06'},
]

export default function Portfolio () {
	return (
		<div id="portfolio" className=" container bg-white py-3.5 max-w-sm md:w-full md:max-w-4xl lg:px-9 lg:py-4 lg:max-w-7xl" >
			<div className="text-center mx-auto">
				<h2 className="text-3xl font-bold my-8  tracking-tight text-purple-950 sm:text-4xl">Portfólio</h2>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{posts.map((post) =>(
					<div key={post.cod} className="">
						<img  
						src={post.img} 
						alt={post.cod} 
						className=""
						/>
					</div>
				))}
			</div>
		</div>
	)
}