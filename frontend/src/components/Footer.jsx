const Footer = () => {
	return (
		<footer className="py-6 px-4 md:px-8 bg-black text-white border-t border-gray-800">
			<div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
				{/* Thông tin chính */}
				<p className="text-center text-sm leading-loose md:text-left">
					AnimeKL là dịch vụ được cung cấp bởi{" "}
					<span className="font-medium">Nhom19</span>.
					Địa chỉ: Đại học Công Nghệ Thông Tin, ĐHQG-HCM, TP.HCM, Việt Nam. <br />
					Mã số đăng ký kinh doanh: <span className="font-medium">01065XXXX</span>.<br />
					Ngày cấp: 1X/1X/202X, nơi cấp: Đại học Công Nghệ Thông Tin, ĐHQG-HCM.
				</p>

				{/* Các liên kết hỗ trợ */}
				<div className="text-center text-sm leading-loose">
					<h3 className="font-medium mb-2">HỖ TRỢ</h3>
					<p>097XXXXXXX</p>
					<p>duonguyquan123@gmail.com</p>
					<a
						href="https://animekl.vn/help"
						target="_blank"
						rel="noopener noreferrer"
						className="underline underline-offset-4"
					>
						https://animekl.vn/help
					</a>
				</div>

				{/* Tải ứng dụng và kết nối */}
				<div className="text-center">
					<h3 className="font-medium mb-2">TẢI ỨNG DỤNG</h3>
					<div className="flex justify-center gap-2 mb-2">
						<img
							src="https://assets.glxplay.io/web/responsive/w200/android-app-download-button.png"
							alt="Google Play"
							className="w-32"
						/>
						<img
							src="https://assets.glxplay.io/web/responsive/w200/ios-app-download-button.png"
							alt="App Store"
							className="w-32"
						/>
					</div>
					<h3 className="font-medium mb-2">KẾT NỐI VỚI CHÚNG TÔI</h3>
					<div className="flex justify-center gap-4 text-2xl">
						<a href="#" aria-label="Facebook">
							<i className="fab fa-facebook"></i>
						</a>
						<a href="#" aria-label="Instagram">
							<i className="fab fa-instagram"></i>
						</a>
						<a href="#" aria-label="YouTube">
							<i className="fab fa-youtube"></i>
						</a>
						<a href="#" aria-label="Twitter">
							<i className="fab fa-twitter"></i>
						</a>
						<a href="#" aria-label="Apple">
							<i className="fab fa-apple"></i>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
