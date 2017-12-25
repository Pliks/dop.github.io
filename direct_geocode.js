ymaps.ready(init);

function init()
{
	var myMap = new ymaps.Map
	('map', 
			{center: 
				// объёмная чита.
				[52.027136, 113.437434], zoom: 12
			}
	);
	
	// Поиск координат Читы.
	ymaps.geocode
	('Чита, Ленина 43',
			{
				results: 1
			}
	).then
		(function (res)
			{
				// Выбираем первый результат геокодирования.
				var firstGeoObject = res.geoObjects.get(0),
			
				// Координаты геообъекта.
				coords = firstGeoObject.geometry.getCoordinates(),
			
				// Область видимости геообъекта.
				bounds = firstGeoObject.properties.get('boundedBy');
				
				// Масштабируем карту на область видимости геообъекта.
				// Сбросит маштаб и координаты к метке.
				/**myMap.setBounds(bounds,{checkZoomRange: true});*/
				//Все данные в виде javascript-объекта. Изменяет внешний вид метки.
				//console.log('Все данные геообъекта: ', firstGeoObject.properties.getAll());
				
				var myPlacemark = new ymaps.Placemark
					(coords,
						{
							iconContent: 'RJ-45',
							balloonContent: 'Выезд <strong>150</strong><br>RJ <strong>100</strong>'
						},
						{
							// Вид метки.
							preset: 'islands#violetStretchyIcon'
						}
					);
				
				myMap.geoObjects.add(myPlacemark);
			}
		);
}