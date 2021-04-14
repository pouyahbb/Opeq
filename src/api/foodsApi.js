const FoodsApi = [
	{
		name: 'Lunch And Dinner',
		data: [
			{
				id: 'L1',
				foodName: 'T-Bon Steak & Eggs',
				image: 'https://cdn.opeqe.com/image/menu/s/3.jpg',
				type: 'FastFood',
				location: 'American . Main Course . Lunch And Dinner ',
				timeToReady: '4-6',
				price: '19.67',
			},
			{
				id: 'L2',
				foodName: 'Quarter Dark And Leg',
				image: 'https://cdn.opeqe.com/image/menu/s/11.jpg',
				type: 'FastFood',
				location: 'American . Main Course . Lunch And Dinner',
				timeToReady: '40-60',
				price: '26.67',
			},
			{
				id: 'L3',
				foodName: 'Avocado Bacon Cheeseburger',
				image: 'https://cdn.opeqe.com/image/menu/s/12.jpg',
				type: 'FastFood',
				location: 'American . Main Course . Lunch And Dinner ',
				timeToReady: '10-15',
				price: '16.67',
			},
		],
	},
	{
		name: 'Mexican',
		data: [
			{
				id: 'M1',
				foodName: 'Gordita Taco Combo',
				image: 'https://cdn.opeqe.com/image/menu/s/9.jpg',
				type: 'Taco',
				location: 'Mexican . Main Course . Lunch And Dinner',
				timeToReady: '15-22',
				price: '9.89',
			},
		],
	},
	{
		name: 'Japanese',
		data: [
			{
				id: 'J1',
				foodName: 'Pad Thai',
				image: 'https://cdn.opeqe.com/image/menu/s/10.jpg',
				type: 'SeaFood',
				location: 'Japanese . Main Course . Lunch And Dinner',
				timeToReady: '25-37',
				price: '9.99',
			},
			{
				id: 'J2',
				foodName: 'Albacore Sashimi',
				image:
					'https://cdn.opeqe.com/image/menu/s/2c433d2f-5d42-430a-67e9-08d687252175.jpg',
				type: 'Sashimi',
				location: 'Japanese . Main Course . Lunch And Dinner',
				timeToReady: '10-15',
				price: '12.59',
			},
			{
				id: 'J3',
				foodName: 'Noodle Plate',
				type: 'FastFood',
				image: 'https://cdn.opeqe.com/image/menu/s/2.jpg',
				location: 'Japanese . Main Course . Lunch And Dinner',
				timeToReady: '25-37',
				price: '9.54',
			},
			{
				id: 'J4',
				foodName: 'Salmon Red Caviar Sushi',
				image: 'https://cdn.opeqe.com/image/menu/s/46.jpg',
				type: 'Sushi',
				location: 'Japanese . Main Course . Lunch And Dinner',
				timeToReady: '4-6',
				price: '5.21',
			},
		],
	},
	{
		name: 'pizza',
		data: [
			{
				id: 'P1',
				foodName: 'Veggie Pizza',
				image:
					'https://cdn.opeqe.com/image/menu/s/4f668bf7-92bc-41b4-6a66-08d75451a565.jpg',
				type: 'Pizza',
				location: 'Italian . Main Course . Lunch And Dinner',
				timeToReady: '25-30',
				price: '25.32',
			},
			{
				id: 'P2',
				foodName: 'Hawaiian Pizza',
				image:
					'https://cdn.opeqe.com/image/menu/s/f7c97a25-f8ad-4653-6a67-08d75451a565.jpg',
				type: 'Pizza',
				location: 'Italian . Main Course . Lunch And Dinner',
				timeToReady: '35-40',
				price: '17.54',
			},
			{
				id: 'P3',
				foodName: 'Boneless BBQ Chicken Pizza ',
				image:
					'https://cdn.opeqe.com/image/menu/s/7bd9e7e9-0040-4b38-6a65-08d75451a565.jpg',
				type: 'Pizza',
				location: 'Italian . Main Course . Lunch And Dinner',
				timeToRead: '35-40',
				price: '21.23',
			},
			{
				id: 'P4',
				foodName: 'Cheese Pizza',
				image:
					'https://cdn.opeqe.com/image/menu/s/c337a275-0ecc-40e1-6a64-08d75451a565.jpg',
				type: 'Pizza',
				location: 'Italian . Main Course . Lunch And Dinner',
				timeToReady: '35-40',
				price: '15.65',
			},
			{
				id: 'P5',
				foodName: 'Pepperoni Pizza',
				image:
					'https://cdn.opeqe.com/image/menu/s/4f07dcd3-8031-4274-6a63-08d75451a565.jpg',
				type: 'Pizza',
				location: 'Italian . Main Course . Lunch And Dinner',
				timeToReady: '35-40',
				price: '19.23',
			},
		],
	},
	{
		name: 'Breakfast',
		data: [
			{
				id: 'B1',
				foodName: 'Eggs Benedict',
				image: 'https://cdn.opeqe.com/image/menu/s/14.jpg',
				type: 'à la carte',
				location: 'AmericanMain CourseBreakfast',
				timeToReady: '5-9',
				price: '13.65',
			},
			{
				id: 'B2',
				foodName: 'Cinnamon Roll Pancake',
				image: 'https://cdn.opeqe.com/image/menu/s/13.jpg',
				type: 'Cinnamon roll pancake',
				location: 'AmericaMain CourseBreakfast',
				timeToReady: '5-7',
				price: '11.45',
			},
			{
				id: 'B3',
				foodName: 'My Hammy & Cheese Omelette',
				image: 'https://cdn.opeqe.com/image/menu/s/7.jpg',
				location: 'America Main Course Breakfast',
				type: 'Cinnamon roll pancake',
				timeToReady: '15-22',
				price: '15.21',
			},
		],
	},
	{
		name: 'Salad',
		data: [
			{
				id: 'S1',
				foodName: 'Chopped Salad',
				image:
					'https://cdn.opeqe.com/image/menu/s/3b9a57ce-e633-4175-6a5d-08d75451a565.jpg',
				location: 'American . Appetizer . Lunch & Dinner',
				timeToReady: '5-7',
				price: '12.21',
				type: 'Salad',
			},
			{
				id: 'S2',
				foodName: 'Kale Salad',
				image:
					'https://cdn.opeqe.com/image/menu/s/f9c1f8bb-432b-495e-6a5f-08d75451a565.jpg',
				location: 'American . Appetizer . Lunch & Dinner',
				timeToReady: '5-7',
				price: '6.21',
				type: 'Salad',
			},
			{
				id: 'S3',
				foodName: 'Greek Salad',
				image:
					'https://cdn.opeqe.com/image/menu/s/3af24fad-c5ca-44f4-6a60-08d75451a565.jpg',
				location: 'American . Appetizer . Lunch & Dinner',
				timeToReady: '9-13',
				price: '16.21',
				type: 'Salad',
			},
			{
				id: 'S3',
				foodName: 'Roasted Chicken Salad',
				image:
					'https://cdn.opeqe.com/image/menu/s/ed8b6b3b-9d2b-4ff5-6a5e-08d75451a565.jpg',
				location: 'American . Appetizer . Lunch & Dinner',
				timeToReady: '7-10',
				price: '19.81',
				type: 'Salad',
			},
		],
	},
	{
		name: 'Soup',
		data: [
			{
				id: 'SO1',
				foodName: 'Chicken Soup',
				image:
					'https://cdn.opeqe.com/image/menu/s/f1d00e37-dc3f-4ac5-6a62-08d75451a565.jpg',
				location: 'American . Appetizer . Lunch & Dinner',
				timeToReady: '7-10',
				price: '19.81',
				type: 'Soup',
			},
			{
				id: 'SO2',
				foodName: 'Creamy Chicken Soup',
				image:
					'https://cdn.opeqe.com/image/menu/s/dc8afebc-5043-4ee6-6a68-08d75451a565.jpg',
				location: 'American . Appetizer . Lunch & Dinner',
				timeToReady: '10-15',
				price: '10.81',
				type: 'Soup',
			},
		],
	},
]

export default FoodsApi