import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem() {
	return (
		<article className="teacher-item">
			<header>
				<img
					src="https://avatars3.githubusercontent.com/u/39135403?s=460&u=415ac6543af55af20a5f3364875d507081a44dca&v=4"
					alt="Will Anjos"
				/>
				<div>
					<strong>Will Anjos</strong>
					<span>História</span>
				</div>
			</header>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, modi? <br /> <br />
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse aspernatur soluta aliquid nam
				fugiat optio asperiores sint iusto eum.
			</p>

			<footer>
				<p>
					Preço/Hora
					<strong>R$ 80,00</strong>
				</p>
				<button type="button">
					<img src={whatsappIcon} alt="Whatsapp" />
					Entrar em contato
				</button>
			</footer>
		</article>
	);
}

export default TeacherItem;
