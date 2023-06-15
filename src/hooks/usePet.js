import { useEffect, useRef } from "react";
import { STORAGE_KEYS } from "../enums";
import { generateRandomInt } from "../utils/generateRandomInt";
import { useSave, useLocalStorage } from "./index";

function usePet() {
	const petName = useRef();
	const localStorageHook = useLocalStorage();
	const saveGame = useSave();

	const goodGifts = [
		STORAGE_KEYS.books,
		STORAGE_KEYS.food,
		STORAGE_KEYS.battery,
		STORAGE_KEYS.health,
		STORAGE_KEYS.map,
		STORAGE_KEYS.coffee,
	];
	const badGifts = [
		"rato morto",
		"pássaro morto",
		"planta mordida",
		"bola de tênis",
		"bola de papel",
		"cadarço",
	];

	useEffect(setPetName, []);

	function isHappy({ day, pet }) {
		return pet >= day * 3;
	}

	function isValidDay(day) {
		return day > 7;
	}

	function isValidTime(time) {
		return time === 0;
	}

	function isValidName() {
		const regex = /^[a-z]{1,5}$/gi;
		return petName.current && regex.test(petName.current);
	}

	function setPetName() {
		const data = localStorageHook.getData();

		if (!data.pet) return;

		petName.current = data.pet.name;
	}

	async function namingPet() {
		do {
			petName.current = prompt(
				"Escolha um nome para o seu gato (máximo 5 letras):"
			);
		} while (!isValidName());

		petName.current = petName.current.toLowerCase();

		await saveGame({ data: { pet: { name: petName.current, count: 0 } } });
		setPetName();
	}

	function getGoodGift() {
		const min = 0;
		const max = goodGifts.length;
		const index = generateRandomInt(min, max);

		return goodGifts[index];
	}

	function getBadGift() {
		const min = 0;
		const max = badGifts.length;
		const index = generateRandomInt(min, max);

		return badGifts[index];
	}

	function getGift({ day, time, pet }) {
		if (!isValidDay(day) || !isValidTime(time)) return null;

		let gift;
		let showIfDoesntExist;

		if (isHappy({ day, pet })) {
			gift = getGoodGift();
			showIfDoesntExist = false;
		} else {
			gift = getBadGift();
			showIfDoesntExist = true;
		}

		return {
			description: `${petName.current} te trouxe um presente!`,
			consequences: [{ key: gift, value: 1, showIfDoesntExist }],
			record: {
				text: `${petName.current} te trouxe ${gift}`,
			},
		};
	}

	return { getGift, namingPet };
}

export { usePet };
