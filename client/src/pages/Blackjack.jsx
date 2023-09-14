// blackjack page
// add components for different functionality

import cardImages from '../utils/images';
import { Link } from "react-router-dom";

import "../styles/Blackjack.css";
import { useEffect, useState } from "react";
// import PlayerHand from '../components/PlayerHand'

const Blackjack = () => {
	// represents cards
	const [usersHand, setUsersHand] = useState([])   // holds cards
	const [dealersHand, setDealersHand] = useState([])  

	//represents value of hand
	const [userSum, setUserSum] = useState(0);  // use spread operator to clone cards, get value
	const [dealerSum, setDealerSum] = useState(0);

	//represent the "count" ( 2-6=(1) , 7-9=(0), 10-A=(-1))
	const [count, setCount] = useState(0) 
	//create function that analyzes value, then changes counter based on value

	//not sure if this needs to be tracked
	const [gameOver, setGameOver] = useState(false);

	// represents the cards in deck as an array
	const [deck, setDeck] = useState([
		{
			name: '2-C',
			value: 2,
			count: 1,
			image: cardImages.C2,
		},
		{
			name: '3-C',
			value: 3,
			count: 1,
			image: cardImages.C3,
		},
		{
			name: '4-C',
			value: 4,
			count: 1,
			image: cardImages.C4,
		},
		{
			name: '5-C',
			value: 5,
			count: 1,
			image: cardImages.C5,
		},
		{
			name: '6-C',
			value: 6,
			count: 1,
			image: cardImages.C6,
		},
		{
			name: '7-C',
			value: 7,
			count: 0,
			image: cardImages.C7,
		},
		{
			name: '8-C',
			value: 8,
			count: 0,
			image: cardImages.C8,
		},
		{
			name: '9-C',
			value: 9,
			count: 0,
			image: cardImages.C9,
		},
		{
			name: '10-C',
			value: 10,
			count: -1,
			image: cardImages.C10,
		},
		{
			name: 'J-C',
			value: 10,
			count: -1,
			image: cardImages.JC,
		},
		{
			name: 'Q-C',
			value: 10,
			count: -1,
			image: cardImages.QC,
		},
		{
			name: 'K-C',
			value: 10,
			count: -1,
			image: cardImages.KC,
		},
		{
			name: 'A-C',
			value: 11,
			count: -1,
			image: cardImages.AC,
		},
		{
			name: '2-H',
			value: 2,
			count: 1,
			image: cardImages.H2,
		},
		{
			name: '3-H',
			value: 3,
			count: 1,
			image: cardImages.H3,
		},
		{
			name: '4-H',
			value: 4,
			count: 1,
			image: cardImages.H4,
		},
		{
			name: '5-H',
			value: 5,
			count: 1,
			image: cardImages.H5,
		},
		{
			name: '6-H',
			value: 6,
			count: 1,
			image: cardImages.H6,
		},
		{
			name: '7-H',
			value: 7,
			count: 0,
			image: cardImages.H7,
		},
		{
			name: '8-H',
			value: 8,
			count: 0,
			image: cardImages.H8,
		},
		{
			name: '9-H',
			value: 9,
			count: 0,
			image: cardImages.H9,
		},
		{
			name: '10-H',
			value: 10,
			count: -1,
			image: cardImages.H10,
		},
		{
			name: 'J-H',
			value: 10,
			count: -1,
			image: cardImages.JH,
		},
		{
			name: 'Q-H',
			value: 10,
			count: -1,
			image: cardImages.QH,
		},
		{
			name: 'K-H',
			value: 10,
			count: -1,
			image: cardImages.KH,
		},
		{
			name: 'A-H',
			value: 11,
			count: -1,
			image: cardImages.AH,
		}, {
			name: '2-S',
			value: 2,
			count: 1,
			image: cardImages.S2,
		},
		{
			name: '3-S',
			value: 3,
			count: 1,
			image: cardImages.S3,
		},
		{
			name: '4-S',
			value: 4,
			count: 1,
			image: cardImages.S4,
		},
		{
			name: '5-S',
			value: 5,
			count: 1,
			image: cardImages.S5,
		},
		{
			name: '6-S',
			value: 6,
			count: 1,
			image: cardImages.S6,
		},
		{
			name: '7-S',
			value: 7,
			count: 0,
			image: cardImages.S7,
		},
		{
			name: '8-S',
			value: 8,
			count: 0,
			image: cardImages.S8,
		},
		{
			name: '9-S',
			value: 9,
			count: 0,
			image: cardImages.S9,
		},
		{
			name: '10-S',
			value: 10,
			count: -1,
			image: cardImages.S10,
		},
		{
			name: 'J-S',
			value: 10,
			count: -1,
			image: cardImages.JS,
		},
		{
			name: 'Q-S',
			value: 10,
			count: -1,
			image: cardImages.QS,
		},
		{
			name: 'K-S',
			value: 10,
			count: -1,
			image: cardImages.KS,
		},
		{
			name: 'A-S',
			value: 11,
			count: -1,
			image: cardImages.AS,
		}, {
			name: '2-D',
			value: 2,
			count: 1,
			image: cardImages.D2,
		},
		{
			name: '3-D',
			value: 3,
			count: 1,
			image: cardImages.D3,
		},
		{
			name: '4-D',
			value: 4,
			count: 1,
			image: cardImages.D4,
		},
		{
			name: '5-D',
			value: 5,
			count: 1,
			image: cardImages.D5,
		},
		{
			name: '6-D',
			value: 6,
			count: 1,
			image: cardImages.D6,
		},
		{
			name: '7-D',
			value: 7,
			count: 0,
			image: cardImages.D7,
		},
		{
			name: '8-D',
			value: 8,
			count: 0,
			image: cardImages.D8,
		},
		{
			name: '9-D',
			value: 9,
			count: 0,
			image: cardImages.D9,
		},
		{
			name: '10-D',
			value: 10,
			count: -1,
			image: cardImages.D10,
		},
		{
			name: 'J-D',
			value: 10,
			count: -1,
			image: cardImages.JD,
		},
		{
			name: 'Q-D',
			value: 10,
			count: -1,
			image: cardImages.QD,
		},
		{
			name: 'K-D',
			value: 10,
			count: -1,
			image: cardImages.KD,
		},
		{
			name: 'A-D',
			value: 11,
			count: -1,
			image: cardImages.AD,
		},
	])

	//will represent when it's the user's turn
	// const [turn, setTurn] = useState(true);

	const [win, setWin] = useState(0)
	const [lose ,setLose] = useState(0)


	// on window load we need the deck to be built
	// window.onload = function() {
	//     cardContainer();
	//     shuffleCards();
	//     // playBlackjack();
	// } 


	// create a function to shuffle the deck and get a random card
	function shuffleCards() {
		const tempDeck = [...deck]
		for (let i = 0; i < tempDeck.length; i++) {
			let j = Math.floor(Math.random() * tempDeck.length);
			let temp = tempDeck[i];
			tempDeck[i] = tempDeck[j];
			tempDeck[j] = temp;
		}
		setDeck(tempDeck);
	}
	// // created this function to visualize useState better
	// function drawSingleCard() {
	// 	const singleCard = deck.slice(0)
	// 	setDeck.slice(singleCard)
	// 	return singleCard
	// }

	function dealerHit(){
		//rearranged code, stored drawn card into variable for accuracy
		// add card to hand
		const card = deck[0]
		setDealersHand([...dealersHand, card]);
		//remove card from deck
		const updatedDeck = deck.filter(deck => deck !== card)

		console.log(updatedDeck)
		setDeck(updatedDeck);
		/// check aces??
		setDealerSum(dealerSum+ card.value)
	}


	function userHit() {
	//re-arranged format to store a variable within function 
		//remove card from deck
		const card = deck.pop();

		// add card to hand
		setUsersHand([...usersHand, card]);
		const updatedDeck = deck.filter(deck => deck !== card)
		console.log(updatedDeck)
		setDeck(updatedDeck);
		setUserSum(userSum + card.value)
	}
	console.log(deck)

	// function hitButton() {
	// 	userHit()
	// 	dealerHit
	// }

	function dealCards() {   //function to deal one card user, one dealer, one user, one dealer card face down (make card hidden in html css)
		// add card to user 
	
		// store a card value with userHit() User draws 1 card using userHit,
		const userCard1 = deck[0]
		console.log(userCard1)
		setUsersHand([...usersHand, userCard1])

			// setUserSum(...userSum + userCard1.value) - setUserSum is run on userHit, should be adding value already. 

		const dealerCard1 = deck[1]
		console.log(dealerCard1)
		setDealersHand([...dealersHand, dealerCard1])
			// setDealerSum(...dealerSum + dealerCard1.value)

		const userCard2 = deck[2]
		setUsersHand([...usersHand, userCard2])
		console.log(userCard2)
			// setUserSum(...userSum + userCard2.value)

		const dealerCard2 = deck[3]
		setDealersHand([...dealersHand, dealerCard2])
		console.log(dealerCard2)
			// setDealerSum(...dealerSum + dealerCard2.value)


		// setDeck(deck.slice(4, deck.length)); not sure if required, already setting deck in userHit / dealerHit
		console.log(usersHand, dealersHand)
	}

	// function stand() {
	// 	const dealerCard = deck[0]
	// 	setDealersHand

	// 	while(dealer.count < 17) {
	// 		const draw = this.dealerDraw(dealer, deck);
	// 		dealer = draw.dealer;
	// 		deck = draw.updatedDeck;
	// 	 }

	// }

	// function count() {

	// }


	// function endRound() {
	// 	//gets called by bust or dealer stand
	// 	//show results
	// 	//ask to play agin?
	// }

	useEffect(() => {
		shuffleCards()
	}, [])

	function playBlackjack() {
		// shuffle the deck
		shuffleCards();
		dealCards();

	}

	// function getValue(card) {
	//     // i.e split method allows 5-D to give us an array ["5", "D"]
	//     let data = card.split("-");
	//     // the first index of that array is the value
	//     let value = data[0];


	//     // J, Q, and K have a value of 10 and not a number
	//     // A has a value of 11 and not a number
	//     if (isNaN(value)) {
	//         if (value == "A") {
	//             return 11;
	//         }
	//         return 10;
	//     }
	//     // otherwise return value of digits
	//     return parseInt(value);  
	// }

	// A has a value of 1, if not the value is 0
	// function checkAce(card) {
	//     if (card[0] == "A") {
	//         return 1;
	//     }
	//     return 0;
	// }


	// HTML Template to create blackjack page, style with traditional CSS
	return (
		<div className="outline blackjack">

			<h1 className="blackjack-header">Welcome to the Blackjack Page</h1>
			{/* <Link to="/home">
                <h2 className="blackjack-nav">Home</h2>
            </Link> */}

			<section className="game-container">
				<div className="count-container">
					<div className="outline running-count-container">
						<h3>Running Count: {count}</h3>
					</div>
					<div className="outline deck-count-container">
						<h3>Cards in Deck: </h3>
					</div>
				</div>


				<div className="score-container ">
					<header className="outline wins">
						<h3>Wins:</h3>
					</header>
					<header className="outline losses">
						<h3>Losses: </h3>
					</header>
				</div>

				{/* <div className="outline deal-container"></div> */}

				<div className="outline buttons-container">
					<div>
						<button id="hit-button" onClick={userHit}><h3>Hit</h3></button>
					</div>
					<div>
						<button id="stand-button" onClick={dealerHit}><h3>Stand</h3></button>
					</div>
					<div>
						<button id="deal-button" onClick={playBlackjack}><h3>Deal New Hand</h3></button>
					</div>
				</div>


            <div className="outline dealer-cards-container">
               <h3></h3>
					<div className="dealer-card">Dealer Cards
						{dealersHand.map((deck) => (
							<img key={deck.name} src={deck.image} value={deck.value} className="playing=card"/>
							// <p key={card.name}>{card.name}</p>
						))}
					</div>
				</div>

				<div className="outline player-cards-container">
					<h3></h3>
					<div className="player-card" >Player Cards
						{usersHand.map((deck) => (
							<img key={deck.name} src={deck.image} value={deck.value} className="playing=card" />

						))}

					</div>
				</div>
			</section>
		</div>
	);
};

export default Blackjack;

