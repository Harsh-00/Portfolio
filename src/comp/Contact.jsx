import React, { useRef, useState } from "react";
import emaijs from "@emailjs/browser";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import toast from "react-hot-toast";

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
		console.log("INNN");
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
				toast.success("Sent Successfully");
				setForm({
					name: "",
					email: "",
					message: "",
				});
			})
			.error((err) => {
				console.log(err);
				toast.error("Try Again Later");
			});
	};
	return (
		<div className="pt-32 max-w-5xl mx-auto" id="contact">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
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

						<button
							type="submit"
							onClick={SubmitHandler}
							className="text-white rounded-xl"
						>
							Send
						</button>
					</form>
				</div>
			</motion.div>
		</div>
	);
};

export default Contact;
