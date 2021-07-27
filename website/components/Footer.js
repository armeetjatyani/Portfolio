import styles from "../styles/Footer.module.css";

export default function Footer() {
	return (
		<div className={styles.container}>
			<div className={styles.footer}>
				<div className={styles.footerLeft}>
					<a href="#">
						<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14C6 15.1046 6.89543 16 8 16Z" fill="black" />
							<path d="M10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z" fill="black" />
							<path d="M15 10C16.1046 10 17 9.10457 17 8C17 6.89543 16.1046 6 15 6C13.8954 6 13 6.89543 13 8C13 9.10457 13.8954 10 15 10Z" fill="black" />
							<path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C12.926 22 13.648 21.254 13.648 20.312C13.648 19.875 13.468 19.477 13.211 19.187C12.921 18.898 12.773 18.535 12.773 18.062C12.7692 17.8419 12.8098 17.6233 12.8922 17.4192C12.9747 17.2151 13.0975 17.0298 13.2531 16.8741C13.4088 16.7185 13.5941 16.5957 13.7982 16.5132C14.0023 16.4308 14.2209 16.3902 14.441 16.394H16.437C19.488 16.394 21.992 13.891 21.992 10.84C21.965 6.012 17.461 2 12 2Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						<p>highlighter</p>
					</a>
				</div>
				<div className={styles.footerMiddle}>
					<a href="#">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0)">
								<path
									d="M20 10.4688C20 11.168 19.832 11.8164 19.4961 12.4102C19.1602 13.0039 18.7109 13.4688 18.1445 13.793C18.1602 13.8984 18.168 14.0625 18.168 14.2852C18.168 15.3438 17.8125 16.2422 17.1094 16.9844C16.4023 17.7305 15.5508 18.1016 14.5547 18.1016C14.1094 18.1016 13.6836 18.0195 13.2812 17.8555C12.9688 18.4961 12.5195 19.0117 11.9297 19.4062C11.3438 19.8047 10.6992 20 10 20C9.28516 20 8.63672 19.8086 8.05859 19.418C7.47656 19.0312 7.03125 18.5117 6.71875 17.8555C6.31641 18.0195 5.89453 18.1016 5.44531 18.1016C4.44922 18.1016 3.59375 17.7305 2.87891 16.9844C2.16406 16.2422 1.80859 15.3398 1.80859 14.2852C1.80859 14.168 1.82422 14.0039 1.85156 13.793C1.28516 13.4648 0.835938 13.0039 0.5 12.4102C0.167969 11.8164 0 11.168 0 10.4688C0 9.72656 0.1875 9.04297 0.558594 8.42578C0.929688 7.80859 1.42969 7.35156 2.05469 7.05469C1.89062 6.60938 1.80859 6.16016 1.80859 5.71484C1.80859 4.66016 2.16406 3.75781 2.87891 3.01562C3.59375 2.27344 4.44922 1.89844 5.44531 1.89844C5.89062 1.89844 6.31641 1.98047 6.71875 2.14453C7.03125 1.50391 7.48047 0.988281 8.07031 0.59375C8.65625 0.199219 9.30078 0 10 0C10.6992 0 11.3438 0.199219 11.9297 0.589844C12.5156 0.984375 12.9688 1.5 13.2812 2.14062C13.6836 1.97656 14.1055 1.89453 14.5547 1.89453C15.5508 1.89453 16.4023 2.26562 17.1094 3.01172C17.8164 3.75781 18.168 4.65625 18.168 5.71094C18.168 6.20312 18.0938 6.64844 17.9453 7.05078C18.5703 7.34766 19.0703 7.80469 19.4414 8.42188C19.8125 9.04297 20 9.72656 20 10.4688ZM9.57422 13.4805L13.7031 7.29688C13.8086 7.13281 13.8398 6.95312 13.8047 6.76172C13.7656 6.57031 13.668 6.41797 13.5039 6.31641C13.3398 6.21094 13.1602 6.17578 12.9688 6.20312C12.7734 6.23438 12.6172 6.32812 12.5 6.49219L8.86328 11.9609L7.1875 10.2891C7.03906 10.1406 6.86719 10.0703 6.67578 10.0781C6.48047 10.0859 6.3125 10.1562 6.16406 10.2891C6.03125 10.4219 5.96484 10.5898 5.96484 10.793C5.96484 10.9922 6.03125 11.1602 6.16406 11.2969L8.46484 13.5977L8.57812 13.6875C8.71094 13.7773 8.84766 13.8203 8.98047 13.8203C9.24219 13.8164 9.44141 13.707 9.57422 13.4805Z"
									fill="black"
								/>
							</g>
							<defs>
								<clipPath id="clip0">
									<rect width="20" height="20" fill="white" />
								</clipPath>
							</defs>
						</svg>
						<p>Armeet Singh Jatyani.</p>
					</a>
				</div>
				<div className={styles.footerRight}>
					<a href="#">
						<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6 3V15" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						<p>v1.0.0</p>
					</a>
				</div>
			</div>
		</div>
	);
}
