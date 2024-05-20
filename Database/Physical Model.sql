use master
go

if exists(select * from.sys.databases where name = 'Calendar')
	drop database Calendar

create database Calendar
go

use Calendar
go

create table Client(
	ID int identity primary key,
	Name varchar(100) not null,
	CPF char(11) not null,
	Password varchar(MAX) not null,
);
go


create table Tag (
    ID int identity primary key,
    Name varchar(100) not null,
    IDClient int references Client(ID) not null
);
go

create table Event (
    ID int identity primary key,
	Name varchar(255) not null,
    Description varchar(255),
    StartTime time,
    EndTime time,
	StartDate date not null,
	EndDate date,
	Done bit,
    IDClient int references Client(ID) not null,
	IDTag int references Tag(ID),
);
go


--drop table Event
--drop table Tag
--drop table Client