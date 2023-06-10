import { BiMenu, BiBell, BiSearch } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import styles from "./header.module.scss";
import IconButton from "@/components/icon-button";
import Button from "@/components/button";
import { NAMES } from "@/app/constants/data";

const AVATAR_SIZE = 30;

const Header = () => {
	return (
		<header className={styles.header}>
			<Brand />
			<HeaderUtillity />
		</header>
	);
};

const Brand = () => {
	return (
		<div className={styles.header__brand}>
			<BiMenu className={styles["header-burger-icon"]} />
			<h1 className={styles.header__brand__name}>Clinical Notes</h1>
		</div>
	);
};

const HeaderUtillity = () => {
	return (
		<div className={styles.header__utillity}>
			{/* Button group */}
			<div className={styles.header__utillity__btns}>
				<IconButton>
					<BiSearch />
				</IconButton>
				<IconButton>
					<BiBell />
				</IconButton>
			</div>
			<User />
		</div>
	);
};

const User = () => {
	const name = NAMES[Math.floor(Math.random() * NAMES.length)];
	return (
		<Button className={styles.header__user} variant="base">
			<div className={styles.header__user__content}>
				<span>
					Hello, <b className={styles.header__user__name}>{name}</b>
				</span>
				<img
					src="https://i.pravatar.cc/50"
					alt={`User ${name}`}
					width={AVATAR_SIZE}
					height={AVATAR_SIZE}
					loading="lazy"
				/>
			</div>
			<BsChevronDown className={styles.header__user__icon} />
		</Button>
	);
};

export default Header;
