import errorImg from "../assets/icon-error.svg";
import retryImg from "../assets/icon-retry.svg";

const ErrorPage = () => {
	return (
		<div className="pt-10 grid gap-6 place-items-center">
			<img src={errorImg} alt="" className="w-10.5 h-12.5" />
			<h1 className="text-neutral-0 font-bold text-[3.25rem] text-center">
				Something went wrong
			</h1>
			<p className="text-neutral-200 text-xl font-medium text-center">
				We couldn’t connect to the server (API error). Please try again in a few
				moments.
			</p>
			<button
				type="button"
				className="flex items-center gap-3 px-4 py-2 bg-neutral-600 text-neutral-0 rounded-8 cursor-pointer">
				<img src={retryImg} alt="" />
				Retry
			</button>
		</div>
	);
};

export default ErrorPage;
