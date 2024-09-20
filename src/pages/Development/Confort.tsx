import * as React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Image, Information, Title } from "components";

import Banner from "assets/images/confort/banner.webp";
import Unknown from "assets/images/confort/unknown.webp";
import LowResistance from "assets/images/confort/lowresistance.webp";
import OutOfConfort from "assets/images/confort/outofconfort.webp";
import Resilience from "assets/images/confort/resilience.webp";
import FirstStep from "assets/images/confort/firststep.webp";
import ConfortZone from "assets/images/confort/confortzone.webp";

import styles from "components/Aside/index.module.scss";
interface Props {
	url: string;
}

const Confort: React.FC<Props> = ({ url }) => {
	const navigate = useNavigate();

	React.useEffect(() => {
		const Main = document.querySelector("main") as HTMLElement;
		const Sections = Main.querySelectorAll("section") as NodeListOf<HTMLElement>;

		Array.from(Sections).forEach((section, i) => {
			section.id = `${i + 1}`;
		});

		const Summary = document.getElementById("summary") as HTMLElement;
		const Titles = Main.querySelectorAll("h1, h2") as NodeListOf<HTMLElement>;
		const Items = Summary.querySelectorAll("a") as NodeListOf<HTMLElement>;

		let current = 0;
		let prev = 0;

		const updateAside = () => {
			Array.from(Items).forEach((item, i) => {
				if (i <= current) {
					const element = item.firstChild as HTMLElement;
					element.classList.add(styles.active);
				} else {
					const element = item.firstChild as HTMLElement;
					element.classList.remove(styles.active);
				}
			});
		};

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						prev = current;
						current = Array.from(Titles).indexOf(entry.target as HTMLElement);
						updateAside();
					} else {
						const index = Array.from(Titles).indexOf(entry.target as HTMLElement);
						if (index === current) {
							if (prev > current) {
								prev = current;
								current++;
							} else {
								prev = current;
								current--;
							}
							updateAside();
						}
					}
				});
			},
			{
				root: Main,
				rootMargin: "60px 0px 0px 0px",
				threshold: 1,
			}
		);

		Titles.forEach((title) => observer.observe(title));

		if (window.location.hash) {
			const id = window.location.hash.substring(1);
			setTimeout(() => {
				const el = document.getElementById(id);
				if (el) {
					el.scrollIntoView();
					// Main.scrollTo(0, el.offsetTop - 60);
				}
			}
			, 0);
		}
	}, []);

	return (
		<article>
			<section>
				<Title>¿Qué es la zona de confort?</Title>
				<Image src={Banner} alt="Zona de confort" size="large" lazy={false} />
				<p>
					Para comenzar debemos de entender <strong>¿Qué es la zona de confort?</strong> también
					conocida como <strong>zona de comodidad</strong> y algunos puntos importantes. Si no
					sabemos qué es la zona de confort, no sabremos cómo salir de ella.
				</p>
				<blockquote>
					La zona de confort es un estado mental donde nos encontramos cómodos con nuestra vida
					actual, por nuestras aspiraciones cubiertas y sin presiones.
				</blockquote>
				<p>
					En términos de la psicología es una zona mental donde no se tiene sentido de riesgo, es un
					estado/lugar en que los psicólogos recomiendan estar para controlar situaciones de estrés
					o desorientación.
				</p>
				<p>
					En otras palabras, la zona de confort nos sitúa en una burbuja que nos protege de lo
					desconocido e inusual. Y sigues haciéndolo por miedo a perder tu estabilidad.
				</p>
				<p>
					A simple vista la zona de confort puede parecer inofensiva, pero no todo es bueno. Dentro
					de la zona de confort también hay cosas negativas que no nos gustan (una relación de
					pareja, un trabajo, malas hábitos adquiridos, etc.)
				</p>
				<Information>
					Bajo circunstancias como: Mucho estrés, si te exiges demasiado, etc. Es mejor quedarnos en
					nuestra zona de confort.
				</Information>
				<p>
					Permanecer en nuestra zona de confort es señal de conformismo, ignorancia, falta de
					confianza, miedo, falta de aspiraciones o por falta de ambiciones.
				</p>
				<p>
					La zona de confort también es un espacio de calma donde podemos descansar y reponernos
				</p>
			</section>
			<section>
				<Title h={2}>Dificultades al intentar salir de nuestra zona de confort</Title>
				<p>
					Existen muchas razones y estas pueden variar para cada pesona, pero, para entender bien
					todo, debemos de recurrir a un poco de historia.
				</p>
				<Image src={Unknown} alt="Miedo a lo desconocido" size="medium" side="right" />
				<p>
					<span>El miedo a lo desconocido:</span> Nuestro cerebro está programado para sobrevivir y
					se podría decir que hoy en día esta desactualizado, hasta el día de hoy todavía seguimos
					con muchas características que tenían nuestros cerebros hace miles de años. Una de esas
					características es el miedo a lo desconocido, si te das cuenta este rasgo existe también
					en otros animales, esto ayudó a que no nos extinguieramos hace muchos años como otras
					especies.
				</p>
				<Image src={LowResistance} alt="El camino de menor resistencia" size="medium" side="right" />
				<p>
					<span>El camino de menor resistencia:</span> Este punto no es de historia, mas bien es de
					evolución, los humanos se han ido adaptando para siempre tomar el camino de menor
					resistencia, hacer lo más fácil, lo que exija mejos esfuerzo.
				</p>
				<p>
					Estos dos puntos anteriores fueron de mucha utilidad para nosotros, lo más probable es que
					por ellos no nos extinguieramos y también hayamos creado tantas cosas y avanzado tan
					rápido como especie, pero también son los principales culpables de que no salgas de tu
					zona de confort, además existen otras razones que nos impiden salir de nuestra zona de
					confort.
				</p>
				<ul>
					<li>
						<strong>Permite desarrollar nuevas habilidades, amistades y ponerse a prueba. </strong>
						Salir de nuestra zona de confort también es un reto, que si logramos superar también
						obtendremos nuevas habilidades, conocimientos, amistades, experiencias, entre muchas
						otras cosas.
					</li>
					<li>
						<strong>Ayuda a prepararte frente a las dificultades. </strong>
						Aprendemos miles de herramientas para hacer frente a imprevistos que surjan.
					</li>
					<li>
						<strong>Aumenta la seguridad en nosotros mismos. </strong>
						Cuando uno se enfrenta a un reto y lo supera cree un poco más en sí mismo, adquiere
						valentía y seguridad para dar el siguiente paso e ir creciendo.
					</li>
					<li>
						<strong>Estimula nuestro afán de superación. </strong>
						Cuando conseguimos salir y ampliar nuestra zona de confort la satisfacción personal es
						muy grande y eso nos hace ir a más y crecer como personas.
					</li>
					<li>
						<strong>Fomenta el crecimiento personal. </strong>
						Cuando nos damos cuenta de que somos capaces de lograr lo que nos daba miedo, resulta
						una aportación muy valiosa a nuestra personalidad. La carga de experiencias nos acompaña
						en nuestro camino para explorar más allá de nuestra nueva zona de confort.
					</li>
				</ul>
			</section>
			<section>
				<Title h={2}>¿Es importante salir de nuestra zona de confort?</Title>
				<Image src={OutOfConfort} alt="Fuera de la zona de confort" size="medium" side="left" />
				<p>
					Quien sale de la zona de confort no tiene miedo de arriesgarse y, muchas veces, se
					sorprende con lo que alcanza. Es claro que cada persona se adapta de forma diferente a una
					misma situación, pero el simple hecho de arriesgar ya proporciona más conocimiento.
				</p>
				<p>
					Salir de nuestra zona de confort nos otorga varios beneficios, que tal vez no serán
					notorios a primera vista, pero serán cosechados conforme avance el tiempo y descubras
					nuevas cosas.
				</p>
				
			</section>
			<section>
				<Title h={2}>El orden y el caos</Title>
				<p>
					El profesor <strong>Jordan Peterson</strong> habla mucho sobre el orden y el caos. Dice
					que el orden y el caos conviven, el humano para alcanzar sus objetivos debe de tener un
					pie en el orden. Pero ¿A qué se refiere con el orden y el caos?
				</p>
				<p>
					<strong>El orden:</strong> Son tus rutinas, tus hábitos, tu día a día, lo que te mueve
					hacia adelante, es la sistematización de procesos, todo lo conocido, es esperar lo mismo
					cada día, todo esto crea diferentes rutinas que al final te crearán diferentes procesos
					que al final te crearán los mismos resultados que esperas, sin orden no podrías alcanzar
					tus objetivos a largo plazo.
				</p>
				<p>Pero también debes de tener otro pie en el caos, y ¿Qué es el caos?</p>
				<p>
					<strong>El caos:</strong> El caos es todo lo desconocido, el caos es lo nuevo, es el
					cambio, es todo aquello que nos produce cierto miedo e inestabilidad.
				</p>
				<p>
					La idea es que estés un punto medio, que encuentres un balance entre el orden y el caos de
					tu vida, y que cuando entres en caos consigas ordenarlo y así ir dominando todo lo nuevo.
				</p>
				<Image src={Resilience} alt="Resiliencia" size="medium" side="left" />
				<p>
					El ser humano es antifragil, y con antifrágil me refiero a que no solo es resistente, sino
					que cada vez que recibe un golpe o daño, o supera alguna situación adversa se hace más
					fuerte, es resiliente, esto es lo que nace del caos, el balance entre medio, es donde nace
					la virtud.
				</p>
				<p>
					No es bueno estar más del lado del caos que del orden, si es así, tienes que ordenar tu
					caos, o si estás más del lado del orden tienes que salir de tu zona de confort y de tu
					zona de miedo, para que puedas crecer como persona, es muy importante crear este balance,
					existe gente que se encuentra
				</p>
			</section>
			<section>
				<Title h={2}>Conquista tu zona de confort</Title>
				<Image src={FirstStep} alt="Primeros pasos para salir de tu zona de confort" size="large" />
				<p>
					Cada vez que sales de tu zona de confort en realidad lo que estás haciendo es expandir tu
					zona de confort, nuestra habitación puede ser nuestra zona cómoda, nuestra casa, nuestro
					vecindario, incluso nuestra ciudad o país, puedes hacer de todo tu zona de confort.
				</p>
				<p>
					Expandir tu zona de confort hará que de repente aparezcan nuevas oportunidades, personas,
					amistades, nuevos conocimientoS, comienzas a hacer mas cosas que te dan miedo, y cuanto
					más haces, más construyes, y cuanta más base sólida tienes, más empiezas a crecer por que
					tienes más recursos.
				</p>
			</section>
			<section>
				<Title h={2}>Rompe el patrón</Title>
				<Image src={ConfortZone} alt="Zona de confort" size="medium" side="left" />
				<p>
					Leer un blog no hará nada en tu vida si no lo pones en práctica, leíste este blog hasta
					acá por que quieres cambiar, por que quieres salir de tu zona de confort, pero de nada
					sirve todo esto si no rompes este patrón, de nada sirve la información si no la pones en
					práctica, haz algo que aunque parezca fácil, nunca hayas hecho, solo falta una pequeña
					rotura en el patrón para empezar a desencadenar una serie de eventos, y te darás cuenta
					que salir de tu zona de confort es fascinante, pero todo depende de ti,{" "}
					<strong>¿Necesitas más caos en tu vida?</strong> o <strong>¿Necesitas más orden?</strong>
				</p>
				<p>
					Esta es tu llamada a la acción, para salir de la zona de confort no hace falta realizar
					grandes cambios en tu vida. Los desencadenantes que puedes hacer ahora mismo para que
					descubras esa parte del mundo que tal vez no sabías que estaba ahí, o que nunca te habías
					atrevido a explorar, son las siguientes.
				</p>
				<ol>
					<li>
						<strong>No te quedes cómodo:</strong> No hagas tu rutina diaria.
					</li>
					<li>
						<strong>Hazlo poco a poco:</strong> Comienza con pequeños cambios, como cosas que
						normalmente no harías:
						<ul>
							<li>Si eres tímido o introvertido, toma iniciativa e invita a tus amigos.</li>
							<li>Cambia tu actitud ante las personas que te rodean y la vida.</li>
							<li>Realiza actividades en las que necesites creatividad.</li>
							<li>Hablarle a algún o alguna desconocid@ en la calle.</li>
							<li>Hablarle a esa persona que tanto te gusta.</li>
							<li>Experimenta cosas nuevas todos los días</li>
							<li>Intenta superar tus miedos y temores.</li>
							<li>Realiza actividades independientes.</li>
							<li>Estudiar un nuevo idioma.</li>
							<li>Aprende algo nuevo.</li>
						</ul>
					</li>
					<li>
						<strong>Sé flexible:</strong> Mantente abierto a nuevas actividades.
					</li>
					<li>
						<strong>Desafíate a ti mismo: </strong>
						Nadie ha alcanzado sus sueños haciendo lo mismo toda su vida.
					</li>
					<li>
						<strong>Abre tu mente:</strong> Puedes ponerte creativo y animarte a hacer cosas nuevas.
					</li>
				</ol>
				<blockquote>No dejes para mañana lo que puedes hacer hoy.</blockquote>
			</section>
			<section>
				<Title h={2}>Conclusión</Title>
				<p>
					Salir de tu zona de confort es de las mejores cosas que te pueden pasar, le da más emoción
					a tu vida, aprendes nuevas cosas, nuevas experiencias, etc.
				</p>
				<p>
					Una vez entiendes que tu miedo es mental y normal a todo lo desconocido, el miedo no es
					por la situación que te ocurrirá en el futuro, cambia tu marco mental, sólo necesitas
					poner un poco de tu parte para lograrlo.
				</p>
				<p>
					Debes de tener un equilibrio entre tu <strong>orden</strong> y tu <strong>caos</strong>{" "}
					para salir de tu zona de confort.
				</p>
				<p>
					Identifica si necesitas ordenar el caos de tu vida o si debes salir más de tu zona de
					comodidad.
				</p>
			</section>
			<Button onClick={() => navigate(`/${url}`)}>Regresar</Button>
		</article>
	);
};

export default Confort;
