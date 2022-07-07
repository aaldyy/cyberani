import genresData from "./genresData";

const GenresDisplay = () => {
	return (
		<div className="w-full p-3 my-6 flex flex-col justify-center items-center">
			<div className="md:w-[70%] ml-3 mb-4">
				<h1 className="text-left text-slate-200 text-3xl font-semibold">
					Genres
				</h1>
			</div>
			<div
				className="md:w-[70%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5
     mt-2 text-left font-medium text-slate-100 pb-2"
			>
				{genresData.map((genre) => (
					<div
						className="relative max-h-[18rem] max-w-[10rem] mb-4 mx-2 md:mb-4
          hover:scale-110 transition-all gap-2 duration-500"
						key={genre.genre}
					>
						<div
							className="absolute top-0 left-0 z-10 h-[100%] w-full rounded-lg duration-300 flex items-end"
							style={{
								boxShadow: "200px 200px 0px 200px rgba(0,0,0,0.45) inset",
							}}
						>
							<div className="flex justify-center items-center h-full w-full">
								<p className="opacity-100 z-50 text-lg text-center font-semibold">
									{genre.genre}
								</p>
							</div>
						</div>
						<span>
							<img
								src={
									genre.imgURL
										? genre.imgURL
										: "https://gogocdn.net/cover/shingeki-no-kyojin-the-final-season-kanketsu-hen.png"
								}
								className="object-cover w-full h-full rounded-xl"
							/>
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default GenresDisplay;
