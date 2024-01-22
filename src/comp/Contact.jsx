import React, { useRef, useState } from "react";
import emaijs from "@emailjs/browser";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { IoSend } from "react-icons/io5";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		namee: "",
		email: "",
		message: "",
	});

	const ChangeHandler = (e) => {
		const { name, value } = e.target;
		setForm((prev) => {
			return { ...prev, [name]: value };
		});
	};
	const SubmitHandler = (e) => {
		e.preventDefault();

		//checking for email input
		if (!form.email) {
			toast.error("Please Enter Your Email");
			return;
		}

		console.log("INNN");
		toast.promise(
			emaijs
				.send(
					"service_3xeyfla",
					"template_a5gx0nz",
					{
						from_name: form.namee,
						to_name: "Harsh Agarwal",
						from_email: form.email,
						to_email: "2021Kucp1011@iiitkota.ac.in",
						message: form.message,
					},
					"mIuyUINfwI5AUkMlV"
				)
				.then(() => {
					setForm({
						namee: "",
						email: "",
						message: "",
					});
				}),
			{
				loading: "Sending",
				success: "Sent Successfully",
				error: "Try Again Later",
			}
		);
	};
	return (
		<div className="pt-28 pb-12 max-w-5xl mx-auto" id="contact">
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{
					duration: 1,
					type: "linear",
				}}
				className="flex flex-col"
			>
				<h1 className="text-6xl w-fit mx-auto mb-16">Contact Me</h1>
				<div className=" max-w-5xl w-full flex justify-center items-center">
					<form
						ref={formRef}
						onSubmit={SubmitHandler}
						className="w-[70%] flex flex-col gap-5"
					>
						<label>
							<span>Your Name</span>
							<input
								type="text"
								name="namee"
								value={form.namee}
								onChange={ChangeHandler}
								placeholder="Enter Your Name"
								className="mt-1 rounded-lg p-2 placeholder:opacity-50 w-full"
							/>
						</label>

						<label>
							<span>Your Email</span>
							<input
								type="email"
								name="email"
								value={form.email}
								onChange={ChangeHandler}
								placeholder="Enter Your Email"
								className="mt-1 rounded-lg p-2 placeholder:opacity-50 w-full"
								required
							/>
						</label>

						<label>
							<span>Your Messsge</span>
							<textarea
								rows="7"
								name="message"
								value={form.message}
								onChange={ChangeHandler}
								placeholder="Enter Your Message"
								className="mt-1 rounded-lg p-2 placeholder:opacity-50 w-full"
							/>
						</label>

						<motion.button
							type="submit"
							onClick={SubmitHandler}
							className="text-black rounded-2xl bg-white w-fit px-4 py-2 mx-auto font-semibold text-xl border-4 border-transparent flex gap-3 justify-center items-center"
							whileTap={{ scale: 0.9 }}
							whileHover={{
								scale: 1.1,
								color: "white",
								background: "transparent",
								borderColor: "white",
							}}
							transition={{
								type: "spring",
								stiffness: 500,
								damping: 8,
								duration: 0.2,
							}}
						>
							<IoSend className="text-xl" />
							Send
						</motion.button>
					</form>
				</div>
			</motion.div>
		</div>
	);
};

export default Contact;
