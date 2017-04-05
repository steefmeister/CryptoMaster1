CREATE TABLE `Users` (
	`ID`	INTEGER NOT NULL,
	`Username`	TEXT NOT NULL,
	`Password`	TEXT NOT NULL,
	PRIMARY KEY(`ID`)
);
INSERT INTO `Users`(`ID`,`Username`,`Password`) VALUES (1,'SteveO','youshallpass');
INSERT INTO `Users`(`ID`,`Username`,`Password`) VALUES (2,'Steve','passplease');
INSERT INTO `Users`(`ID`,`Username`,`Password`) VALUES (3,'Valery','welcomein');

SELECT * FROM Users;
