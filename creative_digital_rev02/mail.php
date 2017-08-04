<?php 



     mail(
	'ptukha.alina@gmail.com',
	'Новый заказ',
	'Данные клиента', 'Имя: ' .$_POST['name'] . ' Email: ' .$_POST['email'] . ' Сообщение:' .$_POST['description']
	);

?>