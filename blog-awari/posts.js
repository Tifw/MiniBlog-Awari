const posts = [
	{
		title: 'Bulbasaur',
		content:
			'Bulbasaur. It bears the seed of a plant on its back from birth. The seed slowly develops. Researchers are unsure whether to classify Bulbasaur as a plant or animal. Bulbasaur are extremely tough and very difficult to capture in the wild.',
	},
	{
		title: 'Charmander',
		content:
			'Charmander. A flame burns on the tip of its tail from birth. It is said that a Charmander dies if its flame ever goes out.',
	},
	{
		title: 'Squirtle',
		content:
			'Squirtle. This Tiny Turtle Pokémon draws its long neck into its shell to launch incredible Water attacks with amazing range and accuracy. The blasts can be quite powerful.',
	},
	{
		title: 'Pikachu',
		content:
			'Pikachu, the Mouse Pokémon. It can generate electric attacks from the electric pouches located in both of its cheeks.',
	},
];

const wrapper = document.getElementById('posts');

for (var i = 0; i < posts.length; i++) {
	const postData = posts[i];
	console.log(postData);

	const article = document.createElement('article');
	article.classList.add('article');

	const title = document.createElement('h2');
	title.classList.add('article-title');
	const titleText = document.createTextNode(postData.title);
	title.appendChild(titleText);
	article.appendChild(title);

	const content = document.createElement('p');
	const contentText = document.createTextNode(postData.content);
	content.appendChild(contentText);
	article.appendChild(content);

	wrapper.appendChild(article);
}
