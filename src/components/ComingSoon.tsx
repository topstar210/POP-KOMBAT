import tokenImg from "@/assets/icons/icon-token.svg";

const ComingSoon = () => {
	return (
		<div
			style={{
				height: "100%",
				width: "100%",
				background: "url('./splash-bg.png')",
				backgroundSize: "cover"
			}}
		>
			<div
				style={{
					background: "#000000B5",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					height: "100vh"
				}}
			>
				<div style={{ textAlign: "center", marginTop: "-80px" }}>
					<img
						src={tokenImg}
						width={239}
						style={{
							borderRadius: "50%",
							boxShadow: "1px 2px 0px 0px #000"
						}}
						alt=""
					/>
					<div
						className="luckiest"
						style={{
							fontSize: "33.3px",
							marginTop: "10px",
							WebkitTextStroke: "1px #000000",
							WebkitTextFillColor: "white",
							textShadow: "2px 5px 0px #101010",
							color: "#fff"
						}}
					>
						Coming Soon
					</div>
				</div>
			</div>
		</div>
	);
};

export default ComingSoon;
